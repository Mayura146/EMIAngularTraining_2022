import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor() { }

  // subject$=new Subject();

  exclusive$ = new Subject<boolean>();
  empName$=new BehaviorSubject('Mayura');
  videoEmit$= new ReplaySubject<string>(3,3000);
}


