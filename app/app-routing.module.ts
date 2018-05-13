import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {AuthGuardService} from "./core/services";

const routes: Routes = [
    { path: "", redirectTo: "/page/home", pathMatch: "full", canActivate: [AuthGuardService] },
    // { path : "auth", loadChildren: "./auth/auth.module#AuthModule"},
    { path : "page", loadChildren: "./feature/feature.module#FeatureModule", canActivate: [AuthGuardService] },
    // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
