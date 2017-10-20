import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import firebase from "firebase";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { ShambalistPage } from "../shambalist/shambalist";
/**
 * Generated class for the NewshambaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-newshamba",
  templateUrl: "newshamba.html"
})
export class NewshambaPage {
  newShamba = {
    location: "",
    size: "",
    price: "",
    user: ""
  };
  useremail: any;
  shambas: FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public loadingCtrl: LoadingController
  ) {
    this.shambas = db.list("/shambas");
    console.log(this.shambas);
    var user = firebase.auth().currentUser;
    
    if (user != null) {
      // user.providerData.forEach(function (profile) {
      //   console.log("Sign-in provider: "+profile.providerId);
      //   console.log("  Provider-specific UID: "+profile.uid);
      //   console.log("  Name: "+profile.displayName);
      //   console.log("  Email: "+profile.email);
      //   console.log("  Photo URL: "+profile.photoURL);

      //   this.newShamba.user = profile.email;
      // });
      user.providerData.forEach(profile =>{
        console.log("Sign-in provider: "+profile.providerId);
          console.log("  Provider-specific UID: "+profile.uid);
          console.log("  Name: "+profile.displayName);
          console.log("  Email: "+profile.email);
          console.log("  Photo URL: "+profile.photoURL);
  
          this.newShamba.user = profile.email;
      });
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewshambaPage");
  }

  addShamba(newShamba) {
    let loader = this.loadingCtrl.create({
      content: "Posting Shamba ... "
    });
    // this.newShamba.user = this.useremail;
    loader.present();
    this.shambas.push(this.newShamba);
    this.newShamba = {
      location: "",
      size: "",
      price: "",
      user: ""
    };
    loader.dismiss();
    this.navCtrl.push(ShambalistPage);
  }
}
