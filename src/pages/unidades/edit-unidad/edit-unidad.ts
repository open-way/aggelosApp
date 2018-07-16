import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Unidad } from '../../../models';
import { UnidadesService, ToastService } from '../../../services';

/**
 * Generated class for the EditUnidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-unidad',
  templateUrl: 'edit-unidad.html',
})
export class EditUnidadPage {
  public unidad: Unidad = {
    alias: '',
    nombre: '',
    estado: false,
    logo: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private unidadesService: UnidadesService, private toastService: ToastService) {
  }

  ionViewDidLoad() {
    this.unidad = this.navParams.get('unidad');
  }

  public updateUnidad(unidad: Unidad) {
    this.unidadesService.update$(unidad).then(ref => {
      this.toastService.show(`${unidad.nombre} fué guardado!`);
      this.navCtrl.setRoot('ListUnidadesPage')
    });
  }

  public removeUnidad(unidad: Unidad) {
    this.unidadesService.remove$(unidad.key).then(() => {
      this.toastService.show(`${unidad.nombre} fué Eliminado!`);
      this.navCtrl.setRoot('ListUnidadesPage')
    })
  }

}
