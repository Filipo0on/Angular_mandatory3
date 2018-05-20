import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
task = {
  title:'',
  description:'',

}

  constructor(private taskService: TaskService) {}

  addNewTask() {
    return this.taskService.addTask(this.task.title, this.task.description);
  }

}
