import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { CdListPage } from '../pages/cd-list/cd-list';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;

  tabsPage:any = TabsPage;
  oPage:any = SettingsPage;
  discPage:any = CdListPage;
  authPage:any = AuthPage;
  @ViewChild('content') content:NavController;

  isAuth : boolean;

  constructor(platform: Platform, statusBar: StatusBar,
   splashScreen: SplashScreen,private menuCtrl : MenuController) {
    platform.ready().then(() => {

      //connexion firebase
        let firebaseConfig = {
    apiKey: "AIzaSyCqMJb7IIdadfPhJCC0YFVg828_9cyLXFs",
    authDomain: "ionicoc-81cab.firebaseapp.com",
    databaseURL: "https://ionicoc-81cab.firebaseio.com",
    projectId: "ionicoc-81cab",
    storageBucket: "",
    messagingSenderId: "1055362214176",
    appId: "1:1055362214176:web:7aee88997101b11a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(
      (user) =>{
        if(user){
          this.isAuth = true;
          this.content.setRoot(TabsPage);
        }else{
          this.isAuth = false;
          this.content.setRoot(AuthPage, {mode:'connect'});
        }
      }
    );

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onNavigate(page:any, data?:{}){
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }
    
  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}
