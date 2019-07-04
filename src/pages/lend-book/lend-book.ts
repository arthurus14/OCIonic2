import { Component, OnInit,Injectable } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import { Storage } from '@ionic/storage';

import { PretService } from '../../services/pret.service';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
  index:number;
  book;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public alertCtrl: AlertController, public viewCtrl : ViewController,
   private pretService : PretService,private storage: Storage) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.pretService.booksList[this.index];
  }

onToggleBook(){
      let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Vous allez changer le statut du livre ',
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
//alert prompt
presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'Emprunteur',
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

//
onTogglePret(){
  this.book.isOn = !this.book.isOn;
  console.log('changed');
}
dismissModal(){
  this.viewCtrl.dismiss();
}
onSubmitForm(form : NgForm){
  console.log(form.value);

  this.dismissModal();
}
onDeleteEmprunteur(){
  this.book.emprunteur = '';
  this.dismissModal();
}


}
