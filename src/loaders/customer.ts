import Sequelize from "sequelize";

export const batchCustomers = async (keys, models) => {
  const customers = await models.Customer.findAll({
    where: {
      id: {
        [Sequelize.Op.in]: keys,
      },
    },
  });

  return keys.map((key) => customers.find((customer) => customer.id === key));
};
