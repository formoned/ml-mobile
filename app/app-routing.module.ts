// import { NgModule } from "@angular/core";
// import { Routes } from "@angular/router";
// import { NativeScriptRouterModule } from "nativescript-angular/router";
//
// const routes: Routes = [
//     { path: "", redirectTo: "/login", pathMatch: "full" },
//     { path: "login", loadChildren: "./user/user.module#UserModule" },
//     // { path: "login", loadChildren: "./home/home.module#HomeModule" },
//     // { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
//     // { path: "search", loadChildren: "./search/search.module#SearchModule" },
//     // { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
//     // { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" }
// ];
// // const routes: Routes = [
// //     { path: "", redirectTo: "/login", pathMatch: "full" },
// //     { path: "login", loadChildren: "./home/home.module#HomeModule" },
// //     { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
// //     { path: "search", loadChildren: "./search/search.module#SearchModule" },
// //     { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
// //     { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" }
// // ];
//
// @NgModule({
//     imports: [NativeScriptRouterModule.forRoot(routes)],
//     exports: [NativeScriptRouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from './sign-in/sign-in.component';
import { UserComponent } from "./user/user.component";
import {AuthGuard} from "./auth/auth.guard";
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";

export const authProviders = [
    AuthGuard
];

const routes: Routes = [
    { path: "", component: HomeComponent, canActivate : [AuthGuard] },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    }

    // { path: "", redirectTo: "/home", pathMatch: "full"},

    // { path: "", component: LoginComponent, canActivate: [AuthGuard]},
    //
    // { path: "login", component: LoginComponent },
    // // // { path: 'signin', component: UserComponent },
    // { path: "home", loadChildren: "./home/home.module#HomeModule" },
    // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
