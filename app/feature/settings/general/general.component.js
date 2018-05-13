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
    }
    GeneralComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW5lcmFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUV2RSxtREFBNkQ7QUFDN0QsdURBQWtEO0FBT2xEO0lBYUksMEJBQ1kscUJBQTZDO1FBQTdDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFaekQsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBc0I7WUFDOUIsWUFBWSxFQUFHLEVBQUU7WUFDakIsUUFBUSxFQUFHLEVBQUU7WUFDYixxQkFBcUIsRUFBRyxFQUFFO1NBQzdCLENBQUM7UUFRRSwwQ0FBMEM7SUFDOUMsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSw4REFBOEQ7SUFDbEUsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQXlCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzVHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxLQUF3QjtRQUEvQixpQkF1QkM7UUF0QkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzthQUNsRCxTQUFTLENBQUMsVUFBQyxRQUFjO1lBQ3RCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRztvQkFDaEIsWUFBWSxFQUFHLEVBQUU7b0JBQ2pCLFFBQVEsRUFBRyxFQUFFO29CQUNiLHFCQUFxQixFQUFHLEVBQUU7aUJBQzdCLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDRyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsZUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLE9BQWU7UUFDakIsTUFBTSxDQUFDLGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUE5RHNCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO3NEQUFDO0lBQ1I7UUFBbkMsZ0JBQVMsQ0FBQyx1QkFBdUIsQ0FBQztrQ0FBd0IsaUJBQVU7bUVBQUM7SUFYN0QsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQWVzQyxnQ0FBcUI7T0FkaEQsZ0JBQWdCLENBeUU1QjtJQUFELHVCQUFDO0NBQUEsQUF6RUQsSUF5RUM7QUF6RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge3Bhc3N3b3JkRWRpdEZvcm19IGZyb20gXCIuLi8uLi8uLi9jb3JlL21vZGVsc1wiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXNcIjtcclxuaW1wb3J0IHthbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJHZW5lcmFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9nZW5lcmFsLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlbmVyYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGlzU3VibWl0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHBhc3N3b3JkRm9ybSA6IHBhc3N3b3JkRWRpdEZvcm0gPSB7XHJcbiAgICAgICAgcGFzc3dvcmRfb2xkIDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQgOiAnJyxcclxuICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb24gOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZSA6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBmb2N1c1Bhc3N3b3JkQ29uZmlybWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRfY29uZmlybWF0aW9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0Zvcm0oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucGFzc3dvcmRGb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiB8fCAhdGhpcy5wYXNzd29yZEZvcm0ucGFzc3dvcmQgfHwgIXRoaXMucGFzc3dvcmRGb3JtLnBhc3N3b3JkX29sZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCdPbmUgb2YgZmllbGQgaXMgZW1wdHkhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wYXNzd29yZEZvcm0ucGFzc3dvcmQgIT0gdGhpcy5wYXNzd29yZEZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ05ldyBwYXNzd29yZCBhbmQgUGFzc3dvcmQgQ29uZmlybWF0aW9uIG5vdCBtYXRjaCEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1Ym1pdCh0aGlzLnBhc3N3b3JkRm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KHZhbHVlIDogcGFzc3dvcmRFZGl0Rm9ybSkge1xyXG4gICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmNoYW5nZVByb2ZpbGVQYXNzd29yZCh2YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRGb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9vbGQgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19