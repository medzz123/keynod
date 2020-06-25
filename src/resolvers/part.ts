import Sequelize from 'sequelize';

import { Resolvers } from '../typings/types';
import { fromCursorHash, toCursorHash } from '../utils';

const partResolver: Resolvers = {
  Query: {
    parts: async (_, args, context) => {
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

      const parts = await models.Part.findAll({
        order: [['createdAt', 'DESC']],
        limit: limit + 1,
        ...cursorOptions,
      });

      const hasNextPage = parts.length > limit;
      const edges = hasNextPage ? parts.slice(0, -1) : parts;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: toCursorHash(edges[edges.length - 1].createdAt.toString()),
        },
      };
    },
    part: async (_, args, context) => {
      const {
        input: { id },
      } = args;
      const { models } = context;
      return await models.Part.findByPk(id);
    },
  },

  Mutation: {
    createPart: async (_, args, context) => {
      const { models } = context;
      const { input } = args;

      const part = await models.Part.create({
        ...input,
      });

      return part;
    },
    deletePart: async (_, args, context) => {
      const { models } = context;
      const {
        input: { id },
      } = args;
      return await models.Part.destroy({ where: { id } });
    },
  },
};

export default partResolver;
