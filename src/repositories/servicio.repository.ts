import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Servicio, ServicioRelations, Encomienda, Cliente} from '../models';
import {EncomiendaRepository} from './encomienda.repository';
import {ClienteRepository} from './cliente.repository';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.id,
  ServicioRelations
> {

  public readonly encomienda: BelongsToAccessor<Encomienda, typeof Servicio.prototype.id>;

  public readonly origenFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  public readonly destinoFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('EncomiendaRepository') protected encomiendaRepositoryGetter: Getter<EncomiendaRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Servicio, dataSource);
    this.destinoFk = this.createBelongsToAccessorFor('destinoFk', clienteRepositoryGetter,);
    this.registerInclusionResolver('destinoFk', this.destinoFk.inclusionResolver);
    this.origenFk = this.createBelongsToAccessorFor('origenFk', clienteRepositoryGetter,);
    this.registerInclusionResolver('origenFk', this.origenFk.inclusionResolver);
    this.encomienda = this.createBelongsToAccessorFor('encomienda', encomiendaRepositoryGetter,);
    this.registerInclusionResolver('encomienda', this.encomienda.inclusionResolver);
  }
}
