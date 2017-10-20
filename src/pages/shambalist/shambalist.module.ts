import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShambalistPage } from './shambalist';

@NgModule({
  declarations: [
    ShambalistPage,
  ],
  imports: [
    IonicPageModule.forChild(ShambalistPage),
  ],
  exports: [
    ShambalistPage
  ]
})
export class ShambalistPageModule {}
