"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ServicioRepository = class ServicioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, encomiendaRepositoryGetter, clienteRepositoryGetter) {
        super(models_1.Servicio, dataSource);
        this.encomiendaRepositoryGetter = encomiendaRepositoryGetter;
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.destinoFk = this.createBelongsToAccessorFor('destinoFk', clienteRepositoryGetter);
        this.registerInclusionResolver('destinoFk', this.destinoFk.inclusionResolver);
        this.origenFk = this.createBelongsToAccessorFor('origenFk', clienteRepositoryGetter);
        this.registerInclusionResolver('origenFk', this.origenFk.inclusionResolver);
        this.encomienda = this.createBelongsToAccessorFor('encomienda', encomiendaRepositoryGetter);
        this.registerInclusionResolver('encomienda', this.encomienda.inclusionResolver);
    }
};
exports.ServicioRepository = ServicioRepository;
exports.ServicioRepository = ServicioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongo')),
    tslib_1.__param(1, repository_1.repository.getter('EncomiendaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ClienteRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoDataSource, Function, Function])
], ServicioRepository);
//# sourceMappingURL=servicio.repository.js.map