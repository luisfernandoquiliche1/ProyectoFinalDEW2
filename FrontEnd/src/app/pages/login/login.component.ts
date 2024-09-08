import {Component, inject, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-guards',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  #fb = inject(FormBuilder);
  #router = inject(Router);
  loginForm: FormGroup;
  isInvalidForm = signal(false);

  constructor() {
    this.loginForm = this.#createForm();
  }

  get usuarioControl() {
    return this.loginForm.get('usuario');
  }
  get contraseniaControl() {
    return this.loginForm.get('contrasenia');
  }

  #createForm() {
    return this.#fb.group({
      usuario: this.#fb.control('', {nonNullable: false, validators: [Validators.required]}),
      contrasenia: this.#fb.control('', {nonNullable: false, validators: [Validators.required]}),
      recordar: this.#fb.control(false, {nonNullable: false}),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if(this.loginForm.invalid) {
      this.isInvalidForm.set(true);
      return;
    }

    this.isInvalidForm.set(false);
    const formValue = this.loginForm.getRawValue();

    document.cookie = `isLogin=123`;

    this.#router.navigate(['/']);
  }
}
