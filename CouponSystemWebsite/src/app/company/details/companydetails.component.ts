import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service'
import { Router } from '@angular/router';

@Component({templateUrl: 'companydetails.component.html'})
export class CompanyDetailsComponent  implements OnInit {
    details: any;
  
    constructor(private companyService:CompanyService,
                private router: Router) { }
  
    ngOnInit() {
        this.companyService.getCompanyDetails()
                            .subscribe(x => {
                                this.details = x;
                                console.log(x);
                            });
    }
  }
