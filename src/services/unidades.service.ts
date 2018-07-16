import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Unidad } from '../models';
import { ResourceService } from './resource.service';

@Injectable()
export class UnidadesService extends ResourceService<Unidad>{
    constructor(angularFireDatabase: AngularFireDatabase) {
        super(
            angularFireDatabase,
            'unidades',
        )
    }
}