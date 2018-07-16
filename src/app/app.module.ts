import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/** Mis imports */
import { LoginPage } from '../pages/login/login';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AuthService, UnidadesService, ToastService } from '../services';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
// import { UnidadesPage } from '../pages/unidades/unidades';
import { MiUnidadPage } from '../pages/mi-unidad/mi-unidad';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ListMiembrosPageModule } from '../pages/miembros/list-miembros/list-miembros.module';
import { ListUnidadesPageModule } from '../pages/unidades/list-unidades/list-unidades.module';
import { PersonasService } from '../services/personas.service';
// import { AddUnidadPage } from '../pages/add-unidad/add-unidad';
// import { EditUnidadPage } from '../pages/edit-unidad/edit-unidad';

const PAGES: any[] = [
  LoginPage,
  SignupPage,
  HomePage,
  MiUnidadPage,
  UsuariosPage,

  // UnidadesPage,
  // AddUnidadPage,
  // EditUnidadPage,
]

const MODULES: any[] = [
  ListMiembrosPageModule,
  ListUnidadesPageModule,
]

const PROVIDERS: any[] = [
  AuthService,
  UnidadesService,
  PersonasService,

  ToastService,
]


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,


    ...PAGES,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,

    ...MODULES,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,

    ...PAGES,
  ],
  providers: [
    ...PROVIDERS,
    // UnidadesPage,

    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },


  ]
})
export class AppModule { }
