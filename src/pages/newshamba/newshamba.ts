import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from "firebase";
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

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
    pricing: ''
  };
  shambas: FirebaseListObservable<any[]>;
  
  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public db: AngularFireDatabase
              ) {
                this.shambas = db.list('/shambas');
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewshambaPage');
  }

  addShamba(newShamba) {
   this.shambas.push(this.newShamba);
   this.newShamba = {
     location: '',
     size: '',
     pricing: ''
   }
  }
}
