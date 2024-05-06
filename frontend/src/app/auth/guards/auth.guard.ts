import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.currentUser) {
      console.log('usuario autorizado');
      return true;
    } else {
      // Usuario no autenticado, redirige a la página de inicio de sesión
      console.log('usuario no autorizado');
      return false;
    }
  }
}

