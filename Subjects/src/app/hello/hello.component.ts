import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
employeeName:string;
  constructor(private service:SubjectServiceService) { 

    this.service.empName$.subscribe(response=>{
      this.employeeName=response;
    })
  }

  ngOnInit(): void {
  }

}
