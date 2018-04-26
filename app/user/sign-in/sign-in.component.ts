import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { LoginForm, User } from "../../shared/user.model";
import { UserService } from "../../shared/user.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
    selector: "app-signin",
    moduleId: module.id,
    templateUrl: "./sign-in.component.html",
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

    user: LoginForm;
    public message: string = "";

    @ViewChild("password") password: ElementRef;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new LoginForm();
    }

    submit() {
        // this.userService.

        if (!this.user.email || !this.user.password) {

            this.alert("Please provide both an email address and password.");
            return;
        }

        this.login();

    }


    private login() {


        // localStorage.setItem('teststorage', this.user.email);
        // this.alert("login function." + this.user.password);

        // this.userService
        //     .userAuthentication(this.user)
        //     .subscribe((data: any) => {
        //
        //     });

        this.userService.userAuthentication(this.user)
            .subscribe((data: any) => {
                    localStorage.setItem('token_type', data.token_type);
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('refresh_token', data.refresh_token);
                    this.router.navigate(['/']);
                },
                (err: HttpErrorResponse) => {
                    this.alert('User login failed');
                });

        // this.userService
        //     .userAuthentication(this.user)
        //     .subscribe((data: any) => {
        //
        //         console.log(data.json().token_type);
        //         localStorage.setItem('token_type', data.json().token_type);
        //         localStorage.setItem('access_token', data.json().access_token);
        //         localStorage.setItem('refresh_token', data.json().refresh_token);
        //         this.router.navigate(['/']);
        //
        //     });

    }




    forgotPassword() {
        this.alert(localStorage.getItem('access_token'));
        // this.alert("access_token: " + localStorage.getItem('access_token'));
        // prompt({
        //     title: "Forgot Password",
        //     message: "Enter the email address you used to register for APP NAME to reset your password.",
        //     inputType: "email",
        //     defaultText: "",
        //     okButtonText: "Ok",
        //     cancelButtonText: "Cancel"
        // }).then((data) => {
        //     if (data.result) {
        //         this.userService.resetPassword(data.text.trim())
        //             .then(() => {
        //                 this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
        //             }).catch(() => {
        //             this.alert("Unfortunately, an error occurred resetting your password.");
        //         });
        //     }
        // });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    // focusConfirmPassword() {
    //     if (!this.isLoggingIn) {
    //         this.password_confirmation.nativeElement.focus();
    //     }
    // }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}