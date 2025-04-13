import { Task } from '@/types/task';
import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  taskService = inject(TaskService);

  onComplete() {
    this.taskService.completeTask(this.task.id);
  }
}
