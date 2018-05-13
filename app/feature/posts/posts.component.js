"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("@angular/router");
var services_1 = require("../../core/services");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(apiGetService, router, route) {
        this.apiGetService = apiGetService;
        this.router = router;
        this.route = route;
        this.posts = [];
        this.isSubmiting = false;
    }
    PostsComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['id']) {
            this.router.navigate(["/page/posts/open/" + this.route.snapshot.params['id']]);
        }
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.loadPosts();
    };
    Object.defineProperty(PostsComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    PostsComponent.prototype.onSideBarButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    PostsComponent.prototype.loadPosts = function () {
        var _this = this;
        this.isSubmiting = true;
        this.apiGetService.getUserPosts()
            .subscribe(function (response) {
            var posts = response.posts;
            _this.posts = [];
            for (var v in posts) {
                _this.posts.push({
                    id: Number(posts[v].id),
                    title: posts[v].title,
                    description: posts[v].description,
                    lat: Number(posts[v].lat),
                    lng: Number(posts[v].lng),
                    map_lat: Number(posts[v].lat),
                    map_lng: Number(posts[v].lng),
                    created_by: Number(posts[v].created_by),
                    created_at: posts[v].created_at,
                    updated_at: posts[v].updated_at
                });
            }
            _this.isSubmiting = false;
            // this.posts = response.json().posts;
        }, function (error) {
            alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    PostsComponent.prototype.onItemTap = function (event) {
        console.log(event);
        this.router.navigate(['/page/posts/open/' + event.id]);
    };
    PostsComponent.prototype.onRefresh = function () {
        this.loadPosts();
    };
    PostsComponent.prototype.onAdd = function () {
        this.router.navigate(['/page/posts/post/new']);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], PostsComponent.prototype, "drawerComponent", void 0);
    PostsComponent = __decorate([
        core_1.Component({
            selector: "app-posts",
            moduleId: module.id,
            templateUrl: "./posts.component.html"
        }),
        __metadata("design:paramtypes", [services_1.ApiGetService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThFO0FBQzlFLDZEQUE0RjtBQUM1RixrRUFBOEU7QUFDOUUsMENBQXVEO0FBQ3ZELGdEQUFrRDtBQTZCbEQ7SUFRSSx3QkFDWSxhQUE2QixFQUM3QixNQUFlLEVBQ2YsS0FBc0I7UUFGdEIsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQU5sQyxVQUFLLEdBQVksRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO0lBUWxDLENBQUM7SUFDRyxpQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3BDLENBQUM7WUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBSSxnREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFBQSxpQkEyQkM7UUExQkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUMsUUFBYztZQUNsQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNaLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUNyQixXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQ2pDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDekIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUN6QixPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDN0IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO29CQUN2QyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQy9CLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQkFDbEMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLHNDQUFzQztRQUMxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBdkVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzJEQUFDO0lBRnBELGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBVThCLHdCQUFhO1lBQ3BCLGVBQU07WUFDUCx1QkFBYztPQVh6QixjQUFjLENBMEUxQjtJQUFELHFCQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0RyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7UmFkU2lkZURyYXdlckNvbXBvbmVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FwaUdldFNlcnZpY2V9IGZyb20gXCIuLi8uLi9jb3JlL3NlcnZpY2VzXCI7XHJcbi8vIGltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG4vLyBpbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcblxyXG5pbnRlcmZhY2UgbWFya2VyIHtcclxuICAgIGxhdDogbnVtYmVyO1xyXG4gICAgbG5nOiBudW1iZXI7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGRyYWdnYWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIHBvc3Qge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgbGF0OiBudW1iZXI7XHJcbiAgICBsbmc6IG51bWJlcjtcclxuICAgIG1hcF9sYXQ6IG51bWJlcjtcclxuICAgIG1hcF9sbmc6IG51bWJlcjtcclxuICAgIGNyZWF0ZWRfYnk6IG51bWJlcjtcclxuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICAgIHVwZGF0ZWRfYXQ6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtcG9zdHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3RzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBwb3N0cyA6IHBvc3RbXSA9IFtdO1xyXG4gICAgaXNTdWJtaXRpbmcgOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpZDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXBpR2V0U2VydmljZSA6IEFwaUdldFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZSA6IEFjdGl2YXRlZFJvdXRlXHJcbikge1xyXG5cclxufVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ10pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGFnZS9wb3N0cy9vcGVuL1wiK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUG9zdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBvblNpZGVCYXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBvc3RzKCkge1xyXG4gICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBpR2V0U2VydmljZS5nZXRVc2VyUG9zdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3N0cyA9IHJlc3BvbnNlLnBvc3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHBvc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogTnVtYmVyKHBvc3RzW3ZdLmlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwb3N0c1t2XS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwb3N0c1t2XS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogTnVtYmVyKHBvc3RzW3ZdLmxhdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IE51bWJlcihwb3N0c1t2XS5sbmcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwX2xhdDogTnVtYmVyKHBvc3RzW3ZdLmxhdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBfbG5nOiBOdW1iZXIocG9zdHNbdl0ubG5nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6IE51bWJlcihwb3N0c1t2XS5jcmVhdGVkX2J5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHBvc3RzW3ZdLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBwb3N0c1t2XS51cGRhdGVkX2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wb3N0cyA9IHJlc3BvbnNlLmpzb24oKS5wb3N0cztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYWdlL3Bvc3RzL29wZW4vJyArIGV2ZW50LmlkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFBvc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cy9wb3N0L25ldyddKTtcclxuICAgIH1cclxufVxyXG4iXX0=