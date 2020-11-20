import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { AlertService } from '../../../services/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'updatecompany.component.html'})
export class UpdateCompanyComponent  implements OnInit {
    updateCompanyForm: FormGroup;
    findCompanyForm: FormGroup;
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
        this.updateCompanyForm = this.formBuilder.group({
                id: ['', Validators.required],
                name: ['', Validators.required],
                password: ['', Validators.required],
                email: ['', Validators.required]
            });
        this.findCompanyForm = this.formBuilder.group({
                id: ['', Validators.required]
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.updateCompanyForm.controls; }

    get f_find() { return this.findCompanyForm.controls; }


    updateSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.updateCompanyForm.invalid) {
            return;
        }

        this.loading = true;

        this.adminService.updateCompany(this.f.id.value,this.f.name.value,this.f.email.value,this.f.password.value)
        .subscribe(
            data => {
                console.log('Updated');
                console.log(data);
                this.loading = false;
                this.router.navigate(['/admin/viewcompany']);
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
        if (this.findCompanyForm.invalid) {
            return;
        }

        this.loading = true;

        this.adminService.getCompany(this.f_find.id.value)
                        .subscribe(x => {
                            console.log(x);
                            this.updateCompanyForm.controls['id'].setValue(x.id);
                            this.updateCompanyForm.controls['name'].setValue(x.name);
                            this.updateCompanyForm.controls['password'].setValue(x.password);
                            this.updateCompanyForm.controls['email'].setValue(x.email);
                            this.submitted = false;
                            this.loading = false;
                        });
    }
  }
