"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
dotenv_1.config({ path: path_1.resolve(__dirname, '../../.env') });
console.log(process.env.NODE_ENV);
exports.knexConfig = {
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
    ...objection_1.knexSnakeCaseMappers()
};
const environment = process.env.NODE_ENV || 'development';
// console.log(knexConfig[environment]);
exports.knex = knex_1.default(exports.knexConfig);
//# sourceMappingURL=db.js.map