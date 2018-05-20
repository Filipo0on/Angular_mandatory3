import { Component, Input } from '@angular/core';
import {StatusType, Task} from '../constants';
import { TaskService } from '../task.service';


@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task;

  constructor(private taskService: TaskService ) {}

  chosenMod: string = "";

  UpdateATask(){
    switch(this.chosenMod) {
      case "1": {
        this.taskService.updateTask(this.task.id, StatusType.NotStarted)
        break;
      }
      case "2": {
        this.taskService.updateTask(this.task.id, StatusType.InProgress)
        break;
      }
      case "3": {
        this.taskService.updateTask(this.task.id, StatusType.Completed)
        break;
      }
    }
  }


}
