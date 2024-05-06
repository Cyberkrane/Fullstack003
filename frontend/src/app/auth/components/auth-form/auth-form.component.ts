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

  authForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService
  ) {
    // Inicializa el formulario
    this.authForm = this.fb.group({
      name: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: [''],
      role: [''],
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
    this.authService.register(formData);
    console.log('form data', formData);
  }
  // Confirmar contraseña para registrarse
  correctPassword(): boolean {
    return this.authForm.value.password === this.authForm.value.repeat_password;
  }

  // Accion de Logueo
  onLogin() {
    this.authService.login(this.authForm.value)
      .subscribe(
        (result: any) => {
          console.log('Autenticación exitosa', result);
          alert('Autenticación exitosa');
          // Acciones después de una autenticación exitosa
          if(result[0].role === 'admin') {
            this.router.navigate(['admin-table']);
          }
          if(result[0].role === 'user') {
            this.router.navigate(['bussiness/user-table']);
          }
        },
        (error: any) => {
          console.error('Error en la autenticación', error);
          alert('Algo salió chungo, intenta de nuevo');
          // Manejar el error de autenticación
          if (error === 'Credenciales inválidas') {
            // Manejar el error de credenciales inválidas, por ejemplo
            alert('Credenciales inválidas');

          }
        }
      );
    this.authForm.reset();
  }
  
  onLogout() {
    this.authService.logout();
  }

}
