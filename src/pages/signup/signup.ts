import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/security/auth.service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  form: FormGroup;
  signupError: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthService,
    private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public signup() {
    let data = this.form.value;

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.authService.signUp(credentials).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.signupError = error.message
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  private buildForm() {
    const controls = this.initializeControls();
    this.form = this.formBuilder.group(controls);
  }

  private initializeControls() {
    const controls = {
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }
    return controls;
  }
}
