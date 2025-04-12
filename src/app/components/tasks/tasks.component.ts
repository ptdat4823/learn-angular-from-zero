import { Component } from '@angular/core';
import { mockUser } from '@/mock/user';
import { TaskUserComponent } from './task-user/task-user.component';
import { User } from '@/types/user';
import { mockTask } from '@/mock/task';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskFormData } from '@/types/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskUserComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userData = mockUser;
  selectedUser: User | null = null;
  taskData = mockTask;
  isAddingTask = false;

  onUserSelected(userId: string) {
    console.log('clicked', userId);
    this.selectedUser = this.userData.find(user => user.id === userId) || null;
  }

  getTasks(userId: string) {
    return this.taskData
      .filter(task => task.userId === userId && !task.completed)
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }

  handleTaskCompleted(taskId: string) {
    this.taskData = this.taskData.map(task => {
      return task.id === taskId ? { ...task, completed: true } : task;
    });
  }

  onAddTask() {
    console.log('Add task clicked');
    this.isAddingTask = true;
  }
  onTaskCancel() {
    this.isAddingTask = false;
  }
  addTask(newTask: TaskFormData, userId: string) {
    this.taskData.push({
      id: Math.random().toString(8),
      title: newTask.title,
      dueDate: newTask.dueDate,
      description: newTask.description,
      completed: false,
      userId: userId,
    });
    this.isAddingTask = false;
  }
  onTaskSubmit(data: TaskFormData) {
    this.isAddingTask = false;
    if (!this.selectedUser) return;
    this.addTask(data, this.selectedUser?.id || '');
  }
}
