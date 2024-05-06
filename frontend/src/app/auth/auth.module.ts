import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthTableComponent } from './components/auth-table/auth-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { BussinessModule } from '../bussiness/bussiness.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AuthFormComponent,
    AuthTableComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BussinessModule 
  ]
})
export class AuthModule { }
