import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { AlertService } from '../../../services/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'addcoupon.component.html'})
export class AddCouponComponent  implements OnInit {
    addCouponForm: FormGroup;
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
        this.addCouponForm = this.formBuilder.group({
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
      get f() { return this.addCouponForm.controls; }


      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addCouponForm.invalid) {
            return;
        }

        this.loading = true;

        this.companyService.addCoupon(this.f.category.value,
                                      this.f.title.value,
                                      this.f.description.value,
                                      this.f.image.value,
                                      this.f.startDate.value,
                                      this.f.endDate.value,
                                      this.f.amount.value,
                                      this.f.price.value).subscribe(
            data => {
                console.log('Created');
                console.log(data);
                this.loading = false;
                this.router.navigate(['/company/viewcoupon']);
            },
            error => {
                console.log(error);
                this.alertService.error('Failed to create coupon');
                this.loading = false;
            });
    }
  }
