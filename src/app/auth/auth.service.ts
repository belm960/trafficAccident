import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
 
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { TokenStorageService } from './token-storage.service';
import { take, map } from 'rxjs/operators';
import jwtDecode, * as jwt_decode from "jwt-decode";
import { apiUrl } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = apiUrl+'/api/auth/signin'
  //private loginUrl = apiUrl+'/api/auth/signin';
  private signupUrl = +apiUrl+'/api/auth/signup';
  public user!: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
 
  constructor(private http: HttpClient ,private tokenStorage: TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
 
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
  login(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.loginUrl}/auth`, credentials,httpOptions).pipe(
      take(1),
      map((res: any) => res['token']),
      map((token: any) => {
        console.log(token);
        
        localStorage.setItem("authJwtToken",token);
        //this.locastore.store("users",token);
        
        return jwtDecode(token);
      })
    )
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}