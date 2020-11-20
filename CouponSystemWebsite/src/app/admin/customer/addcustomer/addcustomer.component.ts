import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { AlertService } from '../../../services/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'addcustomer.component.html'})
export class AddCustomerComponent  implements OnInit {
    addCustomerForm: FormGroup;
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
        this.addCustomerForm = this.formBuilder.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                password: ['', Validators.required],
                email: ['', Validators.required]
            });
    }
      // convenience getter for easy access to form fields
      get f() { return this.addCustomerForm.controls; }


      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addCustomerForm.invalid) {
            return;
        }

        this.loading = true;

        this.adminService.addCustomer(this.f.firstName.value,this.f.lastName.value,this.f.email.value,this.f.password.value)
        
        .subscribe(
            data => {
                console.log('Created');
                console.log(data);
                this.loading = false;
                this.router.navigate(['/admin/viewcustomer']);
            },
            error => {
                console.log(error);
                this.alertService.error('Failed to create customer');
                this.loading = false;
            });
    }
  }
