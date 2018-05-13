import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoreModule } from "../../core/core.module";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import {GeneralComponent} from "./general/general.component";
import {ProfileComponent} from "./profile/profile.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {ApiGetService, AuthenticationService} from "../../core/services";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule,
        NativeScriptFormsModule,
        CoreModule
    ],
    declarations: [
        SettingsComponent,
        GeneralComponent,
        ProfileComponent
    ],
    providers : [
        AuthenticationService,
        ApiGetService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
