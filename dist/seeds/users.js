"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    // Inserts seed entries
    return knex('users').insert([
        { username: 'fodark', email: 'mock@email.com' },
        { username: 'jonh', email: 'mock2@email.com' },
        { username: 'david', email: 'mock3@email.com' }
    ]);
}
exports.seed = seed;
//# sourceMappingURL=users.js.map