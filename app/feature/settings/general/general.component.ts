import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {passwordEditForm} from "../../../core/models";
import {AuthenticationService} from "../../../core/services";
import {alert} from "tns-core-modules/ui/dialogs";

@Component({
    selector: "General",
    moduleId: module.id,
    templateUrl: "./general.component.html"
})
export class GeneralComponent implements OnInit {

    isSubmiting : boolean = false;

    passwordForm : passwordEditForm = {
        password_old : '',
        password : '',
        password_confirmation : ''
    };

    @ViewChild("password") password: ElementRef;
    @ViewChild("password_confirmation") password_confirmation: ElementRef;

    constructor(
        private authenticationService : AuthenticationService
    ) {
        // Use the constructor to inject services.
        console.log('general construct')
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    onSave() {
        this.submit(this.passwordForm);
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusPasswordConfirmation() {
        this.password_confirmation.nativeElement.focus();
    }

    checkForm() {
        if(!this.passwordForm.password_confirmation || !this.passwordForm.password || !this.passwordForm.password_old) {
            this.alert('One of field is empty!');
            return;
        } else if(this.passwordForm.password != this.passwordForm.password_confirmation) {
            this.alert('New password and Password Confirmation not match!');
            return;
        }
        this.submit(this.passwordForm);
    }

    submit(value : passwordEditForm) {
        this.isSubmiting = true;
        this.authenticationService.changeProfilePassword(value)
            .subscribe((response : any) => {
                if(response.success == true) {
                    this.passwordForm = {
                        password_old : '',
                        password : '',
                        password_confirmation : ''
                    };
                    this.alert(response.message);
                }
                else {
                    this.alert(response.message);
                }
                    this.isSubmiting = false;
            },
            error => {
                alert((JSON.parse(error.text())).message);
                console.log(error.text());
                this.isSubmiting = false;
            }
        );
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}