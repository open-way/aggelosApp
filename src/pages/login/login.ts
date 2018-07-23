import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/security/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  public loginError: any;
  public passwordErrors: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credenciales = {
      email: data.email,
      password: data.password,
    }

    this.authService.signInWithEmail(credenciales).then(
      // () => this.navCtrl.setRoot(HelloIonicPage),
      () => this.navCtrl.setRoot(HomePage),
      error => this.loginError = error.message,
    )
  }

  public loginWithGoogle() {
    this.authService.signInWithGoogle()
      // .then(
      //   () => this.navCtrl.setRoot(HomePage),
      //   error => console.log(error.message)
      // )
  }

  public signup() {
    this.navCtrl.push(SignupPage);
  }

  private buildForm() {
    const controls = this.initializeControls();
    this.loginForm = this.formBuilder.group(controls);
  }

  private initializeControls() {
    const controls = {
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }
    return controls;
  }
}
