import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';


import { LayerPage } from '../layer/layer';
import { AddCategoryPage } from '../add-category/add-category';
import { EditCategoryPage } from'../edit-category/edit-category';
import { CategoryPage } from '../category/category';
import { FirebaseService } from '../../app/services/firebase.service';

import { Mynotes } from '../../app/data/mynotes';
import { Layers } from '../../app/data/layers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  mynotes: Mynotes[];
  layers: Layers[];
  layer: any;

  activeKey: string;

  activeLayer: string;
  constructor(
      public navCtrl: NavController,
      public _firebaseService: FirebaseService,
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController,) {
      }
  ngOnInit(){
    this._firebaseService.getLayers().subscribe(layers => {
      this.layers = layers;
    });
  }

  showMore(layer){
     this._firebaseService.getMynotes(layer.Name).subscribe(mynotes => {
      this.mynotes = mynotes;
    })
  }

  AddLayer(){
    this.navCtrl.push(LayerPage);
  }

  addMynotes(layer){
    this.navCtrl.push(AddCategoryPage, {
      NamePassed: layer.Name,
      layer: layer.Name
    });
  }

  ToCategory($event, mynote){
    this.navCtrl.push(CategoryPage, {
      mynote: mynote,
      CategoryPassed: mynote.Category,
    });
  }

  editMynotes(mynote, key){
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this._firebaseService.deleteMynotes(key);
          }
        },
        {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
             this.navCtrl.push(EditCategoryPage, {
               KeyPassed: mynote.$key,
               CategoryPassed: mynote.Category,
               ImagePassed: mynote.Image,
             })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
