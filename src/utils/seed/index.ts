import models from '../../models';
import { getCustomers, getParts, getUsers, getVehicles } from './getData';

export const seedDatabase = async () => {
  const users = await getUsers();
  const customers = await getCustomers();
  const vehicles = await getVehicles();
  const parts = await getParts();

  users.forEach(async (el) => {
    await models.User.create(el);
  });

  customers.forEach(async (el) => {
    await models.Customer.create(el);
  });

  vehicles.forEach(async (el) => {
    await models.Vehicle.create(el);
  });

  parts.forEach(async (el) => {
    await models.Part.create(el);
  });
};
