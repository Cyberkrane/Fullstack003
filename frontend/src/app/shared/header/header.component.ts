import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: string = 'Iniciar sesion';

  constructor(private router: Router,
              private authService: AuthService
  ) { }

  irALogin() { 
    this.router.navigate(['/auth/login']);
    this.user = 'Cerrar sesion';
  }

  closeSession() {
    this.user = 'Iniciar sesion';
    this.authService.logout();
  }

}
