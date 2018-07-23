import { Injectable } from '@angular/core';
import { ResourceService } from '../utils/resource.service';
import { Unidad } from '../../models';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the UnidadesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnidadesProvider extends ResourceService<Unidad> {

  constructor(angularFireDatabase: AngularFireDatabase) {
    super(
      angularFireDatabase,
      'unidades',
    )
    // console.log('Hello UnidadesProvider Provider');
  }

}
