import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;
  private userList: User[] = [];

  constructor(private http: HttpClient,
    private router: Router
  ) { }


  getAllUsers(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/users`)
    .pipe(
      tap((resp: any) => {
        this.userList = resp.users;
      })  
    )
  }
}
