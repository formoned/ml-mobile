import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { UserService } from "../../shared/user.service";
import { LoginForm, User } from "../../shared/user.model";

@Component({
    selector: "app-signup",
    moduleId: module.id,
    templateUrl: "./sign-up.component.html",
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

    user: User;

    @ViewChild("password") password: ElementRef;
    @ViewChild("password_confirmation") password_confirmation: ElementRef;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
    }

    submit() {

        if (!this.user.email || !this.user.password || !this.user.password_confirmation) {

            this.alert("Please provide an email address, password and password confirmation.");

            return;
        } else if(this.user.password != this.user.password_confirmation) {

            this.alert('Password and password confirmation not a same!');
            return;
        }

        this.register();

    }

    register() {

        this.userService
            .registerUser(this.user)
            .subscribe((data: any) => {
                if (data.success == true) {
                    // this.alert('User registration successful');
                    this.router.navigate(['login']);
                }
                else {
                    this.alert('User registration failed');
                }
            });

    }

    toggleForm() {
        this.router.navigate(['/login']);
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }


}