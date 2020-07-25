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
      return await models.Customer.create({ ...input });
    },
  },
};

export default customerResolver;
