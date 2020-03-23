"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return knex.schema
        .createTable('users', t => {
        t.uuid('id').primary(), t.string('username'), t.string('email'), t.timestamps(true, true);
    })
        .createTable('books', table => {
        table.uuid('id').primary(),
            table.string('book_name'),
            table
                .uuid('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .index(),
            table.timestamps(true, true);
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTableIfExists('books').dropTableIfExists('users');
}
exports.down = down;
//# sourceMappingURL=20200320145913_initial_setup.js.map