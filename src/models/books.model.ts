import { Model } from 'objection';
import User from './user.model';
import BaseModel from './base.model';

export default class Books extends BaseModel {
  static tableName = 'books';
  bookName: string;
  userId: number;

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'books.userId',
        to: 'users.id'
      }
    }
  });
}
