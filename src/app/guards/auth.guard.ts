import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';
import { TokenStorageService } from '../auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
roles: any;
    constructor(private tokenStorage: TokenStorageService,private router: Router, private auth: AuthService,private store:LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
    
       this.roles = this.tokenStorage.getAuthorities();
       let currentuser = this.tokenStorage.getUsername()
       
         console.log("here is the user")
         console.log(currentuser)
         if (currentuser){
          if(route.data['roles'] && route.data['roles'].indexOf(this.roles[0]) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/login']);
              return false;
          }
  
          // authorised so return true
          return true;
           
      }
      
       // not logged in so redirect to login page with the return url
       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
       return false;

        
    }
     
    
}

