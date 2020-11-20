import { Component } from '@angular/core';
import {AuthenticationService} from "./services"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CouponSystemWebsite';
  constructor(public authService: AuthenticationService) {}
}
