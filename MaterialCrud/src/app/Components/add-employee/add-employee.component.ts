import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
  
})
export class AddEmployeeComponent implements OnInit {
empForm: FormGroup;
isDataLoading=false;



  constructor(private empService: EmployeesService,private router: Router, private formBuilder: FormBuilder) {
  
    
   }

  ngOnInit(): void {

    this.empForm=this.formBuilder.group({
   
      name:['',Validators.required],
      designation:['',Validators.required],
      department:['',Validators.required],
      gender:['',Validators.required]
    })
    
  }

  public onFormSubmit(form: NgForm)
  {
    console.log(form);
   
   this.empService.addEmployee(form).subscribe(response=>{
     
    console.log(response);
      const id=response['id'];
      
      this.router.navigate(['details',id])
    },(error:any)=>{
      console.log(error);
    })
  }
}
