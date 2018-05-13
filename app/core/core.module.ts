import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { SideBarComponent } from "./side-bar/side-bar.component";
import {SideBarItemComponent} from "./side-bar-item/side-bar-item.component";
import {
    ApiDeleteService, ApiGetService, ApiPostService, AuthGuardService, GeoLocationService, SettingsService,
    SideBarService,
    ValidationService
} from "./services";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        SideBarComponent,
        SideBarItemComponent
    ],
    exports: [
        SideBarComponent,
        NativeScriptUISideDrawerModule
    ],
    providers: [
        SideBarService,
        SettingsService,
        ApiGetService,
        ApiPostService,
        ApiDeleteService,
        GeoLocationService,
        ValidationService,
        AuthGuardService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})


export class CoreModule { }
