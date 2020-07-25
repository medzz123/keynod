import Sequelize from 'sequelize';

import { Resolvers } from '../typings/generated';
import { fromCursorHash, toCursorHash } from '../utils';

const vehicleResolvers: Resolvers = {
  Query: {
    vehicles: async (_, args, context) => {
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
    vehicle: async (_, args, context) => {
      const { id } = args;
      const { models } = context;
      return await models.Vehicle.findByPk(id);
    },
  },

  Mutation: {
    createVehicle: async (_, args, context) => {
      const { models } = context;
      const {
        input: { customerId, model, regNo, yearsUsed },
      } = args;

      const vehicle = await models.Vehicle.create({
        customerId,
        model,
        regNo,
        yearsUsed,
      });

      return vehicle;
    },
    deleteVehicle: async (_, args, context) => {
      const { models } = context;
      const { id } = args;
      return await models.Vehicle.destroy({ where: { id } });
    },
  },

  Vehicle: {
    customer: async (vehicle, _, context) => {
      const { loaders } = context;
      // @ts-ignore
      return await loaders.customer.load(vehicle.customerId);
    },
  },
};

export default vehicleResolvers;
