import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { RegistroPage } from '../pages/registro/registro';
import { EncuestaPage } from '../pages/encuesta/encuesta';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = EncuestaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public sqlite:SQLite, public tasks: TasksServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
     this.tasks.setDatabase(db);
     return this.tasks.createTable();
    })
    .catch(error =>{
      console.error(error);
    });
  }


}
