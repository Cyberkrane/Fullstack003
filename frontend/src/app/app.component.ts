import { Component } from '@angular/core';
import { AlertService } from './global-components/services/alert.service';
import { Subject, takeUntil } from 'rxjs';
import { AlertData } from './global-components/interfaces/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  alertState: boolean = false;
  message: string = '';
  alertType: string = '';

  private unsubscribe$ = new Subject<void>();
  
  constructor(private alertService: AlertService) { }

 
  ngOnInit(): void {
    this.alertService.alert$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: AlertData) => {
        this.message = res.message;
        this.alertType = res.alertType;
        this.alertState = true;
        setTimeout(() => {
          this.alertState = false;
        }, res.timeDuration);
      }); 
  }

ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
}
