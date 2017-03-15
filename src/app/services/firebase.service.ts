import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { Mynotes } from '../data/mynotes';
import { Categories } from '../data/categories';
import { Subcategories } from '../data/subcategories';
import { Layers } from '../data/layers';

@Injectable()
export class FirebaseService{
    mynotes: FirebaseListObservable<Mynotes[]>;
    layers: FirebaseListObservable<Layers[]>;
    categories: FirebaseListObservable<Categories[]>;
    subcategories: FirebaseListObservable<Subcategories[]>;
    constructor(private af:AngularFire, private http: Http){

    }

    getMynotes(layer){
        this.mynotes = this.af.database.list('/Mynotes/' + layer) as
        FirebaseListObservable<Mynotes[]>;
        return this.mynotes;
    } 

    addMynotes(newMynotes, layer){
        this.mynotes = this.af.database.list('/Mynotes/' + layer) as
        FirebaseListObservable<Mynotes[]>;
        return this.mynotes.push(newMynotes);
    }

    updateMynotes(key, updMynotes){
        return this.mynotes.update(key, updMynotes);
    }

    deleteMynotes(key){
        return this.mynotes.remove(key);
    }

    getLayers(){
        this.layers = this.af.database.list('/Layer/') as
        FirebaseListObservable<Layers[]>;
        return this.layers;
    }

    addLayer(newLayer){
        return this.layers.push(newLayer);
    }

    getCategories(category){
        this.categories = this.af.database.list('/Categories/' + category) as
        FirebaseListObservable<Categories[]>;
        return this.categories;
    }

    addCategory(newCategory){
        return this.categories.push(newCategory);
    }

    updateCategory(key, updCategory){
        return this.categories.update(key, updCategory);
    }

    deleteCategory(key){
        return this.categories.remove(key);
    }

    getNotes(Subcategories){
        this.subcategories = this.af.database.list('/Subcategories/' + Subcategories) as
        FirebaseListObservable<Subcategories[]>;
        return this.subcategories;
    }

    addNote(newnote){
        return this.subcategories.push(newnote);
    }
}