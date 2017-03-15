import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { FirebaseService } from '../../app/services/firebase.service';
import {AddNotesPage} from '../add-notes/add-notes';
import {NotesPage} from '../notes/notes';
import {EditsubcategoryPage} from '../editsubcategory/editsubcategory';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  public category: any;
  public categories: any[];
  activeCategory: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _firebaseService: FirebaseService,
    public alertCtrl: AlertController) {
      this.category = navParams.get("category")
      this.activeCategory = navParams.get("CategoryPassed");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  ngOnInit(){
    this._firebaseService.getCategories(this.activeCategory).subscribe(categories => {
      this.categories = categories;
    })
  }

  updatecategory(category, $key){
    this.navCtrl.push(EditsubcategoryPage, {
      KeyPassed : category.$key,
      CategoryPassed: category.Name
    })
  }

  deletecategory(key){
     let confirm = this.alertCtrl.create({
      title: 'Delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
          this._firebaseService.deleteCategory(key);
          }
        }
      ]
    });
    confirm.present();  
  }

  addNotes(){
    this.navCtrl.push(AddNotesPage, {
      CategoryPassed: this.activeCategory
    });
  }

  toNotes(category){
    this.navCtrl.push(NotesPage, {
      CategoryPassed: category.Name
    });
  }

}
