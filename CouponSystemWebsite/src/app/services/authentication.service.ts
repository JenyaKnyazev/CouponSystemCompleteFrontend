import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from "../models"
import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public isLoggedIn$: BehaviorSubject<boolean>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        const isLoggedIn = localStorage.getItem('currentUser') !== null;
        this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string, clientType: string) {
        let url = "http://localhost:8080/api/"+clientType+"/login/"+username+"/"+password;
        
        console.log(url);
        
        return this.http.get<any>(url)
            .pipe(map(authenticationResult => {
                if(authenticationResult.logged === true && authenticationResult.token){
                    console.log('Successed to login, Token = ' + authenticationResult.token);

                    let user = new User();
                    user.token = authenticationResult.token;
                    user.username = username;
                    user.clientType = clientType;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    this.isLoggedIn$.next(true);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                } else {
                    console.log('Failed to login');
                }

                return authenticationResult;
            }));
    }

    logout() {
        let user = this.currentUserSubject.value;

        if(user !== null) {
            let url = "http://localhost:8080/api/"+user.clientType+"/logout"

            this.http.get<any>(url,{headers:new HttpHeaders({
                'token':  user.token
              })}).subscribe(res=>console.log(res),err=>console.log(err));

              console.log("Deleting user from local storage");

            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            this.isLoggedIn$.next(false);
        }


    }
}