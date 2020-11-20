import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.componnent'
import { HomeComponent } from './home/home.component'
import { ViewCompanyComponent } from './admin/company/viewcompany/viewcompany.component'
import { AddCompanyComponent } from './admin/company/addcompany/addcompany.component'
import { UpdateCompanyComponent } from './admin/company/updatecompany/updatecompany.component'
import { ViewCustomerComponent } from './admin/customer/viewcustomer/viewcustomer.component'
import { AddCustomerComponent } from './admin/customer/addcustomer/addcustomer.component'
import { UpdateCustomerComponent } from './admin/customer/updatecustomer/updatecustomer.component'
import { ViewCouponComponent } from './company/coupon/viewcoupon/viewcoupon.component'
import { AddCouponComponent } from './company/coupon/addcoupon/addcoupon.component'
import { UpdateCouponComponent } from './company/coupon/updatecoupon/updatecoupon.component'
import { CompanyDetailsComponent } from './company/details/companydetails.component'
import { CustomerDetailsComponent } from './customer/details/customerdetails.component'
import { ViewCouponCustomerComponent } from './customer/coupon/viewcoupon/viewcouponcustomer.component'
import { PurchaseCouponComponent } from './customer/coupon/purchasecoupon/purchasecoupon.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    ViewCompanyComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    ViewCustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    ViewCouponComponent,
    AddCouponComponent,
    UpdateCouponComponent,
    CompanyDetailsComponent,
    CustomerDetailsComponent,
    ViewCouponCustomerComponent,
    PurchaseCouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
