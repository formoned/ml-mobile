"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var core_module_1 = require("../../core/core.module");
var settings_routing_module_1 = require("./settings-routing.module");
var settings_component_1 = require("./settings.component");
var general_component_1 = require("./general/general.component");
var profile_component_1 = require("./profile/profile.component");
var nativescript_angular_1 = require("nativescript-angular");
var services_1 = require("../../core/services");
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                settings_routing_module_1.SettingsRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule,
                core_module_1.CoreModule
            ],
            declarations: [
                settings_component_1.SettingsComponent,
                general_component_1.GeneralComponent,
                profile_component_1.ProfileComponent
            ],
            providers: [
                services_1.AuthenticationService,
                services_1.ApiGetService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxzREFBb0Q7QUFDcEQscUVBQWtFO0FBQ2xFLDJEQUF5RDtBQUN6RCxpRUFBNkQ7QUFDN0QsaUVBQTZEO0FBQzdELDZEQUE2RDtBQUM3RCxnREFBeUU7QUFzQnpFO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBcEIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLDhDQUF1QjtnQkFDdkIsd0JBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLG9DQUFnQjtnQkFDaEIsb0NBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFHO2dCQUNSLGdDQUFxQjtnQkFDckIsd0JBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vY29yZS9jb3JlLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gXCIuL3NldHRpbmdzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dlbmVyYWxDb21wb25lbnR9IGZyb20gXCIuL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0FwaUdldFNlcnZpY2UsIEF1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFNldHRpbmdzUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICAgICAgR2VuZXJhbENvbXBvbmVudCxcclxuICAgICAgICBQcm9maWxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzIDogW1xyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBBcGlHZXRTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzTW9kdWxlIHsgfVxyXG4iXX0=