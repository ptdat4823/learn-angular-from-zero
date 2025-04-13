import { Component, computed, inject } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskFormData } from './new-task/new-task.model';
import { TaskUserComponent } from './task-user/task-user.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './tasks.service';
import { User } from '@/types/user';

@Component({
  selector: 'app-tasks',
  imports: [TaskUserComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  taskService = inject(TaskService);

  isAddingTask = false;
  selectedUser: User | null = null;

  onUserSelect(userId: string) {
    this.selectedUser = this.taskService.getUserById(userId);
  }

  getUsers() {
    return this.taskService.getUsers();
  }

  getTasks() {
    return this.selectedUser ? this.taskService.getTasksByUserId(this.selectedUser.id) : [];
  }

  completeTask(taskId: string) {
    this.taskService.completeTask(taskId);
  }

  toggleDialog() {
    this.isAddingTask = !this.isAddingTask;
  }

  onTaskSubmit(data: TaskFormData) {
    if (!this.selectedUser) return;
    this.isAddingTask = false;
    this.taskService.addTask(data, this.selectedUser.id);
  }
}
