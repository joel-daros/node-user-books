"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id').primary(),
            table.string('bookname'),
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .index(),
            table.timestamps(true, true);
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTableIfExists('books');
}
exports.down = down;
