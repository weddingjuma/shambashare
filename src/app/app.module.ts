import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { MenuPage } from '../pages/menu/menu';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { UserViewPage } from '../pages/user-view/user-view';
import { UserEditPage } from '../pages/user-edit/user-edit';
import { LocationTracker } from '../providers/location-tracker'; 
import { NewshambaPageModule } from '../pages/newshamba/newshamba.module';
import { ShambalistPageModule } from '../pages/shambalist/shambalist.module';
import { ShambadetailsPageModule } from '../pages/shambadetails/shambadetails.module';

import { User } from '../providers/user';
import { Api } from '../providers/api';
import { Settings } from '../providers/settings';
import { Items } from '../mocks/providers/items';
import * as firebase from 'firebase';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { AngularFireDatabase, FirebaseListObservable, AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from "angularfire2";



 // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyCINkqurqtQrylj101ZMwA_ORJRMCX57uM",
    authDomain: "shambashare.firebaseapp.com",
    databaseURL: "https://shambashare.firebaseio.com",
    projectId: "shambashare",
    storageBucket: "shambashare.appspot.com",
    messagingSenderId: "1008163204226"
  };
  firebase.initializeApp(config);


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}


/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  MyApp,
  CardsPage,
  UserViewPage,
  UserEditPage,
  HomePage,
  AboutPage,
  ContactPage,
  ContentPage,
  LoginPage,
  MapPage,
  SignupPage,
  TabsPage,
  TutorialPage,
  WelcomePage,
  ListMasterPage,
  ItemDetailPage,
  ItemCreatePage,
  MenuPage,
  SettingsPage,
  SearchPage
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
  LocationTracker,
    User,
    Api,
    Items,

    { provide: Settings, useFactory: provideSettings, deps: [ Storage ] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule ,
    NewshambaPageModule,
    ShambalistPageModule,
    ShambadetailsPageModule,
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {}
