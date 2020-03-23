"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const uuid_1 = require("uuid");
class User extends objection_1.Model {
    $beforeInsert() {
        this.id = uuid_1.v4();
        this.createdAt = new Date().toISOString();
    }
    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}
exports.default = User;
//# sourceMappingURL=base.model.js.map