"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var services_1 = require("./core/services");
var routes = [
    { path: "", redirectTo: "/page/home", pathMatch: "full", canActivate: [services_1.AuthGuardService] },
    // { path : "auth", loadChildren: "./auth/auth.module#AuthModule"},
    { path: "page", loadChildren: "./feature/feature.module#FeatureModule", canActivate: [services_1.AuthGuardService] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSw0Q0FBaUQ7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQywyQkFBZ0IsQ0FBQyxFQUFFO0lBQzFGLG1FQUFtRTtJQUNuRSxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsWUFBWSxFQUFFLHdDQUF3QyxFQUFFLFdBQVcsRUFBRSxDQUFDLDJCQUFnQixDQUFDLEVBQUU7Q0FFN0csQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoR3VhcmRTZXJ2aWNlfSBmcm9tIFwiLi9jb3JlL3NlcnZpY2VzXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcGFnZS9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV0gfSxcbiAgICAvLyB7IHBhdGggOiBcImF1dGhcIiwgbG9hZENoaWxkcmVuOiBcIi4vYXV0aC9hdXRoLm1vZHVsZSNBdXRoTW9kdWxlXCJ9LFxuICAgIHsgcGF0aCA6IFwicGFnZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9mZWF0dXJlL2ZlYXR1cmUubW9kdWxlI0ZlYXR1cmVNb2R1bGVcIiwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRTZXJ2aWNlXSB9LFxuICAgIC8vIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy9ob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuXTtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19