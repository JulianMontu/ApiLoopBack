"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioEncomiendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServicioEncomiendaController = class ServicioEncomiendaController {
    servicioRepository;
    constructor(servicioRepository) {
        this.servicioRepository = servicioRepository;
    }
    async getEncomienda(id) {
        return this.servicioRepository.encomienda(id);
    }
};
exports.ServicioEncomiendaController = ServicioEncomiendaController;
tslib_1.__decorate([
    (0, rest_1.get)('/servicios/{id}/encomienda', {
        responses: {
            '200': {
                description: 'Encomienda belonging to Servicio',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Encomienda) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioEncomiendaController.prototype, "getEncomienda", null);
exports.ServicioEncomiendaController = ServicioEncomiendaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ServicioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ServicioRepository])
], ServicioEncomiendaController);
//# sourceMappingURL=servicio-encomienda.controller.js.map