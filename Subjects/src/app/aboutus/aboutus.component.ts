import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  employeeName:string;
  constructor(private service:SubjectServiceService) { 

    this.service.empName$.subscribe(response=>{
      this.employeeName=response;
    })
  }

  ngOnInit(): void {
  }

  public onChange(empname:any)
  {
    this.service.empName$.next(empname.value);
  }
}
