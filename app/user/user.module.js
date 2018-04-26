"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var user_routing_module_1 = require("./user-routing.module");
var user_component_1 = require("./user.component");
var UserModule = /** @class */ (function () {
    function UserModule() {
        console.log("Hello World");
    }
    UserModule.prototype.ngOnInit = function () { };
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                user_routing_module_1.UserRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                user_component_1.UserComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        }),
        __metadata("design:paramtypes", [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RTtBQUM5RSxzREFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFlakQ7SUFJSTtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLDZCQUFRLEdBQWYsY0FBa0IsQ0FBQztJQVJWLFVBQVU7UUFidEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsdUNBQWlCO2dCQUNqQiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7O09BQ1csVUFBVSxDQVV0QjtJQUFELGlCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVXNlclJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi91c2VyLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tIFwiLi91c2VyLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgVXNlclJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVXNlckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgcGVvcGxlOiBBcnJheTxhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpe31cclxuXHJcbn0iXX0=