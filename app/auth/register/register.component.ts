import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "tns-core-modules/ui/page";
import {Router} from "@angular/router";
import {RegisterForm} from "../../core/models/auth.model";
import {AuthenticationService} from "../../core/services";
import {IUserRegister} from "../../core/models/user-login.model";

@Component({
    selector: "Register",
    moduleId: module.id,
    templateUrl: "./register.component.html",
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    user: IUserRegister;
    isSubmiting : boolean = false;

    @ViewChild("password") password: ElementRef;
    @ViewChild("password_confirmation") password_confirmation: ElementRef;

    constructor(
        private page: Page,
        private router: Router,
        private authenticationService : AuthenticationService
    ) {
        this.page.actionBarHidden = true;
        this.user = new IUserRegister();
    }

    ngOnInit(): void {

    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    focusConfirmPassword() {
        this.password_confirmation.nativeElement.focus();
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
        this.isSubmiting = true;
        this.authenticationService.register(this.user)
            .subscribe((data: any) => {
                if (data.success == true) {
                    this.isSubmiting = false;
                    this.alert(data.message, 'REGISTER USER');
                    this.router.navigate(['/auth/login']);
                }
                else {
                    this.isSubmiting = false;
                    this.alert('User registration failed', 'FAILED');
                }
            },
        (error) => {
                this.isSubmiting = false;
                this.alert((JSON.parse(error.text())).message, 'ERROR');
            });
    }

    onAddPostButtonTap() {
        this.router.navigate(['/page/posts']);
    }

    alert(message: string, title?: string) {
        return alert({
            title: title ? title : "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }

}
