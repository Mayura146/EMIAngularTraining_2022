import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../Components/profile/profile.component';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild,CanDeactivate<ProfileComponent>,CanLoad {
  alertmessage="You dont have access to this page.Please Login!!"

  constructor(private service:AuthService,private router:Router){}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.service.isAuthenticated)
    {
   //this.router.navigate(['404']);
   alert(this.alertmessage);
this.router.navigate(['admin']);
   return false;
    }
return true;
  }
  canDeactivate(component: ProfileComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  return this.service.canExit();
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(!this.service.isAuthenticated)
    {
   //this.router.navigate(['404']);
   alert(this.alertmessage);
this.router.navigate(['admin']);
   return false;
    }
return true;
}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.service.isAuthenticated)
      {
     //this.router.navigate(['404']);
     alert(this.alertmessage);
 this.router.navigate(['admin']);
     return false;
      }
  return true;
  }
  }

 

