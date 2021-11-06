import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Encomienda extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
  })
  peso?: number;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  presentacion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Encomienda>) {
    super(data);
  }
}

export interface EncomiendaRelations {
  // describe navigational properties here
}

export type EncomiendaWithRelations = Encomienda & EncomiendaRelations;
