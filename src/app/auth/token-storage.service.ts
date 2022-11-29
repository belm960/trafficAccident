import { Injectable } from '@angular/core';
 
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }
 
  signOut() {
    window.sessionStorage.clear();
  }
 
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
 
  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }
 
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
 
  public getUsername(): string | null {
    return sessionStorage.getItem(USERNAME_KEY);
  }
 
  public saveAuthorities(authorities: string[]) {
    if(!(authorities==null)){
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    } 
  }
  public getItem(): string | null {
    return sessionStorage.getItem(AUTHORITIES_KEY)
  }
 
  public getAuthorities(): string[] {
    this.roles = [];
 
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(this.getItem()!).forEach((authority: { authority: string; }) => {
        this.roles.push(authority.authority);
      });
    }
 
    return this.roles;
  }
}