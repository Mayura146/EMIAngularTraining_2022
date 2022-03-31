import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username:string;
  password:string;
 isAuthenticated=false;
  constructor() { }
  public IsAdmin(user:any):boolean
  {
    
    console.log(user);
    if(user.username==='admin' && user.password==='admin123')
    {
     this.isAuthenticated=true;
      return true;

      
    }
    else
    {
      return false;
    }
  }

  public canExit():boolean
  {
    if(confirm("Do you want to leave this page.Confirm"))
    {
      return true;
    }

    else
    {
      return true;
    }
  }
}
