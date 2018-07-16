import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Persona } from '../models';
import { ResourceService } from './resource.service';

@Injectable()
export class PersonasService extends ResourceService<Persona>{
    constructor(angularFireDatabase: AngularFireDatabase) {
        super(
            angularFireDatabase,
            'personas',
        )
    }
}