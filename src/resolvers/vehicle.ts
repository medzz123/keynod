import Sequelize from 'sequelize';

import { Context } from '../typings/context';
import { fromCursorHash, toCursorHash } from '../utils';

export default {
  Query: {
    vehicles: async (_, args, context: Context) => {
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

      const vehicles = await models.Vehicle.findAll({
        order: [['createdAt', 'DESC']],
        limit: limit + 1,
        ...cursorOptions,
      });

      const hasNextPage = vehicles.length > limit;
      const edges = hasNextPage ? vehicles.slice(0, -1) : vehicles;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: toCursorHash(edges[edges.length - 1].createdAt.toString()),
        },
      };
    },
    vehicle: async (_, args, context: Context) => {
      const {
        input: { regNo },
      } = args;
      const { models } = context;
      return await models.Vehicle.findByPk(regNo);
    },
  },

  Mutation: {
    createVehicle: async (parent, args, context: Context) => {
      const { models } = context;
      const {
        input: { customerId, make, model, regNo, yearsUsed, color },
      } = args;

      const vehicle = await models.Vehicle.create({
        customerId,
        make,
        model,
        regNo,
        yearsUsed,
        color,
      });

      return vehicle;
    },
    deleteVehicle: async (_, args, context: Context) => {
      const { models } = context;
      const {
        input: { regNo },
      } = args;
      return await models.Vehicle.destroy({ where: { regNo } });
    },
  },

  Vehicle: {
    customer: async (vehicle, _, context: Context) => {
      const { loaders } = context;
      return await loaders.customer.load(vehicle.customerId);
    },
  },
};
