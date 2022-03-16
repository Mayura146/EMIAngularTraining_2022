import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
emp:Employee={id:0,name:'',department:'',designation:'',gender:'',sales:''};
  constructor(private empService:EmployeesService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployeeById(this.router.snapshot.params['id']);
  }

  public getEmployeeById(id:number):void
  {
   this.empService.getEmployeeById(id).subscribe(data=>{
     this.emp=data;
     console.log(this.emp);
   });
  }
public delete(id:number)
{
  this.empService.deleteEmployee(id).subscribe(response=>{
    console.log(response);
    this.route.navigate(['/list']);
  },(error:any)=>{
    console.log(error);
  })
}
}
