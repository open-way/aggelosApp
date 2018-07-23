import { Injectable } from '@angular/core';
import { Persona } from '../../models';
import { ResourceService } from '../utils/resource.service';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the PersonasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonasProvider extends ResourceService<Persona>{

  constructor(angularFireDatabase: AngularFireDatabase) {
    super(
      angularFireDatabase,
      'personas',
    )
    // console.log('Hello PersonasProvider Provider');
  }
}
