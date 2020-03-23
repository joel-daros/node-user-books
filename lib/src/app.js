"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const port = 3000;
const app = express_1.default();
const server = http_1.default.createServer(app); // ver pra que serve isso
// midleware de log
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('*', (req, res) => {
    res.status(200).send({ message: 'Welcom to default API Route' });
});
server.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});
