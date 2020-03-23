"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const books_model_1 = __importDefault(require("./books.model"));
const base_model_1 = __importDefault(require("./base.model"));
class Base extends base_model_1.default {
}
exports.default = Base;
Base.tableName = 'users';
Base.jsonSchema = {
    type: 'object',
    required: ['username'],
    properties: {
        id: { type: 'uuid' },
        username: { type: 'string', minLength: 1, maxLength: 10 },
        email: { type: 'email' }
    }
};
Base.relationMappings = () => ({
    books: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: books_model_1.default,
        join: {
            from: 'users.id',
            to: 'books.userId'
        }
    }
});
//# sourceMappingURL=user.model.js.map