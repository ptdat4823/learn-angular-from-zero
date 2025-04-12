import { User } from '@/types/user';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task-user',
  imports: [],
  templateUrl: './task-user.component.html',
  styleUrl: './task-user.component.scss',
})
export class TaskUserComponent {
  @Input({ required: true }) user!: User;
  @Input() isSelected = false;
  @Output() onClick = new EventEmitter<string>();

  onUserClick() {
    this.onClick.emit(this.user.id);
  }
}
