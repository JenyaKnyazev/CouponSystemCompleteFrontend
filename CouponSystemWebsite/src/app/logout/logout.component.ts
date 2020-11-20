import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthenticationService } from '../services';

@Component({template: ''})
export class LogoutComponent implements OnInit {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
      this.authenticationService.logout();

      // redirect to login page
      this.router.navigate(['/login']);
    }

    
  ngOnInit() {
  }

}
