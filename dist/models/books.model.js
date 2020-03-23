"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const user_model_1 = __importDefault(require("./user.model"));
const base_model_1 = __importDefault(require("./base.model"));
class Books extends base_model_1.default {
}
exports.default = Books;
Books.tableName = 'books';
Books.relationMappings = () => ({
    user: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: user_model_1.default,
        join: {
            from: 'books.userId',
            to: 'users.id'
        }
    }
});
//# sourceMappingURL=books.model.js.map