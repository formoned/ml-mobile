import {Component, ElementRef, ViewChild} from "@angular/core";
import {IUserLogin, LoginForm} from "../../core/models";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import {Router} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";
import {AuthenticationService} from "../../core/services";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    user: IUserLogin;
    isSubmiting : boolean = false;
    public message: string = "";

    @ViewChild("password") password: ElementRef;

    constructor(
        private router : Router,
        private page: Page,
        private authenticationService : AuthenticationService
    ) {
        this.user = new IUserLogin();
    }


    submit() {
        if (!this.user.email || !this.user.password) {

            this.alert("Please provide both an email address and password.");
            return;
        }

        this.login();

    }

    private login() {
        // this.router.navigate(['/home']);
        this.isSubmiting = true;
        this.authenticationService.login(this.user)
            .subscribe(response => {
                this.isSubmiting = false;
                this.router.navigate(['/page/home']);
            },
        (error) => {
            alert("Unfortunately we could not find your account.");
        });


    }
    forgotPassword() {
        this.alert(this.user.password);
        // this.alert(localStorage.getItem('access_token'));
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    editForm() {

    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }


}
