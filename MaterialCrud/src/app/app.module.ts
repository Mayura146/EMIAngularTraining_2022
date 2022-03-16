import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { AngularMaterailModule } from './FeatureModule/angular-materail/angular-materail.module';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeesService } from './Services/employees.service';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterailModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})


export class AppModule {

 
  
 }
