import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Unidad } from '../../../models';
import { Observable } from 'rxjs';
import { UnidadesProvider } from '../../../providers/unidades/unidades';

/**
 * Generated class for the ListUnidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-unidades',
  templateUrl: 'list-unidades.html',
})
export class ListUnidadesPage {

  public unidades$: Observable<Unidad[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private unidadesProvider: UnidadesProvider,
  ) {

    this.unidades$ = this.unidadesProvider
      .getList$() // Db list
      .snapshotChanges() // Key and Value
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      }
      ).map(changes => changes.reverse())
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad UnidadesPage');
  }


}
