import models from '../../models';
import customers from './customers.json';
import payments from './payments.json';
import vehicles from './vehicles.json';

export const seedDatabase = async () => {
  customers.forEach(async (customer) => {
    await models.Customer.create(customer);
  });

  vehicles.forEach(async (vehicle) => {
    await models.Vehicle.create(vehicle);
  });

  payments.forEach(async (payments) => {
    await models.Payment.create(payments);
  });
};
