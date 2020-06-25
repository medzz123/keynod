import { Context } from '../typings/context';

export default {
  Query: {
    customers: async (parent, args, context: Context) => {
      const { models } = context;
      return await models.Customer.findAll();
    },
    customer: async (parent, args, context: Context) => {
      const { models } = context;
      const { id } = args;
      return await models.Customer.findByPk(id);
    },
  },

  Mutation: {
    createCustomer: async (parent, args, context: Context) => {
      const {
        input: {
          name,
          contact,
          phone,
          email,
          role,
          lineOne,
          lineTwo,
          city,
          postcode,
          country,
        },
      } = args;
      const { models } = context;

      const user = await models.Customer.create({
        name,
        contact,
        phone,
        email,
        role,
        lineOne,
        lineTwo,
        city,
        postcode,
        country,
      });

      return user;
    },

    deleteCustomer: async (parent, args, context: Context) => {
      const {
        input: { id },
      } = args;
      const { models } = context;
      return await models.Customer.destroy({
        where: { id },
      });
    },
  },

  Customer: {
    vehicles: async (customer, args, context: Context) => {
      const { models } = context;
      return await models.Vehicle.findAll({
        where: { customerId: customer.id },
      });
    },
  },
};
