import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Servicio, ServicioRelations, Encomienda, Cliente } from '../models';
import { EncomiendaRepository } from './encomienda.repository';
import { ClienteRepository } from './cliente.repository';
export declare class ServicioRepository extends DefaultCrudRepository<Servicio, typeof Servicio.prototype.id, ServicioRelations> {
    protected encomiendaRepositoryGetter: Getter<EncomiendaRepository>;
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    readonly encomienda: BelongsToAccessor<Encomienda, typeof Servicio.prototype.id>;
    readonly origenFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;
    readonly destinoFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;
    constructor(dataSource: MongoDataSource, encomiendaRepositoryGetter: Getter<EncomiendaRepository>, clienteRepositoryGetter: Getter<ClienteRepository>);
}
