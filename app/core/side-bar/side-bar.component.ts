import { Component, Input, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {alert} from "tns-core-modules/ui/dialogs";
import {AuthenticationService} from "../services";
import {profileForm} from "../models/profile-form.model";

/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "SideBar",
    moduleId: module.id,
    templateUrl: "./side-bar.component.html",
    styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
    /* ***********************************************************
    * The "selectedPage" is a component input property.
    * It is used to pass the current page title from the containing page component.
    * You can check how it is used in the "isPageSelected" function below.
    *************************************************************/
    @Input() selectedPage: string;

    user : profileForm = {
        name : '',
        email : '',
        created_at : '',
        title : '',
        about : '',
        gender : 'other',
        country : null
    };

    constructor(
        private router : Router,
        private authenticationService : AuthenticationService
    ) {

    }
    ngOnInit(): void {
        /* ***********************************************************
        * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
        this.loadUser();
    }

    loadUser() {
        this.authenticationService.getUser()
            .subscribe((response : any) => {
                    this.user.name = response.name;
                    this.user.email = response.email;
                    this.user.created_at = response.created_at;
                    this.user.gender = response.gender;
                    this.user.title = response.title;
                    this.user.about = response.about;
                    this.user.country = response.country_id;
                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });
    };

    logoutUser() {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
    }

    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }

}