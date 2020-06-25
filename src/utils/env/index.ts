import * as env from 'env-var';

const PORT = env.get('PORT').default(4000).required().asString();
const DEBUG = env.get('DEBUG').default('false').asBoolStrict();
const SECRET = env.get('SECRET').asString();
const IS_TEST = env.get('IS_TEST').default('false').asBoolStrict();
const IS_PRODUCTION = !!env.get('DATABASE_URL').asString();
const DATABASE_URL = env.get('DATABASE_URL').asString();
const RESET_DB = env.get('RESET_DB').asBoolStrict();
const TEST_DATABASE = env.get('TEST_DATABASE').asString();
const DATABASE = env.get('DATABASE').asString();
const DATABASE_USER = env.get('DATABASE_USER').asString();
const DATABASE_PASSWORD = env.get('DATABASE_PASSWORD').asString();

export const environmentVariables = {
  PORT,
  DEBUG,
  SECRET,
  IS_TEST,
  IS_PRODUCTION,
  RESET_DB,
  DATABASE_URL,
  TEST_DATABASE,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE,
};
