import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UsersComponent } from './Components/users/users.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './Guards/auth.guard';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Components/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProductDetailsComponent } from './FeatureModules/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    PageNotFoundComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    ProfileComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
