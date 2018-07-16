import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMiembroPage } from './add-miembro';

@NgModule({
  declarations: [
    AddMiembroPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMiembroPage),
  ],
})
export class AddMiembroPageModule {}
