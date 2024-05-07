import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertData } from '../interfaces/alert';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSource = new Subject<AlertData>();
  alert$ = this.alertSource.asObservable();

  constructor() { }


  alertInfo(message: string, timeDuration: number = 3000, alertType: string = 'alert_info'){
    this.alertSource.next({message, timeDuration,alertType});
  }

  alertSuccess(message: string, timeDuration: number = 3000, alertType: string = 'alert_success'){
    this.alertSource.next({message, timeDuration,alertType});
  }

  alertWarning(message: string, timeDuration: number = 3000, alertType: string = 'alert_warning'){
    this.alertSource.next({message, timeDuration,alertType});
  }

  alertDanger(message: string, timeDuration: number = 3000, alertType: string = 'alert_danger'){
    this.alertSource.next({message, timeDuration,alertType});
  }

  alertOrange(message: string, timeDuration: number = 3000, alertType: string = 'alert_orange'){
    this.alertSource.next({message, timeDuration,alertType});
  }

  alertCyber(message: string, timeDuration: number = 3000, alertType: string = 'alert_cyber'){
    this.alertSource.next({message, timeDuration,alertType});
  }


}
