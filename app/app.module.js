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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUNoRixvREFBcUU7QUFFckUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUUvQyxxQ0FBbUM7QUFDbkMsa0RBQThDO0FBQzlDLGtEQUE4QztBQUU5Qyw0Q0FBaUQ7QUFHakQsbUNBQXFDO0FBR3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFdBQVcsQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBd0JEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwwQ0FBNEI7Z0JBQzVCLHFDQUFnQjtnQkFDaEIsd0JBQVU7Z0JBQ1Ysd0JBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDJCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTO0FBR3RCLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsRUFBRTtBQUNGLHlEQUF5RDtBQUN6RCxrREFBa0Q7QUFDbEQsdURBQXVEO0FBQ3ZELG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFDcEUsRUFBRTtBQUNGLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUNMLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0ICduYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlJztcbmltcG9ydCB7Q29yZU1vZHVsZX0gZnJvbSBcIi4vY29yZS9jb3JlLm1vZHVsZVwiO1xuaW1wb3J0IHtBdXRoTW9kdWxlfSBmcm9tIFwiLi9hdXRoL2F1dGgubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0F1dGhHdWFyZFNlcnZpY2V9IGZyb20gXCIuL2NvcmUvc2VydmljZXNcIjtcblxuXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmRlY2xhcmUgdmFyIEdNU1NlcnZpY2VzOiBhbnk7XG5cbmlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgIEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lBSXl3NFFqT2ltSkF1R011aU0zQXI4dS1iSkhMSUhkWDBcIik7XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBBdXRoTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG5cblxuLy8gaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuLy9cbi8vIGltcG9ydCB7QXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gXCIuL3VzZXIvdXNlci5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7U2lnbkluQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcbi8vXG4vLyBATmdNb2R1bGUoe1xuLy8gICAgIGJvb3RzdHJhcDogW1xuLy8gICAgICAgICBBcHBDb21wb25lbnRcbi8vICAgICBdLFxuLy8gICAgIGltcG9ydHM6IFtcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuLy8gICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4vLyAgICAgXSxcbi8vICAgICBkZWNsYXJhdGlvbnM6IFtcbi8vICAgICAgICAgQXBwQ29tcG9uZW50LFxuLy8gICAgICAgICBVc2VyQ29tcG9uZW50LFxuLy8gICAgICAgICBTaWduSW5Db21wb25lbnQsXG4vLyAgICAgICAgIFNpZ25VcENvbXBvbmVudFxuLy8gICAgIF0sXG4vLyAgICAgc2NoZW1hczogW1xuLy8gICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4vLyAgICAgXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=