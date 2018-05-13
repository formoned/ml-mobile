import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import {CoreModule} from "../core/core.module";
import {NativeScriptFormsModule, NativeScriptHttpModule} from "nativescript-angular";
import {AuthenticationService, AuthGuardService} from "../core/services";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        AuthRoutingModule,
        CoreModule
    ],
    declarations: [
        AuthComponent, LoginComponent, RegisterComponent
    ],
    providers : [
        AuthenticationService, AuthGuardService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }