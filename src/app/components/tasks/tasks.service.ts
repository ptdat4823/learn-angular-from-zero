import { mockTask } from '@/mock/task';
import { mockUser } from '@/mock/user';
import { Task } from '@/types/task';
import { User } from '@/types/user';
import { TaskFormData } from './new-task/new-task.model';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private taskData: Task[] = mockTask;
  private userData: User[] = mockUser;

  constructor() {
    const storageTasks = localStorage.getItem('tasks');
    if (storageTasks) this.taskData = JSON.parse(storageTasks);
  }

  getUserById(id: string) {
    return this.userData.find(user => user.id === id) || null;
  }

  getUsers() {
    return this.userData;
  }

  getTasksByUserId(userId: string) {
    return this.taskData
      .filter(task => task.userId === userId && !task.completed)
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }

  addTask(newTask: TaskFormData, userId: string) {
    this.taskData.push({
      id: Math.random().toString(8),
      title: newTask.title,
      dueDate: newTask.dueDate,
      description: newTask.description,
      completed: false,
      userId,
    });
    this.saveTasks();
  }

  completeTask(taskId: string) {
    this.taskData = this.taskData.map(task => {
      return task.id === taskId ? { ...task, completed: true } : task;
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskData));
  }
}
