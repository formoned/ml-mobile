"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../../core/services");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var GeneralComponent = /** @class */ (function () {
    function GeneralComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.isSubmiting = false;
        this.passwordForm = {
            password_old: '',
            password: '',
            password_confirmation: ''
        };
        // Use the constructor to inject services.
        console.log('general construct');
    }
    GeneralComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
    };
    GeneralComponent.prototype.onSave = function () {
        this.submit(this.passwordForm);
    };
    GeneralComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    GeneralComponent.prototype.focusPasswordConfirmation = function () {
        this.password_confirmation.nativeElement.focus();
    };
    GeneralComponent.prototype.checkForm = function () {
        if (!this.passwordForm.password_confirmation || !this.passwordForm.password || !this.passwordForm.password_old) {
            this.alert('One of field is empty!');
            return;
        }
        else if (this.passwordForm.password != this.passwordForm.password_confirmation) {
            this.alert('New password and Password Confirmation not match!');
            return;
        }
        this.submit(this.passwordForm);
    };
    GeneralComponent.prototype.submit = function (value) {
        var _this = this;
        this.isSubmiting = true;
        this.authenticationService.changeProfilePassword(value)
            .subscribe(function (response) {
            if (response.success == true) {
                _this.passwordForm = {
                    password_old: '',
                    password: '',
                    password_confirmation: ''
                };
                _this.alert(response.message);
            }
            else {
                _this.alert(response.message);
            }
            _this.isSubmiting = false;
        }, function (error) {
            dialogs_1.alert((JSON.parse(error.text())).message);
            console.log(error.text());
            _this.isSubmiting = false;
        });
    };
    GeneralComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], GeneralComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("password_confirmation"),
        __metadata("design:type", core_1.ElementRef)
    ], GeneralComponent.prototype, "password_confirmation", void 0);
    GeneralComponent = __decorate([
        core_1.Component({
            selector: "General",
            moduleId: module.id,
            templateUrl: "./general.component.html"
        }),
        __metadata("design:paramtypes", [services_1.AuthenticationService])
    ], GeneralComponent);
    return GeneralComponent;
}());
exports.GeneralComponent = GeneralComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW5lcmFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUV2RSxtREFBNkQ7QUFDN0QsdURBQWtEO0FBT2xEO0lBYUksMEJBQ1kscUJBQTZDO1FBQTdDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFaekQsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBc0I7WUFDOUIsWUFBWSxFQUFHLEVBQUU7WUFDakIsUUFBUSxFQUFHLEVBQUU7WUFDYixxQkFBcUIsRUFBRyxFQUFFO1NBQzdCLENBQUM7UUFRRSwwQ0FBMEM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksOERBQThEO0lBQ2xFLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQXlCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzVHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxLQUF3QjtRQUEvQixpQkF1QkM7UUF0QkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzthQUNsRCxTQUFTLENBQUMsVUFBQyxRQUFjO1lBQ3RCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRztvQkFDaEIsWUFBWSxFQUFHLEVBQUU7b0JBQ2pCLFFBQVEsRUFBRyxFQUFFO29CQUNiLHFCQUFxQixFQUFHLEVBQUU7aUJBQzdCLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDRyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsZUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLE9BQWU7UUFDakIsTUFBTSxDQUFDLGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuRXNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO3NEQUFDO0lBQ1I7UUFBbkMsZ0JBQVMsQ0FBQyx1QkFBdUIsQ0FBQztrQ0FBd0IsaUJBQVU7bUVBQUM7SUFYN0QsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQWVzQyxnQ0FBcUI7T0FkaEQsZ0JBQWdCLENBOEU1QjtJQUFELHVCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtwYXNzd29yZEVkaXRGb3JtfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9tb2RlbHNcIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlc1wiO1xuaW1wb3J0IHthbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJHZW5lcmFsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dlbmVyYWwuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGlzU3VibWl0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcGFzc3dvcmRGb3JtIDogcGFzc3dvcmRFZGl0Rm9ybSA9IHtcbiAgICAgICAgcGFzc3dvcmRfb2xkIDogJycsXG4gICAgICAgIHBhc3N3b3JkIDogJycsXG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbiA6ICcnXG4gICAgfTtcblxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZSA6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICAgICAgY29uc29sZS5sb2coJ2dlbmVyYWwgY29uc3RydWN0JylcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdGhpcy5zdWJtaXQodGhpcy5wYXNzd29yZEZvcm0pO1xuICAgIH1cblxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgICBmb2N1c1Bhc3N3b3JkQ29uZmlybWF0aW9uKCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JtKCkge1xuICAgICAgICBpZighdGhpcy5wYXNzd29yZEZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uIHx8ICF0aGlzLnBhc3N3b3JkRm9ybS5wYXNzd29yZCB8fCAhdGhpcy5wYXNzd29yZEZvcm0ucGFzc3dvcmRfb2xkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdPbmUgb2YgZmllbGQgaXMgZW1wdHkhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBhc3N3b3JkRm9ybS5wYXNzd29yZCAhPSB0aGlzLnBhc3N3b3JkRm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ05ldyBwYXNzd29yZCBhbmQgUGFzc3dvcmQgQ29uZmlybWF0aW9uIG5vdCBtYXRjaCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1Ym1pdCh0aGlzLnBhc3N3b3JkRm9ybSk7XG4gICAgfVxuXG4gICAgc3VibWl0KHZhbHVlIDogcGFzc3dvcmRFZGl0Rm9ybSkge1xuICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY2hhbmdlUHJvZmlsZVBhc3N3b3JkKHZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZEZvcm0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9vbGQgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb24gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=