import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-auth-table',
  templateUrl: './auth-table.component.html',
  styleUrls: ['./auth-table.component.scss']
})
export class AuthTableComponent implements OnInit {


  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (users) => { this.users = users; }
    )
  }

  editUser(_t13: User) {
   console.log('Editando.....',_t13);
  }
  
  deleteUser(_t13: User) {
    console.log('Borrando.....',_t13);
  }

}
