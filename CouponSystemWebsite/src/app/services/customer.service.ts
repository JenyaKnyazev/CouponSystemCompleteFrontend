import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service'

@Injectable({ providedIn: 'root' })
export class CustomerService {

    constructor(private http: HttpClient, 
        		private authService:AuthenticationService) {
	}

	getAllCoupons() {
		console.log(this.authService.currentUserValue.token);

		let url = "http://localhost:8080/api/customer/coupon"

		return this.http.get<any>(url,{headers:new HttpHeaders({
			'token':  this.authService.currentUserValue.token
		})})
			.pipe(map(x => {
				return x;
			}));
	}

	getAllCouponsByCategory(category:string) {
		console.log(this.authService.currentUserValue.token);

		let url = "http://localhost:8080/api/customer/coupon/category/"+category

		return this.http.get<any>(url,{headers:new HttpHeaders({
			'token':  this.authService.currentUserValue.token
		})})
			.pipe(map(x => {
				return x;
			}));
	}

	getAllCouponsByMaxPrice(maxprice:string) {
		console.log(this.authService.currentUserValue.token);

		let url = "http://localhost:8080/api/customer/coupon/maxprice/"+maxprice
	
		return this.http.get<any>(url,{headers:new HttpHeaders({
			'token':  this.authService.currentUserValue.token
		})})
			.pipe(map(x => {
				return x;
			}));
	}

	getCustomerDetails() {
		console.log(this.authService.currentUserValue.token);

		let url = "http://localhost:8080/api/customer/details"

		return this.http.get<any>(url,{headers:new HttpHeaders({
			'token':  this.authService.currentUserValue.token
		})})
			.pipe(map(x => {
				return x;
			}));
	}

    purchaseCoupon(couponId:string) {
        console.log(this.authService.currentUserValue.token);

        let url = "http://localhost:8080/api/customer/coupon/" + couponId

        return this.http.get<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token})});
    }
}