import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';



@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertsComponent
  ]
})
export class GlobalComponentsModule { }
