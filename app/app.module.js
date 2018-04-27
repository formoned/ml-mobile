"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var user_service_1 = require("./shared/user.service");
require("nativescript-localstorage");
var user_component_1 = require("./user/user.component");
var sign_in_component_1 = require("./user/sign-in/sign-in.component");
var sign_up_component_1 = require("./user/sign-up/sign-up.component");
var auth_guard_1 = require("./auth/auth.guard");
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
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent
            ],
            providers: [
                user_service_1.UserService, auth_guard_1.AuthGuard
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsRUFBRTtBQUNGLDJEQUEyRDtBQUMzRCxrREFBa0Q7QUFDbEQsRUFBRTtBQUNGLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUNMLDZCQUE2Qjs7QUFFN0Isc0NBQWtGO0FBQ2xGLGdGQUE4RTtBQUM5RSxnRUFBZ0Y7QUFDaEYsb0RBQXFFO0FBRXJFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0Msc0RBQW9EO0FBQ3BELHFDQUFtQztBQUNuQyx3REFBb0Q7QUFDcEQsc0VBQWlFO0FBQ2pFLHNFQUFpRTtBQUNqRSxnREFBNEM7QUF5QjVDO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF2QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwwQ0FBNEI7Z0JBQzVCLHFDQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixtQ0FBZTtnQkFDZixtQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVyxFQUFFLHNCQUFTO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVM7QUFHdEIscUZBQXFGO0FBQ3JGLGlGQUFpRjtBQUNqRixFQUFFO0FBQ0YseURBQXlEO0FBQ3pELGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFLG9FQUFvRTtBQUNwRSxFQUFFO0FBQ0YsY0FBYztBQUNkLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsU0FBUztBQUNULGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCxpQkFBaUI7QUFDakIsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUixLQUFLO0FBQ0wsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbi8vXHJcbi8vIGltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuLy8gaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG4vL1xyXG4vLyBATmdNb2R1bGUoe1xyXG4vLyAgICAgYm9vdHN0cmFwOiBbXHJcbi8vICAgICAgICAgQXBwQ29tcG9uZW50XHJcbi8vICAgICBdLFxyXG4vLyAgICAgaW1wb3J0czogW1xyXG4vLyAgICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuLy8gICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbi8vICAgICBdLFxyXG4vLyAgICAgZGVjbGFyYXRpb25zOiBbXHJcbi8vICAgICAgICAgQXBwQ29tcG9uZW50XHJcbi8vICAgICBdLFxyXG4vLyAgICAgc2NoZW1hczogW1xyXG4vLyAgICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuLy8gICAgIF1cclxuLy8gfSlcclxuLy8gZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgJ25hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2UnO1xyXG5pbXBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gXCIuL3VzZXIvdXNlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL3VzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiLi9hdXRoL2F1dGguZ3VhcmRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBVc2VyQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ25JbkNvbXBvbmVudCxcclxuICAgICAgICBTaWduVXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBVc2VyU2VydmljZSwgQXV0aEd1YXJkXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuLy9cclxuLy8gaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuLy8gaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gXCIuL3VzZXIvdXNlci5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL3VzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50XCI7XHJcbi8vXHJcbi8vIEBOZ01vZHVsZSh7XHJcbi8vICAgICBib290c3RyYXA6IFtcclxuLy8gICAgICAgICBBcHBDb21wb25lbnRcclxuLy8gICAgIF0sXHJcbi8vICAgICBpbXBvcnRzOiBbXHJcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4vLyAgICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuLy8gICAgIF0sXHJcbi8vICAgICBkZWNsYXJhdGlvbnM6IFtcclxuLy8gICAgICAgICBBcHBDb21wb25lbnQsXHJcbi8vICAgICAgICAgVXNlckNvbXBvbmVudCxcclxuLy8gICAgICAgICBTaWduSW5Db21wb25lbnQsXHJcbi8vICAgICAgICAgU2lnblVwQ29tcG9uZW50XHJcbi8vICAgICBdLFxyXG4vLyAgICAgc2NoZW1hczogW1xyXG4vLyAgICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuLy8gICAgIF1cclxuLy8gfSlcclxuLy8gZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19