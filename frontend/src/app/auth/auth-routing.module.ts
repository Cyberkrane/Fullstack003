import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthTableComponent } from './components/auth-table/auth-table.component';
import { AuthGuard } from './guards/auth.guard';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

const routes: Routes = [
  {
    path:'', // path: 'auth' hace referencia al path definido en app-routing.module.ts 
    children:[
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'admin-table', component: AuthTableComponent, canActivate: [AuthGuard]},
      {path: 'access-denied', component: AccessDeniedComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
