import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { LogoutComponent } from "./logout/logout.component"
import { NotFoundComponent } from './notfound/notfound.component'
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

const routes: Routes = [
  { path: '', component:HomeComponent }, 
  { path: 'login', component:LoginComponent }, 
  { path: 'logout', component:LogoutComponent }, 
  { path: 'admin/viewcompany',component:ViewCompanyComponent},
  { path: 'admin/addcompany',component:AddCompanyComponent},
  { path: 'admin/updatecompany',component:UpdateCompanyComponent},
  { path: 'admin/viewcustomer',component:ViewCustomerComponent},
  { path: 'admin/addcustomer',component:AddCustomerComponent},
  { path: 'admin/updatecustomer',component:UpdateCustomerComponent},
  { path: 'company/viewcoupon',component:ViewCouponComponent},
  { path: 'company/addcoupon',component:AddCouponComponent},
  { path: 'company/updatecoupon',component:UpdateCouponComponent},
  { path: 'company/details',component:CompanyDetailsComponent},
  { path: 'customer/details',component:CustomerDetailsComponent},
  { path: 'customer/viewcoupon',component:ViewCouponCustomerComponent},
  { path: 'customer/coupon/purchase',component:PurchaseCouponComponent},
  {path: '404', component:NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
