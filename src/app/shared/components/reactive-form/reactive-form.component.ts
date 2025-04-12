import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  imports: [ReactiveFormsModule],
})
export class ReactiveForm {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(this.form.value.name + ' | ' + this.form.value.email);
  }
}
