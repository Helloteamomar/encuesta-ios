import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { TasksService } from '../providers/tasks-service/tasks-service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SQLite } from '@ionic-native/sqlite';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    TasksServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServiceProvider
  ]
})
export class AppModule {}
