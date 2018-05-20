import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, StatusType } from '../constants';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  showForm: boolean;
  taskList: Task[] = [];
  statusTypes: StatusType[] = [
    StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.showForm = false;
    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.taskList = tasks;
      });
  }

  filterTasks(statusType: StatusType, taskList: Task[]) {
    return this.taskService.filterTasks(statusType, taskList);
  }

  newTask() {
    this.showForm = !this.showForm;

  }
}




