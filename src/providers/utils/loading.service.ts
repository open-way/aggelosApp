import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {

    constructor(
        private loadingCtrl: LoadingController,
    ) { }

    public show(content: string, spinner: string = 'crescent') {
        const loading = this.loadingCtrl.create({
            spinner: spinner,
            content: content,
        });
        loading.present();
        return loading;
    }
}