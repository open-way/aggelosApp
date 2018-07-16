import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMiembrosPage } from './list-miembros';

@NgModule({
  declarations: [
    ListMiembrosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMiembrosPage),
  ],
})
export class ListMiembrosPageModule {}
