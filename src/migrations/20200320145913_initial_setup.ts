import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('users', t => {
      t.uuid('id').primary(),
        t.string('username').unique(),
        t.string('password_hash'),
        t.string('email'),
        t.timestamps(true, true);
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

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('books').dropTableIfExists('users');
}
