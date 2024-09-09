
import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder
    ) {}

    Loginform =this.fb.group({
      persona: this.fb.group({
        usuario: ['', Validators.required],
        contraseña: ['', Validators.required],
      }
      )
    }
    )
    __onsubmit() {
      if(this.Loginform.valid) {
        console.log(this.Loginform.value)
      }
      else {
        alert("Formulario no valido")
      }
     }
     
    }
    
