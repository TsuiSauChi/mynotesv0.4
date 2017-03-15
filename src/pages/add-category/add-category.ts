import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../app/services/firebase.service';
import { HomePage } from '../home/home';

/*
  Generated class for the AddCategory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html'
})
export class AddCategoryPage {
  activeName: string
  layer: any[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _firebaseService: FirebaseService) {
      this.activeName = navParams.get("NamePassed");
      this.layer = navParams.get("layer");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCategoryPage');
  }

  addNewnotes(category:string, layer){
    var newMynotes = {
      Category: category,
      Image: "http://placehold.it/85x85",
      Layer: this.activeName,
    }
    console.log(newMynotes);
    this._firebaseService.addMynotes(newMynotes, layer);
    this.navCtrl.push(HomePage);
  }

}
