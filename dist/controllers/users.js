"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
class User {
    static async getUsers(req, res) {
        const query = user_model_1.default.query();
        // retorna os livros das pessoass
        if (req.query.withBooks) {
            query.withGraphJoined('books');
        }
        res.status(200).send(await query);
    }
    static async getUser(req, res, next) {
        try {
            const user = await user_model_1.default.query().where('id', req.params.id);
            res.status(200).send(user);
        }
        catch (error) {
            next(error);
        }
    }
    static async updateUser(req, res, next) {
        try {
            const numUpdated = await user_model_1.default.query()
                .findById(req.params.id)
                .patch(req.body);
            res.status(200).send({ sucess: numUpdated });
        }
        catch (error) {
            next(error);
        }
    }
    static async addUser(req, res, next) {
        try {
            const insertGraph = await user_model_1.default.transaction(async (trx) => {
                // verificar se o usuário já existe antes de fazer o insert
                // const user = await UserModel.query(trx).findById(parseInt(req.body.id));
                // if (!user) {
                return user_model_1.default.query(trx)
                    .allowGraph('books')
                    .insertGraph(req.body);
                // } else {
                //   res.status(400).send({ error: 'User already exists' });
                // }
            });
            res.status(200).send(insertGraph);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = User;
//# sourceMappingURL=users.js.map