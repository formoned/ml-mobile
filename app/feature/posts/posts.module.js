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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxzREFBb0Q7QUFDcEQsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCxvRUFBK0Q7QUFDL0QsdUVBQWtFO0FBQ2xFLDZEQUE2RDtBQWtCN0Q7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWhCdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIseUNBQWtCO2dCQUNsQiw4Q0FBdUI7Z0JBQ3ZCLHdCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QscUNBQWdCO2dCQUNoQix1Q0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvcmUubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBvc3RzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3Bvc3RzLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBvc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9zdHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UG9zdE5ld0NvbXBvbmVudH0gZnJvbSBcIi4vcG9zdC1uZXcvcG9zdC1uZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UG9zdEVkaXRDb21wb25lbnR9IGZyb20gXCIuL3Bvc3QtZWRpdC9wb3N0LWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUG9zdHNSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIENvcmVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQb3N0c0NvbXBvbmVudCxcclxuICAgICAgICBQb3N0TmV3Q29tcG9uZW50LFxyXG4gICAgICAgIFBvc3RFZGl0Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RzTW9kdWxlIHsgfVxyXG4iXX0=