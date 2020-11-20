import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from "../models/Company"
import { Customer } from "../models/Customer"
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service'

@Injectable({ providedIn: 'root' })
export class AdminService {
    constructor(private http: HttpClient, 
                private authService:AuthenticationService) {
    }

    getAllCompanies() {
       console.log(this.authService.currentUserValue.token);

       let url = "http://localhost:8080/api/admin/company"

       return this.http.get<any>(url,{headers:new HttpHeaders({
           'token':  this.authService.currentUserValue.token
         })})
            .pipe(map(x => {
                return x;
            }));
    }

    getCompany(comapnyId:any) {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/admin/company/" + comapnyId
 
        return this.http.get<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }

    addCompany(name:string,email:string,password:string) {
        console.log(this.authService.currentUserValue.token);

        let url = "http://localhost:8080/api/admin/company"

        let company = new Company();
        company.name = name;
        company.email = email;
        company.password = password;

        return this.http.post<any>(url,company,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token})});
    }

    updateCompany(id:string,name:string,email:string,password:string) {
        console.log(this.authService.currentUserValue.token);

        let url = "http://localhost:8080/api/admin/company"

        let company = new Company();
        company.id = id;
        company.name = name;
        company.email = email;
        company.password = password;

        return this.http.put<any>(url,company,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token})});
    }

    deleteCompany(comapnyId:any) {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/admin/company/" + comapnyId;
 
        return this.http.delete<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }

     getAllCustomers() {
        console.log(this.authService.currentUserValue.token);
 
        let url = "http://localhost:8080/api/admin/customer"
 
        return this.http.get<any>(url,{headers:new HttpHeaders({
            'token':  this.authService.currentUserValue.token
          })})
             .pipe(map(x => {
                 return x;
             }));
     }
 
     getCustomer(customerId:any) {
         console.log(this.authService.currentUserValue.token);
  
         let url = "http://localhost:8080/api/admin/customer/" + customerId
  
         return this.http.get<any>(url,{headers:new HttpHeaders({
             'token':  this.authService.currentUserValue.token
           })})
              .pipe(map(x => {
                  return x;
              }));
      }
 
     addCustomer(firstName:string,lastName:string,email:string,password:string) {
         console.log(this.authService.currentUserValue.token);
 
         let url = "http://localhost:8080/api/admin/customer"
 
         let customer = new Customer();
         customer.firstName = firstName;
         customer.lastName=lastName;
         customer.email=email;
         customer.password=password;
 
         return this.http.post<any>(url,customer,{headers:new HttpHeaders({
             'token':  this.authService.currentUserValue.token})});
     }
 
     updateCustomer(id:string,firstName:string,lastName:string,email:string,password:string) {
         console.log(this.authService.currentUserValue.token);
 
         let url = "http://localhost:8080/api/admin/customer"
 
         let customer = new Customer();
         customer.id=id;
         customer.firstName = firstName;
         customer.lastName=lastName;
         customer.email=email;
         customer.password=password;
 
         return this.http.put<any>(url,customer,{headers:new HttpHeaders({
             'token':  this.authService.currentUserValue.token})});
     }
 
     deleteCustomer(customerId:any) {
         console.log(this.authService.currentUserValue.token);
  
         let url = "http://localhost:8080/api/admin/customer/" + customerId;
  
         return this.http.delete<any>(url,{headers:new HttpHeaders({
             'token':  this.authService.currentUserValue.token
           })})
              .pipe(map(x => {
                  return x;
              }));
      }
}