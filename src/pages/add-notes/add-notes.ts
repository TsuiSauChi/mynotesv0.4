import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../app/services/firebase.service';
import { CategoryPage } from '../category/category';

/*
  Generated class for the AddNotes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-notes',
  templateUrl: 'add-notes.html'
})
export class AddNotesPage {
  activeCategory: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _firebaseService: FirebaseService) {
      this.activeCategory = navParams.get("CategoryPassed");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotesPage');
  }

  addCategory(name: string){
    var newCategory = {
      Name: name,
    };
    this._firebaseService.addCategory(newCategory);
    this.navCtrl.push(CategoryPage);
  }

}
