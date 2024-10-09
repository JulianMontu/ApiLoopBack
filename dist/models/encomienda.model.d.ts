import { Entity } from '@loopback/repository';
export declare class Encomienda extends Entity {
    id?: string;
    descripcion: string;
    peso?: number;
    tipo: string;
    presentacion: string;
    [prop: string]: any;
    constructor(data?: Partial<Encomienda>);
}
export interface EncomiendaRelations {
}
export type EncomiendaWithRelations = Encomienda & EncomiendaRelations;
