import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from 'src/app/auth/signup-info';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo!: SignUpInfo
  isSignUpFailed = false;
  errorMessage = '';
  isSignedUp=false;
 
  constructor(private authService: AuthService) { }
 
  ngOnInit() { }
 
  onSubmit() {
    console.log(this.form);
 
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);
 
    this.authService.signUp(this.signupInfo).subscribe(
      ( data: any) => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      ( error: { error: { message: string; }; }) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
