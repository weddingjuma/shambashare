import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from "firebase";
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {ShambalistPage } from '../shambalist/shambalist';
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
  newShamba = {
    location: '',
    size: '',
    price: ''
  };
  shambas: FirebaseListObservable<any[]>;
  
  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public db: AngularFireDatabase,
               public loadingCtrl: LoadingController
              ) {
                this.shambas = db.list('/shambas');
                console.log(this.shambas)
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewshambaPage');
  }

  addShamba(newShamba) {
    let loader = this.loadingCtrl.create({
      content: "Posting Shamba ... "
    });
    loader.present();
   this.shambas.push(this.newShamba);
   this.newShamba = {
     location: '',
     size: '',
     price: ''
   }
   loader.dismiss();
   this.navCtrl.push(ShambalistPage);
  }
}
