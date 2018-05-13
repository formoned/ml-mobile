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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStEO0FBQy9ELDRDQUF3RDtBQUN4RCx1REFBNEQ7QUFDNUQsMENBQXVDO0FBQ3ZDLGlEQUE4QztBQUM5QyxnREFBMEQ7QUFRMUQ7SUFRSSx3QkFDWSxNQUFlLEVBQ2YsSUFBVSxFQUNWLHFCQUE2QztRQUY3QyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFSekQsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQVN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFHRCwrQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUUxQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRU8sOEJBQUssR0FBYjtRQUFBLGlCQWFDO1FBWkcsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2YsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFDTCxVQUFDLEtBQUs7WUFDRixlQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLG9EQUFvRDtJQUN4RCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsVUFBVTtZQUNqQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkRzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtvREFBQztJQU5uQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVV1QixlQUFNO1lBQ1QsV0FBSTtZQUNjLGdDQUFxQjtPQVhoRCxjQUFjLENBZ0UxQjtJQUFELHFCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJVXNlckxvZ2luLCBMb2dpbkZvcm19IGZyb20gXCIuLi8uLi9jb3JlL21vZGVsc1wiO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblxuICAgIHVzZXI6IElVc2VyTG9naW47XG4gICAgaXNTdWJtaXRpbmcgOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2UgOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IElVc2VyTG9naW4oKTtcbiAgICB9XG5cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ2luKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2luKCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhZ2UvaG9tZSddKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuYWxlcnQodGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgLy8gdGhpcy5hbGVydChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpO1xuICAgIH1cblxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIGVkaXRGb3JtKCkge1xuXG4gICAgfVxuXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iXX0=