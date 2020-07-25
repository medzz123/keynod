import models from '../../models';
import customers from './customers.json';

export const seedDatabase = async () => {
  customers.forEach(async (el) => {
    await models.Customer.create(el);
  });
};
