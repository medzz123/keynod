import sequelize from '../db';
import { seedDatabase } from '../utils/seed';

const resetDatabaseAndSeed = async () => {
  console.log('Deleting current records');
  sequelize.sync({ force: true }).then(async () => {
    await seedDatabase();
    console.log('Seeding database completed');
  });
};

resetDatabaseAndSeed();
