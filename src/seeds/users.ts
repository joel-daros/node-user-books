import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  return knex('users').insert([
    { username: 'fodark', email: 'mock@email.com' },
    { username: 'jonh', email: 'mock2@email.com' },
    { username: 'david', email: 'mock3@email.com' }
  ]);
}
