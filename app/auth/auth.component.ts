import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    isLoggingIn = true;

    constructor(
        private router : Router,
        private page : Page
    ) {
        if (localStorage.getItem('access_token') != null) {
            this.router.navigate(['/home']);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
        this.page.actionBarHidden = true;
        this.isLoggingIn = this.router.url == '/auth/login' ? true : false;
    }
    ngOnInit(): void {


    }

    toggleForm() {

        if(this.isLoggingIn) {
            this.router.navigate(['/auth/register']);
            this.isLoggingIn = false;
        }
        else if(!this.isLoggingIn) {
            this.router.navigate(['/auth/login']);
            this.isLoggingIn = true;
        }


    }
}
