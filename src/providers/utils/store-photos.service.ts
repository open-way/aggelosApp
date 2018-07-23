import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class StorePhotosService {
    private photosRef = this.angularFireStorage.ref('photos');

    constructor(private angularFireStorage: AngularFireStorage) { }

    /**
     * Upload photo to Store.
     * @param photo metaInfo
     */
    public upload(image) {
        // const image = `data:image/jpeg;base64,${photo}`;
        const newName = this.generateUuid();
        // return this.photosRef.child(newName).putString(image, 'data_url');
        return this.photosRef.child(newName).putString(image);
    }

    /** 
     * Remove photo from store.
     */
    public delete(storagePath) {
        return this.angularFireStorage.ref(storagePath).delete();
    }

    /**
     * Generador de UUID
     */
    private generateUuid() {
        let date = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, c => {
            const random = (date + Math.random() * 16) % 16 | 0;
            date = Math.floor(date / 16);
            return (c === 'x' ? random : (random & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
}