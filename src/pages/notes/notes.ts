import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Http } from '@angular/http';

import { FirebaseService } from '../../app/services/firebase.service';
import { Subcategories } from '../../app/data/subcategories';

/*
  Generated class for the Notes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  activeCategory: string;
  notes: Subcategories[];
  public base64Image: String;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _firebaseService: FirebaseService,
    public http: Http) {
    this.activeCategory = this.navParams.get('CategoryPassed');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  ngOnInit(){
    this._firebaseService.getNotes(this.activeCategory).subscribe(notes => {
      console.log(notes);
      this.notes = notes;
    })
  }

  addNotes(note: string){
    var newnote = {
      note: note,
      category: this.activeCategory
    }
    this._firebaseService.addNote(newnote);
  }

  camera(){
  Camera.getPicture({
    destinationType:Camera.DestinationType.DATA_URL,
    targetHeight: 1000,
    targetWidth: 1000,
  }).then((ImageData) => {
    let base64Image = 'data:image/jpeg;base64,' + ImageData;
  }, (err) => {
    console.log(err);
  });
}
}
