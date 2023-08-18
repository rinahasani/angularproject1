import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      jobPosition: ['', [Validators.required]],
      creditCard: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
    });
  }

  markControlAsTouched(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const newUser: User = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        password: this.form.value.password,
        jobPosition: this.form.value.jobPosition,
        creditCard: this.form.value.creditCard,
      };
      this.userService.addUser(newUser);
      this.form.reset();
    }
  }

  isControlInvalid(controlName: string, validationType: string): boolean {
    const control = this.form.get(controlName);
    return control
      ? control.hasError(validationType) && control.touched
      : false;
  }
}
