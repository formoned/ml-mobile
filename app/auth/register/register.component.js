"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("@angular/router");
var services_1 = require("../../core/services");
var user_login_model_1 = require("../../core/models/user-login.model");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(page, router, authenticationService) {
        this.page = page;
        this.router = router;
        this.authenticationService = authenticationService;
        this.isSubmiting = false;
        this.page.actionBarHidden = true;
        this.user = new user_login_model_1.IUserRegister();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    RegisterComponent.prototype.focusConfirmPassword = function () {
        this.password_confirmation.nativeElement.focus();
    };
    RegisterComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password || !this.user.password_confirmation) {
            this.alert("Please provide an email address, password and password confirmation.");
            return;
        }
        else if (this.user.password != this.user.password_confirmation) {
            this.alert('Password and password confirmation not a same!');
            return;
        }
        this.register();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.isSubmiting = true;
        this.authenticationService.register(this.user)
            .subscribe(function (data) {
            if (data.success == true) {
                _this.isSubmiting = false;
                _this.alert(data.message, 'REGISTER USER');
                _this.router.navigate(['/auth/login']);
            }
            else {
                _this.isSubmiting = false;
                _this.alert('User registration failed', 'FAILED');
            }
        }, function (error) {
            _this.isSubmiting = false;
            _this.alert((JSON.parse(error.text())).message, 'ERROR');
        });
    };
    RegisterComponent.prototype.onAddPostButtonTap = function () {
        this.router.navigate(['/page/posts']);
    };
    RegisterComponent.prototype.alert = function (message, title) {
        return alert({
            title: title ? title : "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("password_confirmation"),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "password_confirmation", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "Register",
            moduleId: module.id,
            templateUrl: "./register.component.html",
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.Router,
            services_1.AuthenticationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5QywwQ0FBdUM7QUFFdkMsZ0RBQTBEO0FBQzFELHVFQUFpRTtBQVFqRTtJQVFJLDJCQUNZLElBQVUsRUFDVixNQUFjLEVBQ2QscUJBQTZDO1FBRjdDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQVJ6RCxnQkFBVyxHQUFhLEtBQUssQ0FBQztRQVUxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGdDQUFhLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGdEQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUU5RSxJQUFJLENBQUMsS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7WUFFbkYsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUU5RCxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDekMsU0FBUyxDQUFDLFVBQUMsSUFBUztZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUMsRUFDTCxVQUFDLEtBQUs7WUFDRSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxPQUFlLEVBQUUsS0FBYztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ2pDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2RXNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO3VEQUFDO0lBQ1I7UUFBbkMsZ0JBQVMsQ0FBQyx1QkFBdUIsQ0FBQztrQ0FBd0IsaUJBQVU7b0VBQUM7SUFON0QsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQVVvQixXQUFJO1lBQ0YsZUFBTTtZQUNVLGdDQUFxQjtPQVhoRCxpQkFBaUIsQ0E4RTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JlZ2lzdGVyRm9ybX0gZnJvbSBcIi4uLy4uL2NvcmUvbW9kZWxzL2F1dGgubW9kZWxcIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtJVXNlclJlZ2lzdGVyfSBmcm9tIFwiLi4vLi4vY29yZS9tb2RlbHMvdXNlci1sb2dpbi5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSZWdpc3RlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdXNlcjogSVVzZXJSZWdpc3RlcjtcbiAgICBpc1N1Ym1pdGluZyA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlIDogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgSVVzZXJSZWdpc3RlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmRfY29uZmlybWF0aW9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xuXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYW4gZW1haWwgYWRkcmVzcywgcGFzc3dvcmQgYW5kIHBhc3N3b3JkIGNvbmZpcm1hdGlvbi5cIik7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIucGFzc3dvcmRfY29uZmlybWF0aW9uKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ1Bhc3N3b3JkIGFuZCBwYXNzd29yZCBjb25maXJtYXRpb24gbm90IGEgc2FtZSEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcblxuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChkYXRhLm1lc3NhZ2UsICdSRUdJU1RFUiBVU0VSJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoJ1VzZXIgcmVnaXN0cmF0aW9uIGZhaWxlZCcsICdGQUlMRUQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydCgoSlNPTi5wYXJzZShlcnJvci50ZXh0KCkpKS5tZXNzYWdlLCAnRVJST1InKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQWRkUG9zdEJ1dHRvblRhcCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cyddKTtcbiAgICB9XG5cbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUgPyB0aXRsZSA6IFwiQVBQIE5BTUVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==