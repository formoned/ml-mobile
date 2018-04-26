import { Injectable } from "@angular/core";
import { LoginForm, LoginOAuthForm, User } from "./user.model";
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class UserService {

    readonly rootUrl = 'http://bachelor-server.kods.lv';
    readonly clientId = '2';
    readonly clientSecret = '1qMmaxtVnN4q1ZxvkGTZSTDLxWKxHJX5POlU5jGk';
    readonly grantType = 'password';


    constructor(private http: HttpClient) {
    }


    register(user: User) {


        // return new Promise((resolve, reject) => {
        //     Kinvey.User.logout()
        //         .then(() => {
        //             Kinvey.User.signup({ username: user.email, password: user.password })
        //                 .then(resolve)
        //                 .catch((error) => { this.handleErrors(error); reject(); })
        //         })
        //         .catch((error) => { this.handleErrors(error); reject(); })
        // });
    }

    userAuthentication(user: LoginForm) {

        const body: LoginOAuthForm = {
            grant_type: this.grantType,
            username: user.email,
            password: user.password,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            scope: ""
        }

        var reqHeader = new HttpHeaders();

        reqHeader.append('Accept', 'application/json');
        reqHeader.append('Content-Type', 'application/json');

        return this.http.post(this.rootUrl + '/oauth/token', body, {headers : reqHeader });

    }

    registerUser(user: User) {

        const body: User = {
            email:                  user.email,
            password:               user.password,
            password_confirmation:  user.password_confirmation
        }

        var reqHeader = new HttpHeaders({'X-Requested-With':'XMLHttpRequest'});

        return this.http.post(this.rootUrl + '/api/auth/register ', body,{headers : reqHeader});
    }

    // login(user: LoginForm) {
    //
    //
    //     const body: LoginOAuthForm = {
    //         grant_type: this.grantType,
    //         username: user.email,
    //         password: user.password,
    //         client_id: this.clientId,
    //         client_secret: this.clientSecret,
    //         scope: ""
    //     }
    //
    //     var reqHeader = new Headers();
    //
    //     reqHeader.append('Accept', 'application/json');
    //     reqHeader.append('Content-Type', 'application/json');
    //
    //     return this.http.post(this.rootUrl + '/oauth/token', body, {headers : reqHeader });
    //
    //     // return new Promise((resolve, reject) => {
    //     //     Kinvey.User.logout()
    //     //         .then(() => {
    //     //             Kinvey.User.login(user.email, user.password)
    //     //                 .then(resolve)
    //     //                 .catch((error) => { this.handleErrors(error); reject(); })
    //     //         })
    //     //         .catch((error) => { this.handleErrors(error); reject(); })
    //     // });
    // }

    resetPassword(email) {
        // return Kinvey.User.resetPassword(email)
        //     .catch(this.handleErrors);
    }

    // handleErrors(error: Kinvey.BaseError) {
    //     console.error(error.message);
    // }
}