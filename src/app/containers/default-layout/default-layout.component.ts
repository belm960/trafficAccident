import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { navItems1 } from './_nav copy';
import { navItems2 } from './_nav copy 2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems1;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private tokenStorage: TokenStorageService) {
    let userrole = this.tokenStorage.getAuthorities();
    if( userrole[0] == "ROLE_ADMIN"){
      this.navItems = navItems2;
     }
     if( userrole[0] == "ROLE_USER"){
      this.navItems = navItems1;
     }
  }
}
