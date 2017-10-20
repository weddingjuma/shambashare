import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShambadetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shambadetails',
  templateUrl: 'shambadetails.html',
})
export class ShambadetailsPage {
  shamba: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.shamba = navParams.data.shamba;
  console.log(this.shamba);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShambadetailsPage');
  }

}
