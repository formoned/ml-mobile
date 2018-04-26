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

import { AppRoutingModule, authProviders } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./sign-in/sign-in.component";

import { UserService } from "./shared/user.service";
import 'nativescript-localstorage';
import {AuthGuard} from "./auth/auth.guard";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";

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
        LoginComponent,
        UserComponent,
        HomeComponent,
        SignInComponent,
        SignUpComponent
    ],
    providers: [
        UserService,
        authProviders
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

