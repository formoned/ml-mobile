import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeatureRoutingModule } from "./feature-routing.module";
import { FeatureComponent } from "./feature.component";
import {CoreModule} from "../core/core.module";
import {ApiGetService, AuthenticationService} from "../core/services";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeatureRoutingModule,
        CoreModule
    ],
    declarations: [
        FeatureComponent
    ],
    providers : [
        AuthenticationService,
        ApiGetService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeatureModule { }