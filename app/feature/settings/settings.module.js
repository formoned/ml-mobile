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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxzREFBb0Q7QUFDcEQscUVBQWtFO0FBQ2xFLDJEQUF5RDtBQUN6RCxpRUFBNkQ7QUFDN0QsaUVBQTZEO0FBQzdELDZEQUE2RDtBQUM3RCxnREFBeUU7QUFzQnpFO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBcEIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLDhDQUF1QjtnQkFDdkIsd0JBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLG9DQUFnQjtnQkFDaEIsb0NBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFHO2dCQUNSLGdDQUFxQjtnQkFDckIsd0JBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vY29yZS9jb3JlLm1vZHVsZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc2V0dGluZ3Mtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2V0dGluZ3MuY29tcG9uZW50XCI7XG5pbXBvcnQge0dlbmVyYWxDb21wb25lbnR9IGZyb20gXCIuL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0FwaUdldFNlcnZpY2UsIEF1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2V0dGluZ3NSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29yZU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBHZW5lcmFsQ29tcG9uZW50LFxuICAgICAgICBQcm9maWxlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnMgOiBbXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgQXBpR2V0U2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc01vZHVsZSB7IH1cbiJdfQ==