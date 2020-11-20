import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({templateUrl: 'viewcustomer.component.html',  styleUrls: ['viewcustomer.component.css']})
export class ViewCustomerComponent  implements OnInit {
    customers: any;
    selectedCustomer: any;
  
    constructor(private adminService:AdminService,
                private router: Router) { }
  
    ngOnInit() {
        this.selectedCustomer = null;
        this.adminService.getAllCustomers()
                            .subscribe(x => {
                                this.customers = x;
                                console.log(x);
                            });
    }
  
    onSelect(customer: any): void {
      this.selectedCustomer = customer;
    }

    removeCustomer(customerId:any): void {
      console.log('About to delete ' + customerId);
      this.adminService.deleteCustomer(customerId)
                       .subscribe(x => {
                         console.log(x);
                         this.ngOnInit();
                     });
    }
  }
