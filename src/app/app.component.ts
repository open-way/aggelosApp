import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { HomePage } from '../pages/home/home';
import { MiUnidadPage } from '../pages/mi-unidad/mi-unidad';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ListMiembrosPage } from '../pages/miembros/list-miembros/list-miembros';
import { ListUnidadesPage } from '../pages/unidades/list-unidades/list-unidades';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage = HelloIonicPage;
  rootPage: any;
  pages: Array<{ title: string, icon: string, component: any, isPrivate: boolean }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {
        title: 'Hello Ionic',
        icon: 'ios-attach',
        component: HelloIonicPage,
        isPrivate: false,
      },
      {
        title: 'My First List',
        icon: 'ios-bookmark',
        component: ListPage,
        isPrivate: false,
      },
      {
        title: 'Mi unidad',
        icon: 'ios-home',
        component: MiUnidadPage,
        isPrivate: true,
      },
      {
        title: 'Unidades',
        icon: 'ios-pricetags',
        component: ListUnidadesPage,
        isPrivate: true,
      },
      {
        title: 'Usuarios',
        icon: 'ios-contact',
        component: UsuariosPage,
        isPrivate: true,
      },
      {
        title: 'Miembros',
        icon: 'ios-contact',
        component: ListMiembrosPage,
        isPrivate: true,
      },
      {
        title: 'Google maps',
        icon: 'pin',
        // icon: 'ios-locate',
        component: HomePage,
        isPrivate: false,
      },
      {
        title: 'Components',
        icon: 'ios-grid',
        component: HomePage,
        isPrivate: true,
      }
    ];
  }

  initializeApp() {


    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
    this.rootPage = LoginPage;

    this.authService.angularFireAuth.authState
      .subscribe(user => {
        if (user) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      },
        () => {
          this.rootPage = LoginPage;
        }
      )
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  public login() {
    this.menu.close();
    this.authService.signOut();
    this.nav.setRoot(LoginPage);
  }

  public logout() {
    this.menu.close();
    this.authService.signOut();
    this.nav.setRoot(HomePage);
  }

}
