"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var feature_routing_module_1 = require("./feature-routing.module");
var feature_component_1 = require("./feature.component");
var core_module_1 = require("../core/core.module");
var services_1 = require("../core/services");
var FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    FeatureModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                feature_routing_module_1.FeatureRoutingModule,
                core_module_1.CoreModule
            ],
            declarations: [
                feature_component_1.FeatureComponent
            ],
            providers: [
                services_1.AuthenticationService,
                services_1.ApiGetService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FeatureModule);
    return FeatureModule;
}());
exports.FeatureModule = FeatureModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQUN2RCxtREFBK0M7QUFDL0MsNkNBQXNFO0FBbUJ0RTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWpCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQix3QkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRztnQkFDUixnQ0FBcUI7Z0JBQ3JCLHdCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2ZlYXR1cmUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29yZU1vZHVsZX0gZnJvbSBcIi4uL2NvcmUvY29yZS5tb2R1bGVcIjtcclxuaW1wb3J0IHtBcGlHZXRTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGZWF0dXJlUm91dGluZ01vZHVsZSxcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRmVhdHVyZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVycyA6IFtcclxuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgQXBpR2V0U2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTW9kdWxlIHsgfSJdfQ==