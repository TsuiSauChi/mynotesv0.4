import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../app/services/firebase.service';
import { CategoryPage } from '../category/category';

/*
  Generated class for the Editsubcategory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editsubcategory',
  templateUrl: 'editsubcategory.html'
})
export class EditsubcategoryPage {
  activeSubCategory: string;
  activeKey: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _firebaseService: FirebaseService) {
      this.activeKey = navParams.get("KeyPassed");
      this.activeSubCategory = navParams.get("CategoryPassed");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditsubcategoryPage');
  }

  updatecategory(){
    var updCategory = {
      Name: this.activeSubCategory
    }
    this._firebaseService.updateCategory(this.activeKey, updCategory);
    this.navCtrl.push(CategoryPage);
  }

}
