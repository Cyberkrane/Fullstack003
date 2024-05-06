import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private user?: User;
  private isAdmin = false;

  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }


  register(user: User) {
    this.httpClient.post(`${this.baseUrl}/users`, user).subscribe({
      next: (resp: any) => {
        console.log('register: ', this.baseUrl);
        this.router.navigate(['auth/login']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  login(user: User): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/users?email=${user.email}&password=${user.password}&role=${user.role}`)
      .pipe(
        tap((resp: any | null) => {
          if (resp && Object.keys(resp).length !== 0) {
            this.user = resp;
            this.isAdmin = user.role === 'admin';
            this.checkAuthenticated();
          } else {
            throw new Error('Credenciales inválidas');
          }
        }),
        catchError((error: any) => {
          this.router.navigate(['auth/access-denied']);
          console.log('*** Error ***', error);
          return throwError('Error de autenticación');
        })
      );
  }
  

  logout() {
    this.router.navigate(['']);
    console.log('logout');
  }

  checkAuthenticated() {
    console.log('check auth');
  }


}
