import { combineResolvers } from 'graphql-resolvers';
import Sequelize from 'sequelize';

import { Context } from '../typings/context';
import { fromCursorHash, toCursorHash } from '../utils';
import { isMessageOwner } from './authorization';

export default {
  Query: {
    messages: async (_, args, context: Context) => {
      const { models } = context;
      const { cursor, limit = 100 } = args;
      const cursorOptions = cursor
        ? {
            where: {
              createdAt: {
                [Sequelize.Op.lt]: fromCursorHash(cursor),
              },
            },
          }
        : {};

      const messages = await models.Message.findAll({
        order: [['createdAt', 'DESC']],
        limit: limit + 1,
        ...cursorOptions,
      });

      const hasNextPage = messages.length > limit;
      const edges = hasNextPage ? messages.slice(0, -1) : messages;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: toCursorHash(edges[edges.length - 1].createdAt.toString()),
        },
      };
    },
    message: async (_, args, context: Context) => {
      const { id } = args;
      const { models } = context;
      return await models.Message.findByPk(id);
    },
  },

  Mutation: {
    createMessage: async (parent, args, context: Context) => {
      const { models, me } = context;
      const { text } = args;
      const message = await models.Message.create({
        text,
        userId: me.id,
      });

      return message;
    },
    deleteMessage: combineResolvers(
      isMessageOwner,
      async (_, args, context: Context) => {
        const { models } = context;
        const { id } = args;
        return await models.Message.destroy({ where: { id } });
      }
    ),
  },

  Message: {
    user: async (message, _, context: Context) => {
      const { loaders } = context;
      return await loaders.user.load(message.userId);
    },
  },
};
