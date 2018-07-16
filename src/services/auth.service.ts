import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
    private user: firebase.User;

    constructor(public angularFireAuth: AngularFireAuth) {
        angularFireAuth.authState.subscribe(user => {
            this.user = user;
        })
    }

    get authenticated(): boolean {
        return this.user !== null;
    }

    public getEmail() {
        return this.user && this.user.email;
    }

    public signOut(): Promise<void> {
        return this.angularFireAuth.auth.signOut();
    }

    public signInWithEmail(credenciales) {
        return this.angularFireAuth.auth
            .signInWithEmailAndPassword(credenciales.email, credenciales.password);
    }

    public signUp(credenciales) {
        return this.angularFireAuth.auth
            .createUserWithEmailAndPassword(credenciales.email, credenciales.password);
    }

    public signInWithGoogle() {
        console.log('Iniciar sesión con Google');
        return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    }

    private oauthSignIn(provider: AuthProvider) {
        if (!(<any>window).cordova) {
            return this.angularFireAuth.auth.signInWithPopup(provider);
        } else {
            return this.angularFireAuth.auth.signInWithRedirect(provider)
                .then(() => {
                    return this.angularFireAuth.auth.getRedirectResult().then(result => {
                        // Esto le da un token de acceso de Google.
                        // Puede usarlo para acceder a la API de Google.
                        // let token = result.credential.accessToken;
                        let token = result.credential.providerId;
                        // La información de usuario iniciada.
                        let user = result.user;
                        console.log(token, user);
                    }).catch(function (error) {
                        // Manejar errores aquí.
                        alert(error.message);
                    });
                });
        }
    }

}