import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import firebase from "firebase";
import { NewshambaPage } from "../newshamba/newshamba";
/**
 * Generated class for the ShambalistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-shambalist",
  templateUrl: "shambalist.html"
})
export class ShambalistPage {
  shambas: FirebaseListObservable<any[]>;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.shambas = db.list("/shambas");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShambalistPage");
  }
  AddShamba() {
    this.navCtrl.push(NewshambaPage)
  }

}
