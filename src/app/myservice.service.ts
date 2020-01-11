import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MyserviceService {

  constructor() { }
  private messageSource = new BehaviorSubject('sddsdsdkskdldadajdladjlsd');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
