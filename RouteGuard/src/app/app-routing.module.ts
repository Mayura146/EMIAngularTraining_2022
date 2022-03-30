import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { UsersComponent } from './Components/users/users.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [

  {path:'admin',component:AdminComponent},
  {path:'404',component:PageNotFoundComponent},
  {path:'user',component:UsersComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
