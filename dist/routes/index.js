"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../controllers/users"));
exports.default = (app) => {
    app.get('/api/users', (req, res) => users_1.default.getUsers(req, res));
    app.get('/api/users/:id', (req, res, next) => users_1.default.getUser(req, res, next));
    app.post('/api/users', (req, res, next) => users_1.default.addUser(req, res, next));
    app.patch('/api/users/:id', (req, res, next) => users_1.default.updateUser(req, res, next));
    //
    app.get('*', (req, res) => {
        res.status(200).send({ message: 'Welcom to default API Route of my app' });
    });
};
//# sourceMappingURL=index.js.map