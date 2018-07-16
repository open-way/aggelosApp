import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMiembroPage } from './edit-miembro';

@NgModule({
  declarations: [
    EditMiembroPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMiembroPage),
  ],
})
export class EditMiembroPageModule {}
