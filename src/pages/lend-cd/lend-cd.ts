import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {NgForm} from '@angular/forms';

import { PretService } from '../../services/pret.service';
/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {


  index:number;
  cd;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public alertCtrl: AlertController, public viewCtrl : ViewController,
   private pretService : PretService) {

}

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.pretService.CdList[this.index];
  }
onToggleCd(){
      let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Vous allez changer le statut du CD',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => this.onTogglePret()
        }
      ]
    });
    alert.present();

}
onTogglePret(){
  this.cd.isOn = !this.cd.isOn;
  console.log('changed');
}
dismissModal(){
  this.viewCtrl.dismiss();
 }
 presentPrompt() {
   let alert = this.alertCtrl.create({
     title: 'Emprinteur',
     buttons: [
       {
         text: 'Annuler',
         role: 'cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Confirmer',
         //handler: () => this.onTogglePret()
         handler: data => {
           this.onTogglePret(),
           this.onDeleteEmprunteur();
         }
       }
     ]
   });
   alert.present();
 }
 onSubmitPrompt(form : NgForm){
   console.log('valeur '+form);
   this.dismissModal();
 }
 onSubmitForm(form : NgForm){
   console.log(form.value);
   this.dismissModal();
 }
 onDeleteEmprunteur(){
   this.cd.emprunteur = '';
   this.dismissModal();
 }
}
