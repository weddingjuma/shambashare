import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShambadetailsPage } from './shambadetails';

@NgModule({
  declarations: [
    ShambadetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShambadetailsPage),
  ],
  exports: [
    ShambadetailsPage
  ]
})
export class ShambadetailsPageModule {}
