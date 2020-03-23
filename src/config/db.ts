import Knex, { Config } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../../.env') });
console.log(process.env.NODE_ENV);
export const knexConfig = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    extension: 'ts',
    tableName: 'knex_migrations',
    directory: '../migrations'
  },
  seeds: {
    directory: '../seeds'
  },
  ...knexSnakeCaseMappers()
} as Config;

const environment = process.env.NODE_ENV || 'development';

// console.log(knexConfig[environment]);

export const knex = Knex(knexConfig as Config);
