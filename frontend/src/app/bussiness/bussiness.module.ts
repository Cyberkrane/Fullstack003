import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessRoutingModule } from './bussiness-routing.module';
import { UserTableComponent } from './user-table/user-table.component';


@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    BussinessRoutingModule
  ]
})
export class BussinessModule { }
