import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { TokenStorageService } from '../../../auth/token-storage.service';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../../../model/user.role';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users : any;
user : User = new User() ;
  constructor( private http:HttpClient,private router:Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }
  
  ngOnInit() {
   
    console.log('it is initialized')
    console.log(this.user)
  }
  register(form : any) {
    const {name,username,email,password,role} = form;

  
    const userData: User = {name:name,username:username,email:email,password: password,role: [role]};
    console.log(userData)
    this.http.post(apiUrl+'/api/auth/signup/',userData)
      .subscribe(
        data => {
          this.users = data;
          
        }
      );


  }

}