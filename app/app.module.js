"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
require("nativescript-localstorage");
var core_module_1 = require("./core/core.module");
var auth_module_1 = require("./auth/auth.module");
var services_1 = require("./core/services");
var platform = require("platform");
if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyAIyw4QjOimJAuGMuiM3Ar8u-bJHLIHdX0");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                app_routing_module_1.AppRoutingModule,
                auth_module_1.AuthModule,
                core_module_1.CoreModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                services_1.AuthGuardService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUNoRixvREFBcUU7QUFFckUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUUvQyxxQ0FBbUM7QUFDbkMsa0RBQThDO0FBQzlDLGtEQUE4QztBQUU5Qyw0Q0FBaUQ7QUFHakQsbUNBQXFDO0FBR3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFdBQVcsQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBd0JEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwwQ0FBNEI7Z0JBQzVCLHFDQUFnQjtnQkFDaEIsd0JBQVU7Z0JBQ1Ysd0JBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDJCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTO0FBR3RCLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsRUFBRTtBQUNGLHlEQUF5RDtBQUN6RCxrREFBa0Q7QUFDbEQsdURBQXVEO0FBQ3ZELG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFDcEUsRUFBRTtBQUNGLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUNMLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XHJcbmltcG9ydCB7Q29yZU1vZHVsZX0gZnJvbSBcIi4vY29yZS9jb3JlLm1vZHVsZVwiO1xyXG5pbXBvcnQge0F1dGhNb2R1bGV9IGZyb20gXCIuL2F1dGgvYXV0aC5tb2R1bGVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0F1dGhHdWFyZFNlcnZpY2V9IGZyb20gXCIuL2NvcmUvc2VydmljZXNcIjtcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcclxuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcclxuXHJcbmlmIChwbGF0Zm9ybS5pc0lPUykge1xyXG4gICAgR01TU2VydmljZXMucHJvdmlkZUFQSUtleShcIkFJemFTeUFJeXc0UWpPaW1KQXVHTXVpTTNBcjh1LWJKSExJSGRYMFwiKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIEF1dGhNb2R1bGUsXHJcbiAgICAgICAgQ29yZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF1dGhHdWFyZFNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG5cclxuXHJcbi8vIGltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG4vL1xyXG4vLyBpbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG4vLyBpbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbi8vIGltcG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSBcIi4vdXNlci91c2VyLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50XCI7XHJcbi8vIGltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcclxuLy9cclxuLy8gQE5nTW9kdWxlKHtcclxuLy8gICAgIGJvb3RzdHJhcDogW1xyXG4vLyAgICAgICAgIEFwcENvbXBvbmVudFxyXG4vLyAgICAgXSxcclxuLy8gICAgIGltcG9ydHM6IFtcclxuLy8gICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbi8vICAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4vLyAgICAgXSxcclxuLy8gICAgIGRlY2xhcmF0aW9uczogW1xyXG4vLyAgICAgICAgIEFwcENvbXBvbmVudCxcclxuLy8gICAgICAgICBVc2VyQ29tcG9uZW50LFxyXG4vLyAgICAgICAgIFNpZ25JbkNvbXBvbmVudCxcclxuLy8gICAgICAgICBTaWduVXBDb21wb25lbnRcclxuLy8gICAgIF0sXHJcbi8vICAgICBzY2hlbWFzOiBbXHJcbi8vICAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4vLyAgICAgXVxyXG4vLyB9KVxyXG4vLyBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=