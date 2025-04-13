import { FORM_ERROR } from '@/constants/form';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormWarningComponent } from '../../common/form-warning/form-warning.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormWarningComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() onClose = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);

  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    dueDate: ['', Validators.required],
  });

  formMessages = {
    title: {
      [FORM_ERROR.REQUIRED]: 'Title is required',
      [FORM_ERROR.MIN_LENGTH]: 'Title must be at least 3 characters',
    },
    dueDate: {
      [FORM_ERROR.REQUIRED]: 'Due date is required',
    },
  };

  close(): void {
    this.onClose.emit();
  }

  onFormSubmit(e: Event): void {
    e.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.taskService.addTask(this.form.value, this.userId);
    this.onClose.emit();
  }
}
