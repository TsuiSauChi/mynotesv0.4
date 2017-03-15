import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LayerPage } from '../pages/layer/layer';
import { AddCategoryPage } from '../pages/add-category/add-category';
import { EditCategoryPage } from '../pages/edit-category/edit-category'
import { CategoryPage } from '../pages/category/category';
import { AddNotesPage } from '../pages/add-notes/add-notes';
import { NotesPage } from '../pages/notes/notes';
import { EditsubcategoryPage } from '../pages/editsubcategory/editsubcategory'
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAF9y0uW1bCrOVEr-iIroLwwT3v2TjRWDY',
  authDomain: 'mynotesv0point4.firebaseapp.com',
  databaseURL: 'https://mynotesv0point4.firebaseio.com',
  storageBucket: 'mynotesv0point4.appspot.com',
  messagingSenderId: '194694348548',
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LayerPage,
    AddCategoryPage,
    EditCategoryPage,
    CategoryPage,
    AddNotesPage,
    NotesPage,
    EditsubcategoryPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LayerPage,
    AddCategoryPage,
    EditCategoryPage,
    CategoryPage,
    AddNotesPage,
    NotesPage,
    EditsubcategoryPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
