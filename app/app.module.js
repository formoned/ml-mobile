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
var sign_in_component_1 = require("./sign-in/sign-in.component");
var user_service_1 = require("./shared/user.service");
require("nativescript-localstorage");
var user_component_1 = require("./user/user.component");
var home_component_1 = require("./home/home.component");
var sign_in_component_2 = require("./user/sign-in/sign-in.component");
var sign_up_component_1 = require("./user/sign-up/sign-up.component");
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
                sign_in_component_1.LoginComponent,
                user_component_1.UserComponent,
                home_component_1.HomeComponent,
                sign_in_component_2.SignInComponent,
                sign_up_component_1.SignUpComponent
            ],
            providers: [
                user_service_1.UserService,
                app_routing_module_1.authProviders
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsRUFBRTtBQUNGLDJEQUEyRDtBQUMzRCxrREFBa0Q7QUFDbEQsRUFBRTtBQUNGLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUNMLDZCQUE2Qjs7QUFFN0Isc0NBQWtGO0FBQ2xGLGdGQUE4RTtBQUM5RSxnRUFBZ0Y7QUFDaEYsb0RBQXFFO0FBRXJFLDJEQUF1RTtBQUN2RSxpREFBK0M7QUFDL0MsaUVBQTZEO0FBRTdELHNEQUFvRDtBQUNwRCxxQ0FBbUM7QUFFbkMsd0RBQW9EO0FBQ3BELHdEQUFvRDtBQUNwRCxzRUFBaUU7QUFDakUsc0VBQWlFO0FBNEJqRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBMUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsMENBQTRCO2dCQUM1QixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osa0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsbUNBQWU7Z0JBQ2YsbUNBQWU7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsa0NBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG4vL1xyXG4vLyBpbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbi8vIGltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuLy9cclxuLy8gQE5nTW9kdWxlKHtcclxuLy8gICAgIGJvb3RzdHJhcDogW1xyXG4vLyAgICAgICAgIEFwcENvbXBvbmVudFxyXG4vLyAgICAgXSxcclxuLy8gICAgIGltcG9ydHM6IFtcclxuLy8gICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbi8vICAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4vLyAgICAgXSxcclxuLy8gICAgIGRlY2xhcmF0aW9uczogW1xyXG4vLyAgICAgICAgIEFwcENvbXBvbmVudFxyXG4vLyAgICAgXSxcclxuLy8gICAgIHNjaGVtYXM6IFtcclxuLy8gICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbi8vICAgICBdXHJcbi8vIH0pXHJcbi8vIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgYXV0aFByb3ZpZGVycyB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiLi9hdXRoL2F1dGguZ3VhcmRcIjtcclxuaW1wb3J0IHtVc2VyQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3VzZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBVc2VyQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgU2lnbkluQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ25VcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIGF1dGhQcm92aWRlcnNcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG5cclxuIl19