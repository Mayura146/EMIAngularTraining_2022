import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DeleteEmployeeComponent } from './Components/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UsersComponent } from './Components/users/users.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [

  {path:'admin',component:AdminComponent},
  {path:'404',component:PageNotFoundComponent},
  {path:'user',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivateChild:[AuthGuard],children:[
    {path:'add',component:AddEmployeeComponent},
    {path:'delete',component:DeleteEmployeeComponent},
    {path:'edit',component:EditEmployeeComponent}
  ]},
  {path:'profile',component:ProfileComponent,canDeactivate:[AuthGuard]},
  {path:'product',loadChildren:()=>import('./FeatureModules/product/product.module')
  .then(module=>module.ProductModule),canLoad:[AuthGuard]
 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
