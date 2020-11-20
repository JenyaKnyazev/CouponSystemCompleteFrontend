import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { AlertService } from '../../../services/alert.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'viewcoupon.component.html',  styleUrls: ['viewcoupon.component.css']})
export class ViewCouponComponent  implements OnInit {
    findCouponsByPriceForm: FormGroup;
    findCouponsByCategoryForm: FormGroup;
    loading = false;
    submitted = false;
    coupons: any;
    selectedCoupon: any;
  
    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private companyService:CompanyService,
                private router: Router) { }
  
    ngOnInit() {
        this.selectedCoupon = null;
        this.companyService.getAllCoupons()
                            .subscribe(x => {
                                this.coupons = x;
                                console.log(x);
                            });
        this.findCouponsByPriceForm = this.formBuilder.group({
           maxPrice: ['', Validators.required]
        });
        this.findCouponsByCategoryForm = this.formBuilder.group({
           category: ['', Validators.required]
      });
    }

    // convenience getter for easy access to form fields
    get f_findprice() { return this.findCouponsByPriceForm.controls; }

    get f_findcategory() { return this.findCouponsByCategoryForm.controls; }


    findByMaxPriceSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.findCouponsByPriceForm.invalid) {
          return;
      }

      this.loading = true;

      this.companyService.getAllCouponsByMaxPrice(this.findCouponsByPriceForm.get('maxPrice').value)
                      .subscribe(x => {
                          console.log(x);
                          this.coupons = x;
                          this.submitted = false;
                          this.loading = false;
                      });
  }
  findByCategorySubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.findCouponsByCategoryForm.invalid) {
        return;
    }

    this.loading = true;

    this.companyService.getAllCouponsByCategory(this.findCouponsByCategoryForm.get('category').value)
                    .subscribe(x => {
                        console.log(x);
                        this.coupons = x;
                        this.submitted = false;
                        this.loading = false;
                    });
}
    onSelect(coupon: any): void {
      this.selectedCoupon = coupon;
    }

    removeCoupon(couponId:any): void {
      console.log('About to delete ' + couponId);
      this.companyService.deleteCoupon(couponId)
                       .subscribe(x => {
                         console.log(x);
                         this.ngOnInit();
                     });
    }
  }
