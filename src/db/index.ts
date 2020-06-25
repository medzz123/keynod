import { Sequelize } from 'sequelize';

import { environmentVariables } from '../utils/env';

let sequelize: Sequelize;

if (environmentVariables.IS_PRODUCTION) {
  sequelize = new Sequelize(environmentVariables.DATABASE_URL, {
    dialect: 'postgres',
  });
} else {
  sequelize = new Sequelize(
    environmentVariables.TEST_DATABASE || environmentVariables.DATABASE,
    environmentVariables.DATABASE_USER,
    environmentVariables.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    }
  );
}

export default sequelize;
