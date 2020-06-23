import { combineResolvers } from "graphql-resolvers";
import { AuthenticationError, UserInputError } from "apollo-server";

import { isAdmin } from "./authorization";
import { Context } from "../typings/context";
import { createToken } from "../utils";

export default {
  Query: {
    users: async (parent, args, context: Context) => {
      const { models } = context;
      return await models.User.findAll();
    },
    user: async (parent, args, context: Context) => {
      const { models } = context;
      const { id } = args;
      return await models.User.findByPk(id);
    },
    me: async (parent, args, context: Context) => {
      const { models, me } = context;
      if (!me) {
        return null;
      }

      return await models.User.findByPk(me.id);
    },
  },

  Mutation: {
    signUp: async (parent, args, context: Context) => {
      const { username, email, password, role = "USER" } = args;
      const { models, secret } = context;
      const user = await models.User.create({
        username,
        email,
        password,
        role,
      });

      return { token: createToken(user, secret, "30m") };
    },

    signIn: async (parent, args, context: Context) => {
      const { login, password } = args;
      const { models, secret } = context;
      const user = await models.User.findByLogin(login);

      if (!user) {
        throw new UserInputError("No user found with this login credentials.");
      }

      const isValid = await user.validatePassword(password);

      if (!isValid) {
        throw new AuthenticationError("Invalid password.");
      }

      return { token: createToken(user, secret, "30m") };
    },

    deleteUser: combineResolvers(
      isAdmin,
      async (parent, args, context: Context) => {
        const { id } = args;
        const { models } = context;
        return await models.User.destroy({
          where: { id },
        });
      }
    ),
  },

  User: {
    messages: async (user, args, context: Context) => {
      const { models } = context;
      return await models.Message.findAll({
        where: {
          userId: user.id,
        },
      });
    },
  },
};
