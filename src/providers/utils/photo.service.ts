import { Injectable } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera';

/** NO ESTA TERMINADO */
@Injectable()
export class CameraService {

    private takePhotoOptions: CameraOptions = {
        allowEdit: false,
        saveToPhotoAlbum: true,
        targetWidth: 720,
        targetHeight: 720,
        cameraDirection: this.camera.Direction.BACK,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
    }

    private galleryOptions: CameraOptions = {
        allowEdit: true,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 720,
        targetHeight: 720,
        correctOrientation: true
    }

    constructor(private camera: Camera) { }

    takeFromCamera() {
        this.camera.getPicture(this.takePhotoOptions).then(imagePath => {

        });
    }
}