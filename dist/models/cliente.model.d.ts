import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    id?: string;
    cedula: string;
    nombre: string;
    apellido: string;
    pais: string;
    ciudad: string;
    departamento: string;
    direccion: string;
    telefono: string;
    email: string;
    [prop: string]: any;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export type ClienteWithRelations = Cliente & ClienteRelations;
