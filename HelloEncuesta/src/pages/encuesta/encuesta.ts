import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
/**
 * Generated class for the EncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

    tasks: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public tasksS: TasksServiceProvider
  ) {}

  ionViewDidLoad() {
  this.getAllTasks();
  console.log(this.tasks);
  }
  getAllTasks(){
  this.tasksS.getAll()
  .then(tasks => {
    this.tasks = tasks;
  })
  .catch( error => {
    console.error( error );
  });
}
openAlertNewTask(){
  let alert = this.alertCtrl.create({
    title: 'Crear tarea',
    message: 'escribe el nombre de la tarea',
    inputs: [
      {
        name: 'title',
        placeholder: 'Digitar nueva tarea.',
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: () =>{
          console.log('cancelar');
        }
      },
      {
        text: 'Crear',
        handler: (data)=>{
          data.completed = false;
          this.tasksS.create(data)
          .then(response => {
            this.tasks.unshift( data );
          })
          .catch( error => {
            console.error( error );
          })
        }
      }
    ]
  });
  alert.present();
}

updateTask(task, index){
  task = Object.assign({}, task);
  task.completed = !task.completed;
  this.tasksS.update(task)
  .then( response => {
    this.tasks[index] = task;
  })
  .catch( error => {
    console.error( error );
  })
}

deleteTask(task: any, index){
  this.tasksS.delete(task)
  .then(response => {
    console.log( response );
    this.tasks.splice(index, 1);
  })
  .catch( error => {
    console.error( error );
  })
}



}
