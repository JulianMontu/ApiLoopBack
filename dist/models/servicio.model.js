"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const encomienda_model_1 = require("./encomienda.model");
const cliente_model_1 = require("./cliente.model");
let Servicio = class Servicio extends repository_1.Entity {
    id;
    fecha;
    hora;
    valor;
    encomiendaId;
    origen;
    destino;
    constructor(data) {
        super(data);
    }
};
exports.Servicio = Servicio;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "fecha", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "hora", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Servicio.prototype, "valor", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => encomienda_model_1.Encomienda),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "encomiendaId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente, { name: 'origenFk' }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "origen", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente, { name: 'destinoFk' }),
    tslib_1.__metadata("design:type", String)
], Servicio.prototype, "destino", void 0);
exports.Servicio = Servicio = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Servicio);
//# sourceMappingURL=servicio.model.js.map