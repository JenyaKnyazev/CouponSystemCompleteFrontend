import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Coupon } from "../models/Coupon"
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service'

@Injectable({ providedIn: 'root' })
export class CompanyService {
    constructor(private http: HttpClient, 
        private authService:AuthenticationService) {
    }

    addCoupon(category:string,title:string,description:string,image:string,startDate:string,endDate:string,amount:string,price:string) {
        console.log(this.authService.currentUserValue.token);

        let url = "http://localhost:8080/api/company/copuon"

        let coupon = new Coupon();
        coupon.category=category;
        coupon.title=title;
        coupon.description=description;
        coupon.startDate=startDate;
        coupon.endDate=endDate;
        coupon.amount=amount;
        coupon.price=price;
        coupon.image=image;

        return this.http.post<any>(url,coupon,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token})});
    }

    updateCoupon(id:string,category:string,title:string,description:string,image:string,startDate:string,endDate:string,amount:string,price:string) {
        console.log(this.authService.currentUserValue.token);

        let url = "http://localhost:8080/api/company/copuon"


        let coupon = new Coupon();
        coupon.id = id;
        coupon.category=category;
        coupon.title=title;
        coupon.description=description;
        coupon.startDate=startDate;
        coupon.endDate=endDate;
        coupon.amount=amount;
        coupon.price=price;
        coupon.image=image;

        return this.http.put<any>(url,coupon,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token})});
    }

    deleteCoupon(couponId:any) {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/company/coupon/" + couponId;
 
        return this.http.delete<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }

     getAllCoupons() {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/company/coupon"
 
        return this.http.get<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }

     getAllCouponsByCategory(category:string) {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/company/coupon/category/"+category
 
        return this.http.get<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }
 
     getAllCouponsByMaxPrice(maxprice:string) {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/company/coupon/maxprice/"+maxprice
 
        return this.http.get<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }

     getCompanyDetails() {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/company/details"
 
        return this.http.get<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }
}