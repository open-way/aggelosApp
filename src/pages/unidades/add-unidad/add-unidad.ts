import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Unidad } from '../../../models';
import { UnidadesService, ToastService } from '../../../services';

/**
 * Generated class for the AddUnidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-unidad',
  templateUrl: 'add-unidad.html',
})
export class AddUnidadPage {

  public unidad: Unidad = {
    nombre: undefined,
    alias: undefined,
    estado: true,
    logo: undefined,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastService: ToastService,
    private unidadesService: UnidadesService) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddUnidadPage');
  }

  addUnidad(unidad: Unidad) {
    this.unidadesService.add$(unidad).then(ref => {
      this.toastService.show(`${unidad.nombre} fué Agregado!`);

      this.navCtrl.setRoot('ListUnidadesPage', { key: ref.key })
    });
  }

}
