import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { PersonasService } from '../../../services/personas.service';
import { Observable } from 'rxjs';
import { Persona } from '../../../models';
import { PersonasProvider } from '../../../providers/personas/personas';

/**
 * Generated class for the ListMiembrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-miembros',
  templateUrl: 'list-miembros.html',
})
export class ListMiembrosPage {
  public personas$: Observable<Persona[]>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private personasProvider: PersonasProvider) {

    this.personas$ = this.personasProvider
      .getList$() // Db list
      .snapshotChanges() // Key and Value
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      }
      ).map(changes => changes.reverse())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMiembrosPage');
  }

  public addMiembro() {

  }

}
