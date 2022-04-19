import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  empName: string;
  constructor(private service: SubjectServiceService) {
   this.service.exclusive$.subscribe(response=>{
console.log(response);
   })
    
   }

  ngOnInit(): void {
    this.service.exclusive$.next(true);
  }

  ngOnDestroy()
  {
    this.service.exclusive$.next(false);
  }
}
