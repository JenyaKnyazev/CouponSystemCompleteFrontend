import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service'
import { Router } from '@angular/router';

@Component({templateUrl: 'customerdetails.component.html'})
export class CustomerDetailsComponent  implements OnInit {
    details: any;
  
    constructor(private customerService:CustomerService,
                private router: Router) { }
  
    ngOnInit() {
        this.customerService.getCustomerDetails()
                            .subscribe(x => {
                                this.details = x;
                                console.log(x);
                            });
    }
  }
