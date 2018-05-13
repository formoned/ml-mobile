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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELG9FQUErRDtBQUMvRCx1RUFBa0U7QUFFbEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7Q0FFckQsQ0FBQztBQU1GO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFKOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFBvc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9zdHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UG9zdE5ld0NvbXBvbmVudH0gZnJvbSBcIi4vcG9zdC1uZXcvcG9zdC1uZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UG9zdEVkaXRDb21wb25lbnR9IGZyb20gXCIuL3Bvc3QtZWRpdC9wb3N0LWVkaXQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIjppZFwiLCBjb21wb25lbnQ6IFBvc3RzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicG9zdC9uZXdcIiwgY29tcG9uZW50OiBQb3N0TmV3Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3Blbi86aWRcIiwgY29tcG9uZW50OiBQb3N0RWRpdENvbXBvbmVudCB9LFxyXG5cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RzUm91dGluZ01vZHVsZSB7IH1cclxuIl19