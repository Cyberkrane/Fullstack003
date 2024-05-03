import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: string = 'Iniciar sesion';

  constructor(private router: Router) { }

  irALogin() { 
    this.router.navigate(['/auth/login']);
  }

}
