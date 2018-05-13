"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var feature_component_1 = require("./feature.component");
var routes = [
    // { path: "", component: FeatureComponent}
    { path: "", component: feature_component_1.FeatureComponent,
        children: [
            {
                path: 'home',
                loadChildren: "./feature/home/home.module#HomeModule"
            },
            {
                path: 'posts',
                loadChildren: "./feature/posts/posts.module#PostsModule"
            },
            {
                path: 'settings',
                loadChildren: "./feature/settings/settings.module#SettingsModule"
            }
        ]
    }
];
var FeatureRoutingModule = /** @class */ (function () {
    function FeatureRoutingModule() {
    }
    FeatureRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], FeatureRoutingModule);
    return FeatureRoutingModule;
}());
exports.FeatureRoutingModule = FeatureRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlYXR1cmUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLHlEQUF1RDtBQUV2RCxJQUFNLE1BQU0sR0FBVztJQUNuQiwyQ0FBMkM7SUFDM0MsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0I7UUFDbkMsUUFBUSxFQUFHO1lBQ1A7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osWUFBWSxFQUFFLHVDQUF1QzthQUN4RDtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLFlBQVksRUFBRSwwQ0FBMEM7YUFDM0Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsWUFBWSxFQUFFLG1EQUFtRDthQUNwRTtTQUNKO0tBQ0o7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLG9CQUFvQjtRQUpoQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmUuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIC8vIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBGZWF0dXJlQ29tcG9uZW50fVxyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEZlYXR1cmVDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW4gOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICdob21lJyxcclxuICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCIuL2ZlYXR1cmUvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3Bvc3RzJyxcclxuICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCIuL2ZlYXR1cmUvcG9zdHMvcG9zdHMubW9kdWxlI1Bvc3RzTW9kdWxlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCIuL2ZlYXR1cmUvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlI1NldHRpbmdzTW9kdWxlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=