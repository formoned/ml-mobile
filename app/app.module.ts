// import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
// import { NativeScriptModule } from "nativescript-angular/nativescript.module";
//
// import { AppRoutingModule } from "./app-routing.module";
// import { AppComponent } from "./app.component";
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
//         AppComponent
//     ],
//     schemas: [
//         NO_ERRORS_SCHEMA
//     ]
// })
// export class AppModule { }

import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UserService } from "./shared/user.service";
import 'nativescript-localstorage';
import {UserComponent} from "./user/user.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        SignInComponent,
        SignUpComponent
    ],
    providers: [
        UserService, AuthGuard
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
