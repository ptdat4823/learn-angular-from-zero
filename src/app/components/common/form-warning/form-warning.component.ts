import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-warning',
  imports: [],
  templateUrl: './form-warning.component.html',
  styleUrl: './form-warning.component.scss',
})
export class FormWarningComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) messages!: Record<string, Record<string, string>>;
  @Input({ required: true }) controlName!: string;

  get errorMessage() {
    const defaultMessage = 'Invalid input';
    const control = this.form.get(this.controlName);
    if (!control) return defaultMessage;

    const errors = control?.errors;
    const messages = this.messages[this.controlName];

    if (!errors || !messages) return defaultMessage;

    for (const errorKey in errors) {
      const message = messages[errorKey];
      if (message) return message;
    }

    return defaultMessage;
  }
}
