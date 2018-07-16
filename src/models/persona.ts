import { Response } from './response';

export interface Persona extends Response {
    nombres: string;
    ap_paterno: string;
    ap_materno: string;
    num_doc: string;
    fecha_nac: string;
    sexo: 'M' | 'F';
}