import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {

  constructor(public db: SQLiteObject) {

  }
  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }
  createTable(){
  let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
  return this.db.executeSql(sql, []);
   }



}
