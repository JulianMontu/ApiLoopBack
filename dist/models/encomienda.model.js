"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encomienda = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Encomienda = class Encomienda extends repository_1.Entity {
    id;
    descripcion;
    peso;
    tipo;
    presentacion;
    constructor(data) {
        super(data);
    }
};
exports.Encomienda = Encomienda;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomienda.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomienda.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Encomienda.prototype, "peso", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomienda.prototype, "tipo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomienda.prototype, "presentacion", void 0);
exports.Encomienda = Encomienda = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Encomienda);
//# sourceMappingURL=encomienda.model.js.map