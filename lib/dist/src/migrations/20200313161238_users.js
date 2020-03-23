"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id'), t.string('username'), t.string('email'), t.timestamps(true, true);
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTableIfExists('users');
}
exports.down = down;
