import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  constructor(
    private fb:FormBuilder
  ){}

  contactanosForm = this.fb.group({
      nombres:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      celular:["",[Validators.required,Validators.maxLength(9),Validators.minLength(9)]],
      asunto:["",Validators.required],
      mensaje: ["",[Validators.required, Validators.maxLength(255)]]
  })

  __onSubmit(){
    if(this.contactanosForm.valid){
      console.log(this.contactanosForm.value);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Formulario enviado correctamente!",
        showConfirmButton: false,
        timer: 2000
      });
      this.contactanosForm.reset();
    }else{
      console.log("Formulario no Valido");
      this.contactanosForm.markAllAsTouched();
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactanosForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (control?.hasError('email')) {
      return 'Ingrese un correo electrónico válido';
    }
    if (controlName === 'celular') {
      if (control?.hasError('minlength')) {
          return 'El celular debe tener como mínimo 9 dígitos';
      }
      if (control?.hasError('maxlength')) {
          return 'El celular debe tener un máximo de 9 dígitos';
      }
    }
    if (control?.hasError('maxlength')) {
      return 'El mensaje no puede exceder los 255 caracteres';
    }
    return '';
  }
}
