import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import * as jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthLoginInfo } from 'src/app/auth/login-info';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = {};
  jwttoken: any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  token: any;
  payload: any;
  private loginInfo!: AuthLoginInfo;
 
  constructor(   private http:HttpClient,private router:Router,private authService: AuthService, private tokenStorage: TokenStorageService,  private localStorageservice : LocalStorageService) { }
 
  ngOnInit() {
  this.signOut();
  
    }
  
 
  login(form: any) {
    console.log("this is login");
 
    
 
    this.authService.attemptAuth(form).subscribe(
      data => {
       
        console.log(data)
        this.localStorageservice.store('users',data);

        this.tokenStorage.saveToken(data.accessToken!);
        this.tokenStorage.saveUsername(data.username!);
        this.tokenStorage.saveAuthorities(data.authorities!);
        localStorage.setItem("authJwtToken",
        data.accessToken!);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        //this.reloadPage();
        this.router.navigate(['/dashboard']);
       
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  login2(form:any) {
      
    this.authService.login(form).subscribe(
      user => {

        this.tokenStorage.saveToken(user.accessToken!);
        this.tokenStorage.saveUsername(user.username!);
        this.tokenStorage.saveAuthorities(user.authorities!);
        console.log('USER: ', user);
        this.localStorageservice.store('users',user);
        
        localStorage.setItem("authJwtToken",
        user.accessToken!);
        this.router.navigate(['/dashboard']);
       
        
        
  })
}
 
  reloadPage() {
    window.location.reload();
  }

  signOut() {
    window.sessionStorage.removeItem('AuthToken');
    window.sessionStorage.removeItem('AuthUsername');
    window.sessionStorage.removeItem('AuthAuthorities');

  }
}
