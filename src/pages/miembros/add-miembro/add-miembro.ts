import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { storage } from 'firebase';
import { StorePhotosService } from '../../../providers/utils/store-photos.service';
import { PersonasProvider } from '../../../providers/personas/personas';
import { ToastService } from '../../../providers/utils/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-miembro',
  templateUrl: 'add-miembro.html',
})
export class AddMiembroPage {

  constructor(public navCtrl: NavController,
    private camera: Camera,
    private storePhotosService: StorePhotosService,
    private personasProvider: PersonasProvider,
    private toastService: ToastService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMiembroPage');
  }

  // https://www.youtube.com/watch?v=Pi6AtssyaNw
  // AQUI LO DE SUBIR IMAGENES AL STORAGE

  public async getPhoto() {
    try {
      // Defining camera options
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, /** AQUI */
        correctOrientation: true,
      }
      const photo = await this.camera.getPicture(options);
      return photo;
    }
    catch (error) {
      throw Error('No logro sacar la Photo');
    }
  }

  async takePhoto() {
    try {
      const myPhoto = await this.getPhoto();
      this.image = `data:image/jpeg;base64,${myPhoto}`;
      const uploadPhoto = await this.storePhotosService.upload(this.image);
      this.metadata = uploadPhoto.metadata;
      this.snapshot = uploadPhoto.snapshot;

    } catch (error) {
      console.log(error);
    }
  }

  public image: any;
  public metadata: any;
  public snapshot: any;

  public addPersona = () => {
    const addNewPerson = {
      apellido_materno: 'Cruz',
      apellido_paterno: 'Aliaga',
      fecha_nacimiento: '09/11/1994',
      nombres: 'Anette Moreno',
      num_doc: '40531659',
      sexo: 'F',
      // photo: {
      //   created: '',
      //   url: '',
      //   fullPath: '',
      //   contentType: '',
      // }
      photo: {
        created: this.metadata.timeCreated || '',
        url: this.snapshot.downloadURL || '',
        fullPath: this.metadata.fullPath || '',
        contentType: this.metadata.contentType || '',
      }
    }
    this.personasProvider.add$(addNewPerson).then(ref => {
      this.toastService.show(`${addNewPerson.nombres} fué Agregado!`);
    });
  }
  // gs://ionic-aggelos.appspot.com/photos/30cc1974-9fe7-4569-89d7
  // gs://ionic-aggelos.appspot.com/photos/30cc1974-9fe7-4569-89d7
}
