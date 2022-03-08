import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/add-employee/add-employee.component';
import { EditEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './FeatureModules/Employee/EmployeeModule/delete-employee/delete-employee.component';
import { EmployeeListComponent } from './FeatureModules/Employee/EmployeeModule/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
