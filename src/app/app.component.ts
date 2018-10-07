import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;

import * as firebase from 'firebase/app';

import { firebaseConfig } from './config/credentials';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor( ) {
    this.initializeApp();    
  }

  initializeApp() {
    firebase.initializeApp(firebaseConfig);
    SplashScreen.hide().catch(error => {
    console.error(error);
    });

    StatusBar.hide().catch(error => {
    console.error(error);
    });
  }
}
