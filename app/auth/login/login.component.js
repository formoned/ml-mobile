"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../../core/models");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var services_1 = require("../../core/services");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, page, authenticationService) {
        this.router = router;
        this.page = page;
        this.authenticationService = authenticationService;
        this.isSubmiting = false;
        this.message = "";
        this.user = new models_1.IUserLogin();
    }
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.login();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // this.router.navigate(['/home']);
        this.isSubmiting = true;
        this.authenticationService.login(this.user)
            .subscribe(function (response) {
            _this.isSubmiting = false;
            _this.router.navigate(['/page/home']);
        }, function (error) {
            dialogs_1.alert("Unfortunately we could not find your account.");
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.alert(this.user.password);
        // this.alert(localStorage.getItem('access_token'));
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.editForm = function () {
    };
    LoginComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            page_1.Page,
            services_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStEO0FBQy9ELDRDQUF3RDtBQUN4RCx1REFBNEQ7QUFDNUQsMENBQXVDO0FBQ3ZDLGlEQUE4QztBQUM5QyxnREFBMEQ7QUFRMUQ7SUFRSSx3QkFDWSxNQUFlLEVBQ2YsSUFBVSxFQUNWLHFCQUE2QztRQUY3QyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFSekQsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQVN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFHRCwrQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUUxQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRU8sOEJBQUssR0FBYjtRQUFBLGlCQWFDO1FBWkcsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2YsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFDTCxVQUFDLEtBQUs7WUFDRixlQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLG9EQUFvRDtJQUN4RCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsVUFBVTtZQUNqQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkRzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtvREFBQztJQU5uQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVV1QixlQUFNO1lBQ1QsV0FBSTtZQUNjLGdDQUFxQjtPQVhoRCxjQUFjLENBZ0UxQjtJQUFELHFCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0lVc2VyTG9naW4sIExvZ2luRm9ybX0gZnJvbSBcIi4uLy4uL2NvcmUvbW9kZWxzXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIHVzZXI6IElVc2VyTG9naW47XHJcbiAgICBpc1N1Ym1pdGluZyA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2UgOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBJVXNlckxvZ2luKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9naW4oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpbigpIHtcclxuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYWdlL2hvbWUnXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0KHRoaXMudXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgLy8gdGhpcy5hbGVydChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEZvcm0oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=