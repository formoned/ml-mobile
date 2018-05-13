import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import 'nativescript-localstorage';
import {CoreModule} from "./core/core.module";
import {AuthModule} from "./auth/auth.module";
import {NativeScriptRouterModule} from "nativescript-angular";
import {AuthGuardService} from "./core/services";


import * as platform from "platform";
declare var GMSServices: any;

if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyAIyw4QjOimJAuGMuiM3Ar8u-bJHLIHdX0");
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        AuthModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthGuardService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }


// import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
// import { NativeScriptModule } from "nativescript-angular/nativescript.module";
//
// import {AppRoutingModule} from "./app-routing.module";
// import { AppComponent } from "./app.component";
// import {UserComponent} from "./user/user.component";
// import {SignInComponent} from "./user/sign-in/sign-in.component";
// import {SignUpComponent} from "./user/sign-up/sign-up.component";
//
// @NgModule({
//     bootstrap: [
//         AppComponent
//     ],
//     imports: [
//         NativeScriptModule,
//         AppRoutingModule
//     ],
//     declarations: [
//         AppComponent,
//         UserComponent,
//         SignInComponent,
//         SignUpComponent
//     ],
//     schemas: [
//         NO_ERRORS_SCHEMA
//     ]
// })
// export class AppModule { }
