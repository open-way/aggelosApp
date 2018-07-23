import { Response } from './response';

export interface Persona extends Response {
    nombres: string;
    apellido_paterno: string;
    apellido_materno: string;
    num_doc: string;
    fecha_nacimiento: string;
    sexo: string;
    photo: any;
}