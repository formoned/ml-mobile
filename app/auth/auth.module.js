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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCxvRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELG1EQUErQztBQUMvQyw2REFBcUY7QUFDckYsNkNBQXlFO0FBQ3pFLGdFQUE4RTtBQXFCOUU7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQW5CdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsOENBQXVCO2dCQUN2Qiw2Q0FBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsdUNBQWlCO2dCQUNqQix3QkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhLEVBQUUsZ0NBQWMsRUFBRSxzQ0FBaUI7YUFDbkQ7WUFDRCxTQUFTLEVBQUc7Z0JBQ1IsZ0NBQXFCLEVBQUUsMkJBQWdCO2FBQzFDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEF1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXV0aC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGguY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29yZU1vZHVsZX0gZnJvbSBcIi4uL2NvcmUvY29yZS5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2V9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgQXV0aFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIENvcmVNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBdXRoQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVycyA6IFtcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLCBBdXRoR3VhcmRTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUgeyB9Il19