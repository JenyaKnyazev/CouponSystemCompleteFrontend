import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({templateUrl: 'viewcompany.component.html',  styleUrls: ['viewcompany.component.css']})
export class ViewCompanyComponent  implements OnInit {
    companies: any;
    selectedCompany: any;
  
    constructor(private adminService:AdminService,
                private router: Router) { }
  
    ngOnInit() {
        this.selectedCompany = null;
        this.adminService.getAllCompanies()
                            .subscribe(x => {
                                this.companies = x;
                                console.log(x);
                            });
    }
  
    onSelect(company: any): void {
      this.selectedCompany = company;
    }

    removeCompany(companyId:any): void {
      console.log('About to delete ' + companyId);
      this.adminService.deleteCompany(companyId)
                       .subscribe(x => {
                         console.log(x);
                         this.ngOnInit();
                     });
    }
  }
