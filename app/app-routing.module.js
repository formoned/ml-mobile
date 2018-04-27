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
var sign_in_component_1 = require("./user/sign-in/sign-in.component");
var sign_up_component_1 = require("./user/sign-up/sign-up.component");
// export const authProviders = [
//     AuthGuard
// ];
var routes = [
    // { path: "", redirectTo: "/home", pathMatch: "full" },
    // { path: "home", loadChildren: "./home/home.module#HomeModule" },
    // { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    // { path: "search", loadChildren: "./search/search.module#SearchModule" },
    // { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    // { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" }
    { path: "", component: user_component_1.UserComponent, pathMatch: "full", canActivate: [auth_guard_1.AuthGuard] },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.model#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDBFQUEwRTtBQUMxRSxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCx3RUFBd0U7QUFDeEUsMkVBQTJFO0FBQzNFLGtGQUFrRjtBQUNsRixrRkFBa0Y7QUFDbEYsMEZBQTBGO0FBQzFGLHlGQUF5RjtBQUN6RixLQUFLO0FBQ0wsOEJBQThCO0FBQzlCLGdFQUFnRTtBQUNoRSwyRUFBMkU7QUFDM0Usa0ZBQWtGO0FBQ2xGLGtGQUFrRjtBQUNsRiwwRkFBMEY7QUFDMUYseUZBQXlGO0FBQ3pGLFFBQVE7QUFDUixFQUFFO0FBQ0YsY0FBYztBQUNkLDJEQUEyRDtBQUMzRCwwQ0FBMEM7QUFDMUMsS0FBSztBQUNMLG9DQUFvQzs7QUFFcEMsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsZ0RBQTRDO0FBRTVDLHNFQUFpRTtBQUNqRSxzRUFBaUU7QUFFakUsaUNBQWlDO0FBQ2pDLGdCQUFnQjtBQUNoQixLQUFLO0FBRUwsSUFBTSxNQUFNLEdBQVc7SUFFbkIsd0RBQXdEO0lBQ3hELG1FQUFtRTtJQUNuRSwyRUFBMkU7SUFDM0UsMkVBQTJFO0lBQzNFLG1GQUFtRjtJQUNuRixrRkFBa0Y7SUFHbEYsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFHLENBQUMsc0JBQVMsQ0FBQyxFQUFFO0lBQ3BGLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUM7SUFDL0QsRUFBRSxJQUFJLEVBQUcsUUFBUSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUN4RSxFQUFFLElBQUksRUFBRyxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3hFLEVBQUUsSUFBSSxFQUFHLFVBQVUsRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDL0UsRUFBRSxJQUFJLEVBQUcsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUNoRjtRQUNJLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLDhCQUFhO1FBQ3hDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsbUNBQWUsRUFBRSxDQUFDO0tBQ3ZEO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSw4QkFBYTtRQUN2QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLG1DQUFlLEVBQUUsQ0FBQztLQUN2RDtJQUlELHVEQUF1RDtJQUV2RCxvRUFBb0U7SUFDcEUsRUFBRTtJQUNGLGdEQUFnRDtJQUNoRCxzREFBc0Q7SUFDdEQsbUVBQW1FO0lBQ25FLHlEQUF5RDtDQUM1RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG4vL1xyXG4vLyBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuLy8gICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9naW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4vLyAgICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL3VzZXIvdXNlci5tb2R1bGUjVXNlck1vZHVsZVwiIH0sXHJcbi8vICAgICAvLyB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcclxuLy8gICAgIC8vIHsgcGF0aDogXCJicm93c2VcIiwgbG9hZENoaWxkcmVuOiBcIi4vYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcclxuLy8gICAgIC8vIHsgcGF0aDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlXCIgfSxcclxuLy8gICAgIC8vIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9mZWF0dXJlZC9mZWF0dXJlZC5tb2R1bGUjRmVhdHVyZWRNb2R1bGVcIiB9LFxyXG4vLyAgICAgLy8geyBwYXRoOiBcInNldHRpbmdzXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH1cclxuLy8gXTtcclxuLy8gLy8gY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbi8vIC8vICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuLy8gLy8gICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxyXG4vLyAvLyAgICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9icm93c2UvYnJvd3NlLm1vZHVsZSNCcm93c2VNb2R1bGVcIiB9LFxyXG4vLyAvLyAgICAgeyBwYXRoOiBcInNlYXJjaFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGVcIiB9LFxyXG4vLyAvLyAgICAgeyBwYXRoOiBcImZlYXR1cmVkXCIsIGxvYWRDaGlsZHJlbjogXCIuL2ZlYXR1cmVkL2ZlYXR1cmVkLm1vZHVsZSNGZWF0dXJlZE1vZHVsZVwiIH0sXHJcbi8vIC8vICAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlI1NldHRpbmdzTW9kdWxlXCIgfVxyXG4vLyAvLyBdO1xyXG4vL1xyXG4vLyBATmdNb2R1bGUoe1xyXG4vLyAgICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4vLyAgICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxuLy8gfSlcclxuLy8gZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci91c2VyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSBcIi4vYXV0aC9hdXRoLmd1YXJkXCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xyXG4vLyAgICAgQXV0aEd1YXJkXHJcbi8vIF07XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHJcbiAgICAvLyB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgLy8geyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcclxuICAgIC8vIHsgcGF0aDogXCJicm93c2VcIiwgbG9hZENoaWxkcmVuOiBcIi4vYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcclxuICAgIC8vIHsgcGF0aDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlXCIgfSxcclxuICAgIC8vIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9mZWF0dXJlZC9mZWF0dXJlZC5tb2R1bGUjRmVhdHVyZWRNb2R1bGVcIiB9LFxyXG4gICAgLy8geyBwYXRoOiBcInNldHRpbmdzXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH1cclxuXHJcblxyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFVzZXJDb21wb25lbnQsIHBhdGhNYXRjaDogXCJmdWxsXCIsIGNhbkFjdGl2YXRlIDogW0F1dGhHdWFyZF0gfSxcclxuICAgIHsgcGF0aCA6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIn0sXHJcbiAgICB7IHBhdGggOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9icm93c2UvYnJvd3NlLm1vZHVsZSNCcm93c2VNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoIDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aCA6IFwiZmVhdHVyZWRcIiwgbG9hZENoaWxkcmVuOiBcIi4vZmVhdHVyZWQvZmVhdHVyZWQubW9kZWwjRmVhdHVyZWRNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoIDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFVzZXJDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFNpZ25VcENvbXBvbmVudCB9XVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IFVzZXJDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFNpZ25JbkNvbXBvbmVudCB9XVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8geyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxyXG5cclxuICAgIC8vIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdfSxcclxuICAgIC8vXHJcbiAgICAvLyB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgLy8gLy8gLy8geyBwYXRoOiAnc2lnbmluJywgY29tcG9uZW50OiBVc2VyQ29tcG9uZW50IH0sXHJcbiAgICAvLyB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxyXG4gICAgLy8geyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==