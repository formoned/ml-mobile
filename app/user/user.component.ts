// import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {Router} from "@angular/router";
//
// @Component({
//     selector: 'app-user',
//     templateUrl: './user.component.html',
//     styleUrls: ['./user.component.scss'],
//     encapsulation: ViewEncapsulation.None
// })
// export class UserComponent implements OnInit {
//
//     constructor(private router : Router) { }
//
//     ngOnInit() {
//         if (localStorage.getItem('access_token') != null) {
//             this.router.navigate(['/']);
//         }
//         console.log('ngOnInit');
//     }
//
// }

import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
// import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import {LoginForm, User} from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-user",
    moduleId: module.id,
    templateUrl: "./user.component.html",
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


    isLoggingIn = true;

    constructor(private router : Router, private page : Page) {
        this.page.actionBarHidden = true;
        this.isLoggingIn = this.router.url == '/login' ? true : false;

        // if(this.router.url == '/login') {
        //     this.isLoggingIn = true;
        // }
        // else if(this.router.url == '/signup') {
        //     this.isLoggingIn = false;
        // }
    }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.router.navigate(['/']);
        }
    }

    toggleForm() {

        if(this.isLoggingIn) {
            this.router.navigate(['/signup']);
        }
        else if(!this.isLoggingIn) {
            this.router.navigate(['/login']);
        }

    }

}
