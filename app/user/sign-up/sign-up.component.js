"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var user_service_1 = require("../../shared/user.service");
var user_model_1 = require("../../shared/user.model");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        this.page.actionBarHidden = true;
        this.user = new user_model_1.User();
    }
    SignUpComponent.prototype.submit = function () {
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
    SignUpComponent.prototype.register = function () {
        var _this = this;
        this.userService
            .registerUser(this.user)
            .subscribe(function (data) {
            if (data.success == true) {
                // this.alert('User registration successful');
                _this.router.navigate(['login']);
            }
            else {
                _this.alert('User registration failed');
            }
        });
    };
    SignUpComponent.prototype.toggleForm = function () {
        this.router.navigate(['/login']);
    };
    SignUpComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], SignUpComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("password_confirmation"),
        __metadata("design:type", core_1.ElementRef)
    ], SignUpComponent.prototype, "password_confirmation", void 0);
    SignUpComponent = __decorate([
        core_1.Component({
            selector: "app-signup",
            moduleId: module.id,
            templateUrl: "./sign-up.component.html",
            styleUrls: ['./sign-up.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFDekMsdURBQTREO0FBQzVELGlEQUFnRDtBQUNoRCwwREFBd0Q7QUFDeEQsc0RBQTBEO0FBUTFEO0lBT0kseUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBRTlFLElBQUksQ0FBQyxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQztZQUVuRixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFaRyxJQUFJLENBQUMsV0FBVzthQUNYLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFDLElBQVM7WUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2Qiw4Q0FBOEM7Z0JBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwrQkFBSyxHQUFMLFVBQU0sT0FBZTtRQUNqQixNQUFNLENBQUMsZUFBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5Ec0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7cURBQUM7SUFDUjtRQUFuQyxnQkFBUyxDQUFDLHVCQUF1QixDQUFDO2tDQUF3QixpQkFBVTtrRUFBQztJQUw3RCxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQVE0QixXQUFJLEVBQXVCLDBCQUFXLEVBQWtCLGVBQU07T0FQL0UsZUFBZSxDQTBEM0I7SUFBRCxzQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9naW5Gb3JtLCBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1zaWdudXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ24tdXAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3NpZ24tdXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnblVwQ29tcG9uZW50IHtcclxuXHJcbiAgICB1c2VyOiBVc2VyO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIikgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGFuIGVtYWlsIGFkZHJlc3MsIHBhc3N3b3JkIGFuZCBwYXNzd29yZCBjb25maXJtYXRpb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbGVydCgnUGFzc3dvcmQgYW5kIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBub3QgYSBzYW1lIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5yZWdpc3RlclVzZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWxlcnQoJ1VzZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydCgnVXNlciByZWdpc3RyYXRpb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==