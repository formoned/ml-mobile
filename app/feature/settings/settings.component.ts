import { Component, OnInit, ViewChild } from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import { SelectedIndexChangedEventData, TabView, TabViewItem } from "tns-core-modules/ui/tab-view";
import {ProfileComponent} from "./profile/profile.component";
import {GeneralComponent} from "./general/general.component";
// import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
// import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

@Component({
    selector: "app-settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    @ViewChild(ProfileComponent) profile: ProfileComponent;
    @ViewChild(GeneralComponent) password: GeneralComponent;
    actionBarDuoType : boolean = true;
    profileEditable : boolean = false;
    private _sideDrawerTransition: DrawerTransitionBase;

    private _title: string;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    onPassSave() {
        this.password.checkForm();
    }

    onSave() {
        this.profile.onSave();
    }

    onEdit() {
        this.profile.onEdit();
    }

    onStatusChange(statusCallback : boolean) {
        this.profileEditable = statusCallback;
    }

    onCancel() {
        this.profile.onEdit();
    }
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
        }
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onSideBarButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];

        this.title = selectedTabViewItem.title;
        if(this.title === 'Profile') {
            this.actionBarDuoType = true;
        }
        else {
            this.actionBarDuoType = false;
        }
    }
}
