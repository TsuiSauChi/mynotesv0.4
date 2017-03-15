import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FirebaseService } from '../../app/services/firebase.service';

/*
  Generated class for the EditCategory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-category',
  templateUrl: 'edit-category.html'
})
export class EditCategoryPage {
  activeKey: string;
  activeCategory: string;
  activeImage: string;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public _firebaseService: FirebaseService) {
    this.activeKey = navParams.get("KeyPassed");
    this.activeCategory = navParams.get("CategoryPassed");
    this.activeImage = navParams.get("ImagePassed");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCategoryPage');
  }

  updateMynotes(){
    var updCategory = {
      Category: this.activeCategory
    }
    console.log(updCategory);
    this._firebaseService.updateMynotes(this.activeKey, updCategory);
    this.navCtrl.push(HomePage);
  }

}
