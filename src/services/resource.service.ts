
import { AngularFireDatabase } from 'angularfire2/database';
import { Response } from '../models';


export class ResourceService<Model extends Response> {
    private resourceRef = this.angularFireDatabase.list<Model>(this.endPoint);

    constructor(
        private angularFireDatabase: AngularFireDatabase,
        private endPoint: string,
    ) { }

    /**
     * Retorna una lista de objetos según el endPoint
     */
    public getList$() {
        return this.resourceRef;
    }

    /**
     * Crea un nuevo recurso.
     * @param resourceModel Objeto
     */
    public add$(resourceModel: Model) {
        return this.resourceRef.push(resourceModel);
    }

    /**
     * Actualiza el recurso.
     * @param resourceModel Objeto
     */
    public update$(resourceModel: Model) {
        return this.resourceRef.update(resourceModel.key, resourceModel);
    }

    /**
     * Elimina un recurso según su key.
     * @param key 
     */
    public remove$(key: string) {
        return this.resourceRef.remove(key);
    }
}