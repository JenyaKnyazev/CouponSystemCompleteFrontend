import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({templateUrl: 'viewcouponcustomer.component.html',  styleUrls: ['viewcouponcustomer.component.css']})
export class ViewCouponCustomerComponent  implements OnInit {
    findCouponsByPriceForm: FormGroup;
    findCouponsByCategoryForm: FormGroup;
    loading = false;
    submitted = false;
    coupons: any;
    selectedCoupon: any;
  
    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private customerService:CustomerService,
                private router: Router) { }
  
    ngOnInit() {
        this.selectedCoupon = null;
        this.customerService.getAllCoupons()
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

      this.customerService.getAllCouponsByMaxPrice(this.findCouponsByPriceForm.get('maxPrice').value)
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

    this.customerService.getAllCouponsByCategory(this.findCouponsByCategoryForm.get('category').value)
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
  }
