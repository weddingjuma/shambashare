import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from "firebase";

/**
 * Generated class for the NewshambaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newshamba',
  templateUrl: 'newshamba.html',
})
export class NewshambaPage {
  shamba: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewshambaPage');
  }

  addShamba() {
    var shambaRef = firebase
      .database()
      .ref("shambas")
    shambaRef.child("Rara").set(this.shamba);
  }
}
