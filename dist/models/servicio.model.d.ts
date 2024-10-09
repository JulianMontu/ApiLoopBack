import { Entity } from '@loopback/repository';
export declare class Servicio extends Entity {
    id?: string;
    fecha: string;
    hora: string;
    valor: number;
    encomiendaId: string;
    origen: string;
    destino: string;
    constructor(data?: Partial<Servicio>);
}
export interface ServicioRelations {
}
export type ServicioWithRelations = Servicio & ServicioRelations;
