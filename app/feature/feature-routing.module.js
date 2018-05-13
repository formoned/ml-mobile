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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlYXR1cmUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLHlEQUF1RDtBQUV2RCxJQUFNLE1BQU0sR0FBVztJQUNuQiwyQ0FBMkM7SUFDM0MsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0I7UUFDbkMsUUFBUSxFQUFHO1lBQ1A7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osWUFBWSxFQUFFLHVDQUF1QzthQUN4RDtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLFlBQVksRUFBRSwwQ0FBMEM7YUFDM0Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsWUFBWSxFQUFFLG1EQUFtRDthQUNwRTtTQUNKO0tBQ0o7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLG9CQUFvQjtRQUpoQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICAvLyB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogRmVhdHVyZUNvbXBvbmVudH1cbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogRmVhdHVyZUNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW4gOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ2hvbWUnLFxuICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCIuL2ZlYXR1cmUvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ3Bvc3RzJyxcbiAgICAgICAgICAgICAgICBsb2FkQ2hpbGRyZW46IFwiLi9mZWF0dXJlL3Bvc3RzL3Bvc3RzLm1vZHVsZSNQb3N0c01vZHVsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdzZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgbG9hZENoaWxkcmVuOiBcIi4vZmVhdHVyZS9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVSb3V0aW5nTW9kdWxlIHsgfVxuIl19