"use strict";
// Update with your config settings.
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: '192.168.6.128',
            database: 'DESENV001',
            user: 'postgres',
            password: 'postgres'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            extension: 'ts',
            tableName: 'knex_migrations',
            directory: './src/migrations'
        },
        seeds: { directory: './src/seeds' }
    },
    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
