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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThFO0FBQzlFLDZEQUE0RjtBQUM1RixrRUFBOEU7QUFDOUUsMENBQXVEO0FBQ3ZELGdEQUFrRDtBQTZCbEQ7SUFRSSx3QkFDWSxhQUE2QixFQUM3QixNQUFlLEVBQ2YsS0FBc0I7UUFGdEIsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQU5sQyxVQUFLLEdBQVksRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO0lBUWxDLENBQUM7SUFDRyxpQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3BDLENBQUM7WUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBSSxnREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFBQSxpQkEyQkM7UUExQkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUMsUUFBYztZQUNsQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNaLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUNyQixXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQ2pDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDekIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUN6QixPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDN0IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO29CQUN2QyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQy9CLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQkFDbEMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLHNDQUFzQztRQUMxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBdkVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzJEQUFDO0lBRnBELGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBVThCLHdCQUFhO1lBQ3BCLGVBQU07WUFDUCx1QkFBYztPQVh6QixjQUFjLENBMEUxQjtJQUFELHFCQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBcGlHZXRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlc1wiO1xuLy8gaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG4vLyBpbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmludGVyZmFjZSBtYXJrZXIge1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIHBvc3Qge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xuICAgIG1hcF9sYXQ6IG51bWJlcjtcbiAgICBtYXBfbG5nOiBudW1iZXI7XG4gICAgY3JlYXRlZF9ieTogbnVtYmVyO1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgICB1cGRhdGVkX2F0OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1wb3N0c1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0cy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIHBvc3RzIDogcG9zdFtdID0gW107XG4gICAgaXNTdWJtaXRpbmcgOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWQ7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBpR2V0U2VydmljZSA6IEFwaUdldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlIDogQWN0aXZhdGVkUm91dGVcbikge1xuXG59XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGFnZS9wb3N0cy9vcGVuL1wiK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMubG9hZFBvc3RzKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIG9uU2lkZUJhckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgbG9hZFBvc3RzKCkge1xuICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcGlHZXRTZXJ2aWNlLmdldFVzZXJQb3N0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdHMgPSByZXNwb25zZS5wb3N0cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHBvc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBOdW1iZXIocG9zdHNbdl0uaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwb3N0c1t2XS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcG9zdHNbdl0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBOdW1iZXIocG9zdHNbdl0ubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IE51bWJlcihwb3N0c1t2XS5sbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcF9sYXQ6IE51bWJlcihwb3N0c1t2XS5sYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcF9sbmc6IE51bWJlcihwb3N0c1t2XS5sbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYnk6IE51bWJlcihwb3N0c1t2XS5jcmVhdGVkX2J5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBwb3N0c1t2XS5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHBvc3RzW3ZdLnVwZGF0ZWRfYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wb3N0cyA9IHJlc3BvbnNlLmpzb24oKS5wb3N0cztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cy9vcGVuLycgKyBldmVudC5pZF0pO1xuICAgIH1cblxuICAgIG9uUmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5sb2FkUG9zdHMoKTtcbiAgICB9XG5cbiAgICBvbkFkZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cy9wb3N0L25ldyddKTtcbiAgICB9XG59XG4iXX0=