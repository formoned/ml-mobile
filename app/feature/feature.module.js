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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQUN2RCxtREFBK0M7QUFDL0MsNkNBQXNFO0FBbUJ0RTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWpCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQix3QkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRztnQkFDUixnQ0FBcUI7Z0JBQ3JCLHdCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2ZlYXR1cmUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb3JlTW9kdWxlfSBmcm9tIFwiLi4vY29yZS9jb3JlLm1vZHVsZVwiO1xuaW1wb3J0IHtBcGlHZXRTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEZlYXR1cmVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmVhdHVyZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzIDogW1xuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIEFwaUdldFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1vZHVsZSB7IH0iXX0=