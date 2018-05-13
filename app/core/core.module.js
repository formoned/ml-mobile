"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var side_bar_component_1 = require("./side-bar/side-bar.component");
var side_bar_item_component_1 = require("./side-bar-item/side-bar-item.component");
var services_1 = require("./services");
var nativescript_angular_1 = require("nativescript-angular");
var http_client_1 = require("nativescript-angular/http-client");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                nativescript_angular_1.NativeScriptFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                side_bar_component_1.SideBarComponent,
                side_bar_item_component_1.SideBarItemComponent
            ],
            exports: [
                side_bar_component_1.SideBarComponent,
                angular_1.NativeScriptUISideDrawerModule
            ],
            providers: [
                services_1.SideBarService,
                services_1.SettingsService,
                services_1.ApiGetService,
                services_1.ApiPostService,
                services_1.ApiDeleteService,
                services_1.GeoLocationService,
                services_1.ValidationService,
                services_1.AuthGuardService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsa0VBQXdGO0FBQ3hGLG9FQUFpRTtBQUNqRSxtRkFBNkU7QUFDN0UsdUNBSW9CO0FBQ3BCLDZEQUE2RDtBQUM3RCxnRUFBOEU7QUFrQzlFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUEvQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDhDQUF1QjtnQkFDdkIsMENBQTRCO2dCQUM1Qix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YscUNBQWdCO2dCQUNoQiw4Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUNBQWdCO2dCQUNoQix3Q0FBOEI7YUFDakM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AseUJBQWM7Z0JBQ2QsMEJBQWU7Z0JBQ2Ysd0JBQWE7Z0JBQ2IseUJBQWM7Z0JBQ2QsMkJBQWdCO2dCQUNoQiw2QkFBa0I7Z0JBQ2xCLDRCQUFpQjtnQkFDakIsMkJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FHVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFNpZGVCYXJDb21wb25lbnQgfSBmcm9tIFwiLi9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lkZUJhckl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3NpZGUtYmFyLWl0ZW0vc2lkZS1iYXItaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gICAgQXBpRGVsZXRlU2VydmljZSwgQXBpR2V0U2VydmljZSwgQXBpUG9zdFNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2UsIEdlb0xvY2F0aW9uU2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLFxuICAgIFNpZGVCYXJTZXJ2aWNlLFxuICAgIFZhbGlkYXRpb25TZXJ2aWNlXG59IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNpZGVCYXJDb21wb25lbnQsXG4gICAgICAgIFNpZGVCYXJJdGVtQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFNpZGVCYXJDb21wb25lbnQsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFNpZGVCYXJTZXJ2aWNlLFxuICAgICAgICBTZXR0aW5nc1NlcnZpY2UsXG4gICAgICAgIEFwaUdldFNlcnZpY2UsXG4gICAgICAgIEFwaVBvc3RTZXJ2aWNlLFxuICAgICAgICBBcGlEZWxldGVTZXJ2aWNlLFxuICAgICAgICBHZW9Mb2NhdGlvblNlcnZpY2UsXG4gICAgICAgIFZhbGlkYXRpb25TZXJ2aWNlLFxuICAgICAgICBBdXRoR3VhcmRTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxuIl19