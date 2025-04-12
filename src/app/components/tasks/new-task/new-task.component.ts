import { FORM_ERROR } from '@/constants/form';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormWarningComponent } from '../../common/form-warning/form-warning.component';
import { TaskFormData } from '@/types/task';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormWarningComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<TaskFormData>();

  private fb = inject(FormBuilder);

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

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submit.emit(this.form.value);
  }
}
