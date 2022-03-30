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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    PageNotFoundComponent
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
