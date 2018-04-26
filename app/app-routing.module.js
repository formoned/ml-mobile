"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var user_component_1 = require("./user/user.component");
var auth_guard_1 = require("./auth/auth.guard");
var home_component_1 = require("./home/home.component");
var sign_in_component_1 = require("./user/sign-in/sign-in.component");
var sign_up_component_1 = require("./user/sign-up/sign-up.component");
exports.authProviders = [
    auth_guard_1.AuthGuard
];
var routes = [
    { path: "", component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    {
        path: 'signup', component: user_component_1.UserComponent,
        children: [{ path: '', component: sign_up_component_1.SignUpComponent }]
    },
    {
        path: 'login', component: user_component_1.UserComponent,
        children: [{ path: '', component: sign_in_component_1.SignInComponent }]
    }
    // { path: "", redirectTo: "/home", pathMatch: "full"},
    // { path: "", component: LoginComponent, canActivate: [AuthGuard]},
    //
    // { path: "login", component: LoginComponent },
    // // // { path: 'signin', component: UserComponent },
    // { path: "home", loadChildren: "./home/home.module#HomeModule" },
    // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDBFQUEwRTtBQUMxRSxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCx3RUFBd0U7QUFDeEUsMkVBQTJFO0FBQzNFLGtGQUFrRjtBQUNsRixrRkFBa0Y7QUFDbEYsMEZBQTBGO0FBQzFGLHlGQUF5RjtBQUN6RixLQUFLO0FBQ0wsOEJBQThCO0FBQzlCLGdFQUFnRTtBQUNoRSwyRUFBMkU7QUFDM0Usa0ZBQWtGO0FBQ2xGLGtGQUFrRjtBQUNsRiwwRkFBMEY7QUFDMUYseUZBQXlGO0FBQ3pGLFFBQVE7QUFDUixFQUFFO0FBQ0YsY0FBYztBQUNkLDJEQUEyRDtBQUMzRCwwQ0FBMEM7QUFDMUMsS0FBSztBQUNMLG9DQUFvQzs7QUFFcEMsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsZ0RBQTRDO0FBQzVDLHdEQUFvRDtBQUNwRCxzRUFBaUU7QUFDakUsc0VBQWlFO0FBRXBELFFBQUEsYUFBYSxHQUFHO0lBQ3pCLHNCQUFTO0NBQ1osQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxXQUFXLEVBQUcsQ0FBQyxzQkFBUyxDQUFDLEVBQUU7SUFDakU7UUFDSSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSw4QkFBYTtRQUN4QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLG1DQUFlLEVBQUUsQ0FBQztLQUN2RDtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsOEJBQWE7UUFDdkMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxtQ0FBZSxFQUFFLENBQUM7S0FDdkQ7SUFFRCx1REFBdUQ7SUFFdkQsb0VBQW9FO0lBQ3BFLEVBQUU7SUFDRixnREFBZ0Q7SUFDaEQsc0RBQXNEO0lBQ3RELG1FQUFtRTtJQUNuRSx5REFBeUQ7Q0FDNUQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuLy9cclxuLy8gY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbi8vICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuLy8gICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi91c2VyL3VzZXIubW9kdWxlI1VzZXJNb2R1bGVcIiB9LFxyXG4vLyAgICAgLy8geyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXHJcbi8vICAgICAvLyB7IHBhdGg6IFwiYnJvd3NlXCIsIGxvYWRDaGlsZHJlbjogXCIuL2Jyb3dzZS9icm93c2UubW9kdWxlI0Jyb3dzZU1vZHVsZVwiIH0sXHJcbi8vICAgICAvLyB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NlYXJjaC9zZWFyY2gubW9kdWxlI1NlYXJjaE1vZHVsZVwiIH0sXHJcbi8vICAgICAvLyB7IHBhdGg6IFwiZmVhdHVyZWRcIiwgbG9hZENoaWxkcmVuOiBcIi4vZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlXCIgfSxcclxuLy8gICAgIC8vIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9XHJcbi8vIF07XHJcbi8vIC8vIGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4vLyAvLyAgICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbi8vIC8vICAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcclxuLy8gLy8gICAgIHsgcGF0aDogXCJicm93c2VcIiwgbG9hZENoaWxkcmVuOiBcIi4vYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcclxuLy8gLy8gICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlXCIgfSxcclxuLy8gLy8gICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9mZWF0dXJlZC9mZWF0dXJlZC5tb2R1bGUjRmVhdHVyZWRNb2R1bGVcIiB9LFxyXG4vLyAvLyAgICAgeyBwYXRoOiBcInNldHRpbmdzXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH1cclxuLy8gLy8gXTtcclxuLy9cclxuLy8gQE5nTW9kdWxlKHtcclxuLy8gICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuLy8gICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbi8vIH0pXHJcbi8vIGV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci91c2VyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSBcIi4vYXV0aC9hdXRoLmd1YXJkXCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xyXG4gICAgQXV0aEd1YXJkXHJcbl07XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBjYW5BY3RpdmF0ZSA6IFtBdXRoR3VhcmRdIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NpZ251cCcsIGNvbXBvbmVudDogVXNlckNvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW3sgcGF0aDogJycsIGNvbXBvbmVudDogU2lnblVwQ29tcG9uZW50IH1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogVXNlckNvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW3sgcGF0aDogJycsIGNvbXBvbmVudDogU2lnbkluQ29tcG9uZW50IH1dXHJcbiAgICB9XHJcblxyXG4gICAgLy8geyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxyXG5cclxuICAgIC8vIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdfSxcclxuICAgIC8vXHJcbiAgICAvLyB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgLy8gLy8gLy8geyBwYXRoOiAnc2lnbmluJywgY29tcG9uZW50OiBVc2VyQ29tcG9uZW50IH0sXHJcbiAgICAvLyB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxyXG4gICAgLy8geyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==