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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSw0Q0FBaUQ7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQywyQkFBZ0IsQ0FBQyxFQUFFO0lBQzFGLG1FQUFtRTtJQUNuRSxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsWUFBWSxFQUFFLHdDQUF3QyxFQUFFLFdBQVcsRUFBRSxDQUFDLDJCQUFnQixDQUFDLEVBQUU7Q0FFN0csQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBdXRoR3VhcmRTZXJ2aWNlfSBmcm9tIFwiLi9jb3JlL3NlcnZpY2VzXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcGFnZS9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV0gfSxcclxuICAgIC8vIHsgcGF0aCA6IFwiYXV0aFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9hdXRoL2F1dGgubW9kdWxlI0F1dGhNb2R1bGVcIn0sXHJcbiAgICB7IHBhdGggOiBcInBhZ2VcIiwgbG9hZENoaWxkcmVuOiBcIi4vZmVhdHVyZS9mZWF0dXJlLm1vZHVsZSNGZWF0dXJlTW9kdWxlXCIsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV0gfSxcclxuICAgIC8vIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy9ob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfVxyXG5dO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19