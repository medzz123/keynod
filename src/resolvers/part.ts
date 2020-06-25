import Sequelize from 'sequelize';

import { Context } from '../typings/context';
import { fromCursorHash, toCursorHash } from '../utils';

export default {
  Query: {
    parts: async (_, args, context: Context) => {
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
    part: async (_, args, context: Context) => {
      const {
        input: { regNo },
      } = args;
      const { models } = context;
      return await models.Part.findByPk(regNo);
    },
  },

  Mutation: {
    createPart: async (parent, args, context: Context) => {
      const { models } = context;
      const {
        input: {
          name,
          quantity,
          price,
          manufacturer,
          description,
          vehicleType,
          threshold,
        },
      } = args;

      const part = await models.Part.create({
        name,
        quantity,
        price,
        manufacturer,
        description,
        vehicleType,
        threshold,
      });

      return part;
    },
    deletePart: async (_, args, context: Context) => {
      const { models } = context;
      const {
        input: { id },
      } = args;
      return await models.Part.destroy({ where: { id } });
    },
  },
};
