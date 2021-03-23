import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  appPages = [
    {
      title: 'Create Note',
      url: '/create-note',
      icon: 'calendar'
    },
    {
      title: 'View Notes',
      url: '/view-notes',
      icon: 'people'
    },
    {
      title: 'Schedule',
      url: '/schedule',
      icon: 'information-circle'
    },
    {
      title: 'Schedule-OpenSource',
      url: '/schedule-os',
      icon: 'information-circle'
    }
  ];

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
