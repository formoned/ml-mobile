"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var posts_component_1 = require("./posts.component");
var post_new_component_1 = require("./post-new/post-new.component");
var post_edit_component_1 = require("./post-edit/post-edit.component");
var routes = [
    { path: "", component: posts_component_1.PostsComponent },
    { path: ":id", component: posts_component_1.PostsComponent },
    { path: "post/new", component: post_new_component_1.PostNewComponent },
    { path: "open/:id", component: post_edit_component_1.PostEditComponent },
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());
exports.PostsRoutingModule = PostsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELG9FQUErRDtBQUMvRCx1RUFBa0U7QUFFbEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7Q0FFckQsQ0FBQztBQU1GO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFKOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQb3N0c0NvbXBvbmVudCB9IGZyb20gXCIuL3Bvc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQb3N0TmV3Q29tcG9uZW50fSBmcm9tIFwiLi9wb3N0LW5ldy9wb3N0LW5ldy5jb21wb25lbnRcIjtcbmltcG9ydCB7UG9zdEVkaXRDb21wb25lbnR9IGZyb20gXCIuL3Bvc3QtZWRpdC9wb3N0LWVkaXQuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCI6aWRcIiwgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJwb3N0L25ld1wiLCBjb21wb25lbnQ6IFBvc3ROZXdDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwib3Blbi86aWRcIiwgY29tcG9uZW50OiBQb3N0RWRpdENvbXBvbmVudCB9LFxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNSb3V0aW5nTW9kdWxlIHsgfVxuIl19