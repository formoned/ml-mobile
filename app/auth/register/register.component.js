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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLGlEQUE4QztBQUM5QywwQ0FBdUM7QUFFdkMsZ0RBQTBEO0FBQzFELHVFQUFpRTtBQVFqRTtJQVFJLDJCQUNZLElBQVUsRUFDVixNQUFjLEVBQ2QscUJBQTZDO1FBRjdDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQVJ6RCxnQkFBVyxHQUFhLEtBQUssQ0FBQztRQVUxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGdDQUFhLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGdEQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUU5RSxJQUFJLENBQUMsS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7WUFFbkYsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUU5RCxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDekMsU0FBUyxDQUFDLFVBQUMsSUFBUztZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUMsRUFDTCxVQUFDLEtBQUs7WUFDRSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxPQUFlLEVBQUUsS0FBYztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ2pDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2RXNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO3VEQUFDO0lBQ1I7UUFBbkMsZ0JBQVMsQ0FBQyx1QkFBdUIsQ0FBQztrQ0FBd0IsaUJBQVU7b0VBQUM7SUFON0QsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQVVvQixXQUFJO1lBQ0YsZUFBTTtZQUNVLGdDQUFxQjtPQVhoRCxpQkFBaUIsQ0E4RTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1JlZ2lzdGVyRm9ybX0gZnJvbSBcIi4uLy4uL2NvcmUvbW9kZWxzL2F1dGgubW9kZWxcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9jb3JlL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7SVVzZXJSZWdpc3Rlcn0gZnJvbSBcIi4uLy4uL2NvcmUvbW9kZWxzL3VzZXItbG9naW4ubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUmVnaXN0ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdXNlcjogSVVzZXJSZWdpc3RlcjtcclxuICAgIGlzU3VibWl0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIikgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlIDogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgSVVzZXJSZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRfY29uZmlybWF0aW9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQgfHwgIXRoaXMudXNlci5wYXNzd29yZF9jb25maXJtYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBhbiBlbWFpbCBhZGRyZXNzLCBwYXNzd29yZCBhbmQgcGFzc3dvcmQgY29uZmlybWF0aW9uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy51c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5wYXNzd29yZF9jb25maXJtYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ1Bhc3N3b3JkIGFuZCBwYXNzd29yZCBjb25maXJtYXRpb24gbm90IGEgc2FtZSEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcigpIHtcclxuICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoZGF0YS5tZXNzYWdlLCAnUkVHSVNURVIgVVNFUicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydCgnVXNlciByZWdpc3RyYXRpb24gZmFpbGVkJywgJ0ZBSUxFRCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydCgoSlNPTi5wYXJzZShlcnJvci50ZXh0KCkpKS5tZXNzYWdlLCAnRVJST1InKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRQb3N0QnV0dG9uVGFwKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhZ2UvcG9zdHMnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSA/IHRpdGxlIDogXCJBUFAgTkFNRVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=