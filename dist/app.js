"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = require("./config/db");
const error_handler_1 = require("./midlewares/error.handler");
const objection_1 = require("objection");
const port = 3000;
const app = express_1.default();
objection_1.Model.knex(db_1.knex);
// midlewaresss
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
routes_1.default(app);
app.use(error_handler_1.errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});
//# sourceMappingURL=app.js.map