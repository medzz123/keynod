import Sequelize from 'sequelize';

import { environmentVariables } from '../utils/env';

let sequelize;

if (environmentVariables.IS_PRODUCTION) {
  // @ts-ignore
  sequelize = new Sequelize(environmentVariables.DATABASE_URL, {
    dialect: 'postgres',
  });
} else {
  // @ts-ignore
  sequelize = new Sequelize(
    environmentVariables.TEST_DATABASE || environmentVariables.DATABASE,
    environmentVariables.DATABASE_USER,
    environmentVariables.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    }
  );
}

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
  Customer: sequelize.import('./customer'),
  Vehicle: sequelize.import('./vehicle'),
  Part: sequelize.import('./part'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
