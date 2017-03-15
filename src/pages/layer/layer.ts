import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FirebaseService } from '../../app/services/firebase.service';

/*
  Generated class for the Layer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-layer',
  templateUrl: 'layer.html'
})
export class LayerPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _firebaseService: FirebaseService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LayerPage');
  }

  addLayer(name:string){
    var newLayer = {
      Name: name
    }
    this._firebaseService.addLayer(newLayer);
    this.navCtrl.push(HomePage);
  }

}
