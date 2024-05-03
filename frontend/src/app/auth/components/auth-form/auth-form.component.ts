import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {


  @Input() title: string = 'si puedes leer este mensaje es porque esta fallando la interpolacion';

  authForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', Validators.required],
    password: ['', Validators.required],
    repeat_password: [''],
    role: ['', Validators.required],
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService
  ) {
    // Inicializa el formulario
    this.authForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: [''],
      role: ['', Validators.required],
    });

  }


  // Validaciones
  isValidField(field: string): boolean | null {
    return this.authForm.controls[field].errors && this.authForm.controls[field].touched;
  }

  getFieldErrors(field: string): string | null {
    if (!this.authForm.controls[field]) return null;
    const errors = this.authForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Este campo requiere un míninmo de ${errors['minlength'].requiredLength} caracteres.`;
        case 'min':
          return `Este campo requiere un valor míninmo de ${errors['min'].requiredMin}`
      }
    }
    return null;
  }

  // no tengo cuenta
  acountRegister() {
    this.router.navigate(['auth/register'])
  }

  // Accion de Registro
  onRegister() {
    if (!this.correctPassword()) {
      // this.alerts.alertDanger('Las contraseñas no coinciden', 1500);
      console.log('Las contraseñas no coinciden');
      return;
    }
    const formData = this.authForm.value;
    console.log('form data', formData);
  }
  // Confirmar contraseña para registrarse
  correctPassword(): boolean {
    return this.authForm.value.password === this.authForm.value.repeat_password;
  }

  // Accion de Logueo
  onLogin() {
    throw new Error('Method not implemented.');
  }


}
