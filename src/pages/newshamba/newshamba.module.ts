import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewshambaPage } from './newshamba';

@NgModule({
  declarations: [
    NewshambaPage,
  ],
  imports: [
    IonicPageModule.forChild(NewshambaPage),
  ],
  exports: [
    NewshambaPage
  ]
})
export class NewshambaPageModule {}
