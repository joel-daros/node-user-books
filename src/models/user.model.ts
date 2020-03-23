import { Model } from 'objection';
import Books from './books.model';
import BaseModel from './base.model';

export default class Base extends BaseModel {
  static tableName = 'users';

  static jsonSchema = {
    type: 'object',
    required: ['username'],

    properties: {
      id: { type: 'uuid' },
      username: { type: 'string', minLength: 1, maxLength: 10 },
      email: { type: 'email' }
    }
  };

  username: string;
  email: string;

  static relationMappings = () => ({
    books: {
      relation: Model.HasManyRelation,
      modelClass: Books,
      join: {
        from: 'users.id',
        to: 'books.userId'
      }
    }
  });
}
