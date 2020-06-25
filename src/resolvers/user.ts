import { AuthenticationError, UserInputError } from 'apollo-server';

import { Resolvers } from '../typings/types';
import { createToken } from '../utils';

const userResolver: Resolvers = {
  Query: {
    users: async (_, _1, context) => {
      const { models } = context;
      return await models.User.findAll();
    },
    user: async (_, args, context) => {
      const { models } = context;
      const { id } = args;
      return await models.User.findByPk(id);
    },
    me: async (_, _1, context) => {
      const { models, me } = context;
      if (!me) {
        return null;
      }

      return await models.User.findByPk(me.id);
    },
  },

  Mutation: {
    createUser: async (_, args, context) => {
      const { input } = args;
      const { models } = context;
      const user = await models.User.create({
        ...input,
      });

      return user;
    },

    signIn: async (_, args, context) => {
      const { login, password } = args;
      const { models, secret } = context;
      const user = await models.User.prototype.findByLogin(login);

      if (!user) {
        throw new UserInputError('No user found with this login credentials.');
      }

      const isValid = await user.validatePassword(password);

      if (!isValid) {
        throw new AuthenticationError('Invalid password.');
      }

      const token = await createToken(user, secret, '30m');

      return { token };
    },

    deleteUser: async (_, args, context) => {
      const { id } = args;
      const { models } = context;
      return await models.User.destroy({
        where: { id },
      });
    },
  },
};

export default userResolver;
