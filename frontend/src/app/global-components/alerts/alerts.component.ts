import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  
@Input() alertType: string = '';
@Input() alertState: boolean = false;
@Input() message: string = '';


}
