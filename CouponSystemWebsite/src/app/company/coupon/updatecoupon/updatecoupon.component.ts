import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { AlertService } from '../../../services/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'updatecoupon.component.html'})
export class UpdateCouponComponent  implements OnInit {
    updateCouponForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private companyService: CompanyService
    ) {
    }

    ngOnInit() {
        this.updateCouponForm = this.formBuilder.group({
                id: ['', Validators.required],
                category:['', Validators.required],
                title: ['', Validators.required],
                description: ['', Validators.required],
                image: ['', Validators.required],
                startDate: ['', Validators.required],
                endDate: ['', Validators.required],
                amount: ['', Validators.required],
                price: ['', Validators.required]
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.updateCouponForm.controls; }



    updateSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.updateCouponForm.invalid) {
            return;
        }

        this.loading = true;

        this.companyService.updateCoupon(this.f.id.value,
                                         this.f.category.value,
                                         this.f.title.value,
                                         this.f.description.value,
                                         this.f.image.value,
                                         this.f.startDate.value,
                                         this.f.endDate.value,
                                         this.f.amount.value,
                                         this.f.price.value)
        .subscribe(
            data => {
                console.log('Updated');
                console.log(data);
                this.loading = false;
                this.router.navigate(['/company/viewcoupon']);
            },
            error => {
                console.log(error);
                this.alertService.error('Failed to update coupon');
                this.loading = false;
            });
    }
  }
