import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { UserComponent } from "./user.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

// import { HomeComponent } from "./home.component";

const routes: Routes = [
    // { path: "", component: SignInComponent },
    // { path: "signup", component: SignUpComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class UserRoutingModule { }