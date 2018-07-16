import { Response } from './response';

export interface Unidad extends Response {
    nombre: string;
    alias: string,
    estado: boolean;
    logo: string;
}