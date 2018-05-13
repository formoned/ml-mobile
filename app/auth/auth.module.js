"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var auth_routing_module_1 = require("./auth-routing.module");
var auth_component_1 = require("./auth.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var core_module_1 = require("../core/core.module");
var nativescript_angular_1 = require("nativescript-angular");
var services_1 = require("../core/services");
var http_client_1 = require("nativescript-angular/http-client");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                nativescript_angular_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
                auth_routing_module_1.AuthRoutingModule,
                core_module_1.CoreModule
            ],
            declarations: [
                auth_component_1.AuthComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent
            ],
            providers: [
                services_1.AuthenticationService, services_1.AuthGuardService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCxvRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELG1EQUErQztBQUMvQyw2REFBcUY7QUFDckYsNkNBQXlFO0FBQ3pFLGdFQUE4RTtBQXFCOUU7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQW5CdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsOENBQXVCO2dCQUN2Qiw2Q0FBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsdUNBQWlCO2dCQUNqQix3QkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhLEVBQUUsZ0NBQWMsRUFBRSxzQ0FBaUI7YUFDbkQ7WUFDRCxTQUFTLEVBQUc7Z0JBQ1IsZ0NBQXFCLEVBQUUsMkJBQWdCO2FBQzFDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEF1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXV0aC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb3JlTW9kdWxlfSBmcm9tIFwiLi4vY29yZS9jb3JlLm1vZHVsZVwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2V9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQXV0aFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgQ29yZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEF1dGhDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVycyA6IFtcclxuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7IH0iXX0=