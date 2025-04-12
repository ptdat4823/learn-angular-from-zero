import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [UpperCasePipe],
})
export class AppComponent {
  title = 'learn-angular';
}
