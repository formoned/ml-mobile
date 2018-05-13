"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var core_module_1 = require("../../core/core.module");
var posts_routing_module_1 = require("./posts-routing.module");
var posts_component_1 = require("./posts.component");
var post_new_component_1 = require("./post-new/post-new.component");
var post_edit_component_1 = require("./post-edit/post-edit.component");
var nativescript_angular_1 = require("nativescript-angular");
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                posts_routing_module_1.PostsRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule,
                core_module_1.CoreModule
            ],
            declarations: [
                posts_component_1.PostsComponent,
                post_new_component_1.PostNewComponent,
                post_edit_component_1.PostEditComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxzREFBb0Q7QUFDcEQsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCxvRUFBK0Q7QUFDL0QsdUVBQWtFO0FBQ2xFLDZEQUE2RDtBQWtCN0Q7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWhCdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIseUNBQWtCO2dCQUNsQiw4Q0FBdUI7Z0JBQ3ZCLHdCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QscUNBQWdCO2dCQUNoQix1Q0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvcmUubW9kdWxlXCI7XG5pbXBvcnQgeyBQb3N0c1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9wb3N0cy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgUG9zdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wb3N0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7UG9zdE5ld0NvbXBvbmVudH0gZnJvbSBcIi4vcG9zdC1uZXcvcG9zdC1uZXcuY29tcG9uZW50XCI7XG5pbXBvcnQge1Bvc3RFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi9wb3N0LWVkaXQvcG9zdC1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFBvc3RzUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIENvcmVNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQb3N0c0NvbXBvbmVudCxcbiAgICAgICAgUG9zdE5ld0NvbXBvbmVudCxcbiAgICAgICAgUG9zdEVkaXRDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNNb2R1bGUgeyB9XG4iXX0=