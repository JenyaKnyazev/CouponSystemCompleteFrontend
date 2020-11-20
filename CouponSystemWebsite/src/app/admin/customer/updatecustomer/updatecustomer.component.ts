import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { AlertService } from '../../../services/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'updatecustomer.component.html'})
export class UpdateCustomerComponent  implements OnInit {
    updateCustomerForm: FormGroup;
    findCustomerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private adminService: AdminService
    ) {
    }

    ngOnInit() {
        this.updateCustomerForm = this.formBuilder.group({
                id: ['', Validators.required],
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                password: ['', Validators.required],
                email: ['', Validators.required]
            });
        this.findCustomerForm = this.formBuilder.group({
                id: ['', Validators.required]
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.updateCustomerForm.controls; }

    get f_find() { return this.findCustomerForm.controls; }


    updateSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.updateCustomerForm.invalid) {
            return;
        }

        this.loading = true;

        this.adminService.updateCustomer(this.f.id.value,this.f.firstName.value,this.f.lastName.value,this.f.email.value,this.f.password.value)
        .subscribe(
            data => {
                console.log('Updated');
                console.log(data);
                this.loading = false;
                this.router.navigate(['/admin/viewcustomer']);
            },
            error => {
                console.log(error);
                this.alertService.error('Failed to update company');
                this.loading = false;
            });
    }

    findSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.findCustomerForm.invalid) {
            return;
        }

        this.loading = true;

        this.adminService.getCustomer(this.f_find.id.value)
                        .subscribe(x => {
                            console.log(x);
                            this.updateCustomerForm.controls['id'].setValue(x.id);
                            this.updateCustomerForm.controls['firstName'].setValue(x.firstName);
                            this.updateCustomerForm.controls['lastName'].setValue(x.lastName);
                            this.updateCustomerForm.controls['password'].setValue(x.password);
                            this.updateCustomerForm.controls['email'].setValue(x.email);
                            this.submitted = false;
                            this.loading = false;
                        });
    }
  }
