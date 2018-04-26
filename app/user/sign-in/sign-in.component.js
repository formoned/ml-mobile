"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var user_model_1 = require("../../shared/user.model");
var user_service_1 = require("../../shared/user.service");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        this.message = "";
        this.page.actionBarHidden = true;
        this.user = new user_model_1.LoginForm();
    }
    SignInComponent.prototype.submit = function () {
        // this.userService.
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.login();
    };
    SignInComponent.prototype.login = function () {
        // localStorage.setItem('teststorage', this.user.email);
        // this.alert("login function." + this.user.password);
        var _this = this;
        // this.userService
        //     .userAuthentication(this.user)
        //     .subscribe((data: any) => {
        //
        //     });
        this.userService.userAuthentication(this.user)
            .subscribe(function (data) {
            localStorage.setItem('token_type', data.token_type);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            _this.router.navigate(['/']);
        }, function (err) {
            _this.alert('User login failed');
        });
        // this.userService
        //     .userAuthentication(this.user)
        //     .subscribe((data: any) => {
        //
        //         console.log(data.json().token_type);
        //         localStorage.setItem('token_type', data.json().token_type);
        //         localStorage.setItem('access_token', data.json().access_token);
        //         localStorage.setItem('refresh_token', data.json().refresh_token);
        //         this.router.navigate(['/']);
        //
        //     });
    };
    SignInComponent.prototype.forgotPassword = function () {
        this.alert(localStorage.getItem('access_token'));
        // this.alert("access_token: " + localStorage.getItem('access_token'));
        // prompt({
        //     title: "Forgot Password",
        //     message: "Enter the email address you used to register for APP NAME to reset your password.",
        //     inputType: "email",
        //     defaultText: "",
        //     okButtonText: "Ok",
        //     cancelButtonText: "Cancel"
        // }).then((data) => {
        //     if (data.result) {
        //         this.userService.resetPassword(data.text.trim())
        //             .then(() => {
        //                 this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
        //             }).catch(() => {
        //             this.alert("Unfortunately, an error occurred resetting your password.");
        //         });
        //     }
        // });
    };
    SignInComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    // focusConfirmPassword() {
    //     if (!this.isLoggingIn) {
    //         this.password_confirmation.nativeElement.focus();
    //     }
    // }
    SignInComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], SignInComponent.prototype, "password", void 0);
    SignInComponent = __decorate([
        core_1.Component({
            selector: "app-signin",
            moduleId: module.id,
            templateUrl: "./sign-in.component.html",
            styleUrls: ['./sign-in.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFDekMsdURBQTREO0FBQzVELGlEQUFnRDtBQUNoRCxzREFBMEQ7QUFDMUQsMERBQXdEO0FBVXhEO0lBT0kseUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpqRixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBS3hCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksb0JBQW9CO1FBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUdPLCtCQUFLLEdBQWI7UUFHSSx3REFBd0Q7UUFDeEQsc0RBQXNEO1FBSjFELGlCQW1DQztRQTdCRyxtQkFBbUI7UUFDbkIscUNBQXFDO1FBQ3JDLGtDQUFrQztRQUNsQyxFQUFFO1FBQ0YsVUFBVTtRQUVWLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN6QyxTQUFTLENBQUMsVUFBQyxJQUFTO1lBQ2IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RCxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFDLEdBQXNCO1lBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVYLG1CQUFtQjtRQUNuQixxQ0FBcUM7UUFDckMsa0NBQWtDO1FBQ2xDLEVBQUU7UUFDRiwrQ0FBK0M7UUFDL0Msc0VBQXNFO1FBQ3RFLDBFQUEwRTtRQUMxRSw0RUFBNEU7UUFDNUUsdUNBQXVDO1FBQ3ZDLEVBQUU7UUFDRixVQUFVO0lBRWQsQ0FBQztJQUtELHdDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNqRCx1RUFBdUU7UUFDdkUsV0FBVztRQUNYLGdDQUFnQztRQUNoQyxvR0FBb0c7UUFDcEcsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMkRBQTJEO1FBQzNELDRCQUE0QjtRQUM1Qiw0SUFBNEk7UUFDNUksK0JBQStCO1FBQy9CLHVGQUF1RjtRQUN2RixjQUFjO1FBQ2QsUUFBUTtRQUNSLE1BQU07SUFDVixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDRCwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDREQUE0RDtJQUM1RCxRQUFRO0lBQ1IsSUFBSTtJQUVKLCtCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsVUFBVTtZQUNqQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBbEdzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtxREFBQztJQUxuQyxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQVE0QixXQUFJLEVBQXVCLDBCQUFXLEVBQWtCLGVBQU07T0FQL0UsZUFBZSxDQXdHM0I7SUFBRCxzQkFBQztDQUFBLEFBeEdELElBd0dDO0FBeEdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IExvZ2luRm9ybSwgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXNpZ25pblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbi1pbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQge1xyXG5cclxuICAgIHVzZXI6IExvZ2luRm9ybTtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IExvZ2luRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAvLyB0aGlzLnVzZXJTZXJ2aWNlLlxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9naW4oKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbG9naW4oKSB7XHJcblxyXG5cclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdHN0b3JhZ2UnLCB0aGlzLnVzZXIuZW1haWwpO1xyXG4gICAgICAgIC8vIHRoaXMuYWxlcnQoXCJsb2dpbiBmdW5jdGlvbi5cIiArIHRoaXMudXNlci5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudXNlclNlcnZpY2VcclxuICAgICAgICAvLyAgICAgLnVzZXJBdXRoZW50aWNhdGlvbih0aGlzLnVzZXIpXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJBdXRoZW50aWNhdGlvbih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbl90eXBlJywgZGF0YS50b2tlbl90eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgZGF0YS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoX3Rva2VuJywgZGF0YS5yZWZyZXNoX3Rva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KCdVc2VyIGxvZ2luIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudXNlclNlcnZpY2VcclxuICAgICAgICAvLyAgICAgLnVzZXJBdXRoZW50aWNhdGlvbih0aGlzLnVzZXIpXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmpzb24oKS50b2tlbl90eXBlKTtcclxuICAgICAgICAvLyAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbl90eXBlJywgZGF0YS5qc29uKCkudG9rZW5fdHlwZSk7XHJcbiAgICAgICAgLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgZGF0YS5qc29uKCkuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICAvLyAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoX3Rva2VuJywgZGF0YS5qc29uKCkucmVmcmVzaF90b2tlbik7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKTtcclxuICAgICAgICAvLyB0aGlzLmFsZXJ0KFwiYWNjZXNzX3Rva2VuOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSk7XHJcbiAgICAgICAgLy8gcHJvbXB0KHtcclxuICAgICAgICAvLyAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgLy8gICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEFQUCBOQU1FIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgLy8gICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAvLyAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgLy8gICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICAvLyB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIC8vIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgLy8gICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=