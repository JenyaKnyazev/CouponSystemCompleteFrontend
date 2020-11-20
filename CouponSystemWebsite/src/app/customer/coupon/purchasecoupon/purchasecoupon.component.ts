import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { AlertService } from '../../../services/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({templateUrl: 'purchasecoupon.component.html'})
export class PurchaseCouponComponent  implements OnInit {
    purchaseCouponForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private customerService: CustomerService
    ) {
    }

    ngOnInit() {
        this.purchaseCouponForm = this.formBuilder.group({
                couponId:['', Validators.required]
            });
    }
      // convenience getter for easy access to form fields
      get f() { return this.purchaseCouponForm.controls; }


      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.purchaseCouponForm.invalid) {
            return;
        }

        this.loading = true;

        this.customerService.purchaseCoupon(this.f.couponId.value).subscribe(
            data => {
                console.log('Purchased');
                console.log(data);
                this.loading = false;
                this.router.navigate(['/customer/viewcoupon']);
            },
            error => {
                console.log(error);
                this.alertService.error('Failed to purchase coupon');
                this.loading = false;
            });

    }
  }
