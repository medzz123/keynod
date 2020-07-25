import { Resolvers } from '../typings/generated';

const customerResolver: Resolvers = {
  Query: {
    customers: async (_, args, context) => {
      const { models } = context;
      return await models.Customer.findAll();
    },
    customer: async (_, args, context) => {
      const { models } = context;
      const { id } = args;
      return await models.Customer.findByPk(id);
    },
  },

  Mutation: {
    createCustomer: async (_, args, context) => {
      const { input } = args;
      const { models } = context;

      const user = await models.Customer.create({ ...input });

      return user;
    },

    deleteCustomer: async (_, args, context) => {
      const { id } = args;
      const { models } = context;
      return await models.Customer.destroy({
        where: { id },
      });
    },
  },

  Customer: {
    vehicles: async (customer, _, context) => {
      const { models } = context;
      return await models.Vehicle.findAll({
        where: { customerId: customer.id },
      });
    },
  },
};

export default customerResolver;
