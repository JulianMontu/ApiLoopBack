import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

// Configuración del datasource MongoDB
const config = {
  name: 'mongo',
  connector: 'mongodb',
  url: 'mongodb+srv://pos_test:DoUkMVzOYjEiUWky@pos.osekwof.mongodb.net/pos?retryWrites=true&w=majority&appName=pos',
  // Las siguientes propiedades no son necesarias si se usa la URL completa
  host: '',  // Si usas una URL, estos pueden dejarse vacíos
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true,
};

// Observador del ciclo de vida para desconectar el datasource al detener la aplicación
@lifeCycleObserver('datasource')
export class MongoDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongo', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
