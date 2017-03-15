import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {AngularFire} from 'angularfire2';

import { TabsPage } from '../pages/tabs/tabs';
import { FirebaseService } from './services/firebase.service';


@Component({
  templateUrl: 'app.html',
  providers: [FirebaseService],
  
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    
  }
}
