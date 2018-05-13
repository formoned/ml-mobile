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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsa0VBQXdGO0FBQ3hGLG9FQUFpRTtBQUNqRSxtRkFBNkU7QUFDN0UsdUNBSW9CO0FBQ3BCLDZEQUE2RDtBQUM3RCxnRUFBOEU7QUFrQzlFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUEvQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDhDQUF1QjtnQkFDdkIsMENBQTRCO2dCQUM1Qix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YscUNBQWdCO2dCQUNoQiw4Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUNBQWdCO2dCQUNoQix3Q0FBOEI7YUFDakM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AseUJBQWM7Z0JBQ2QsMEJBQWU7Z0JBQ2Ysd0JBQWE7Z0JBQ2IseUJBQWM7Z0JBQ2QsMkJBQWdCO2dCQUNoQiw2QkFBa0I7Z0JBQ2xCLDRCQUFpQjtnQkFDakIsMkJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FHVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFNpZGVCYXJDb21wb25lbnQgfSBmcm9tIFwiLi9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWRlQmFySXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZS1iYXItaXRlbS9zaWRlLWJhci1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQXBpRGVsZXRlU2VydmljZSwgQXBpR2V0U2VydmljZSwgQXBpUG9zdFNlcnZpY2UsIEF1dGhHdWFyZFNlcnZpY2UsIEdlb0xvY2F0aW9uU2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgU2lkZUJhclNlcnZpY2UsXHJcbiAgICBWYWxpZGF0aW9uU2VydmljZVxyXG59IGZyb20gXCIuL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2lkZUJhckNvbXBvbmVudCxcclxuICAgICAgICBTaWRlQmFySXRlbUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBTaWRlQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFNpZGVCYXJTZXJ2aWNlLFxyXG4gICAgICAgIFNldHRpbmdzU2VydmljZSxcclxuICAgICAgICBBcGlHZXRTZXJ2aWNlLFxyXG4gICAgICAgIEFwaVBvc3RTZXJ2aWNlLFxyXG4gICAgICAgIEFwaURlbGV0ZVNlcnZpY2UsXHJcbiAgICAgICAgR2VvTG9jYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIFZhbGlkYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEF1dGhHdWFyZFNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxyXG4iXX0=