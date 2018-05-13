"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var services_1 = require("../services");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.user = {
            name: '',
            email: '',
            created_at: '',
            title: '',
            about: '',
            gender: 'other',
            country: null
        };
    }
    SideBarComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
        this.loadUser();
    };
    SideBarComponent.prototype.loadUser = function () {
        var _this = this;
        this.authenticationService.getUser()
            .subscribe(function (response) {
            _this.user.name = response.name;
            _this.user.email = response.email;
            _this.user.created_at = response.created_at;
            _this.user.gender = response.gender;
            _this.user.title = response.title;
            _this.user.about = response.about;
            _this.user.country = response.country_id;
        }, function (error) {
            dialogs_1.alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    ;
    SideBarComponent.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
    };
    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    SideBarComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SideBarComponent.prototype, "selectedPage", void 0);
    SideBarComponent = __decorate([
        core_1.Component({
            selector: "SideBar",
            moduleId: module.id,
            templateUrl: "./side-bar.component.html",
            styleUrls: ["./side-bar.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            services_1.AuthenticationService])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF1QztBQUN2Qyx1REFBa0Q7QUFDbEQsd0NBQWtEO0FBR2xEOzs7OERBRzhEO0FBTzlEO0lBa0JJLDBCQUNZLE1BQWUsRUFDZixxQkFBNkM7UUFEN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFaekQsU0FBSSxHQUFpQjtZQUNqQixJQUFJLEVBQUcsRUFBRTtZQUNULEtBQUssRUFBRyxFQUFFO1lBQ1YsVUFBVSxFQUFHLEVBQUU7WUFDZixLQUFLLEVBQUcsRUFBRTtZQUNWLEtBQUssRUFBRyxFQUFFO1lBQ1YsTUFBTSxFQUFHLE9BQU87WUFDaEIsT0FBTyxFQUFHLElBQUk7U0FDakIsQ0FBQztJQU9GLENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtRQUM5RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7YUFDL0IsU0FBUyxDQUFDLFVBQUMsUUFBYztZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUMzQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzVDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxlQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUFBQSxDQUFDO0lBRUYscUNBQVUsR0FBVjtRQUNJLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQseUNBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBdERRO1FBQVIsWUFBSyxFQUFFOzswREFBc0I7SUFOckIsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQW9CdUIsZUFBTTtZQUNTLGdDQUFxQjtPQXBCaEQsZ0JBQWdCLENBOEQ1QjtJQUFELHVCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge2FsZXJ0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5pbXBvcnQge3Byb2ZpbGVGb3JtfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZm9ybS5tb2RlbFwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBLZWVwIGRhdGEgdGhhdCBpcyBkaXNwbGF5ZWQgaW4geW91ciBhcHAgZHJhd2VyIGluIHRoZSBNeURyYXdlciBjb21wb25lbnQgY2xhc3MuXG4qIEFkZCBuZXcgZGF0YSBvYmplY3RzIHRoYXQgeW91IHdhbnQgdG8gZGlzcGxheSBpbiB0aGUgZHJhd2VyIGhlcmUgaW4gdGhlIGZvcm0gb2YgcHJvcGVydGllcy5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTaWRlQmFyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZGUtYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgXCJzZWxlY3RlZFBhZ2VcIiBpcyBhIGNvbXBvbmVudCBpbnB1dCBwcm9wZXJ0eS5cbiAgICAqIEl0IGlzIHVzZWQgdG8gcGFzcyB0aGUgY3VycmVudCBwYWdlIHRpdGxlIGZyb20gdGhlIGNvbnRhaW5pbmcgcGFnZSBjb21wb25lbnQuXG4gICAgKiBZb3UgY2FuIGNoZWNrIGhvdyBpdCBpcyB1c2VkIGluIHRoZSBcImlzUGFnZVNlbGVjdGVkXCIgZnVuY3Rpb24gYmVsb3cuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBASW5wdXQoKSBzZWxlY3RlZFBhZ2U6IHN0cmluZztcblxuICAgIHVzZXIgOiBwcm9maWxlRm9ybSA9IHtcbiAgICAgICAgbmFtZSA6ICcnLFxuICAgICAgICBlbWFpbCA6ICcnLFxuICAgICAgICBjcmVhdGVkX2F0IDogJycsXG4gICAgICAgIHRpdGxlIDogJycsXG4gICAgICAgIGFib3V0IDogJycsXG4gICAgICAgIGdlbmRlciA6ICdvdGhlcicsXG4gICAgICAgIGNvdW50cnkgOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2UgOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHtcblxuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIE15RHJhd2VyQ29tcG9uZW50IFwib25Jbml0XCIgZXZlbnQgaGFuZGxlciB0byBpbml0aWFsaXplIHRoZSBwcm9wZXJ0aWVzIGRhdGEgdmFsdWVzLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICB0aGlzLmxvYWRVc2VyKCk7XG4gICAgfVxuXG4gICAgbG9hZFVzZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLm5hbWUgPSByZXNwb25zZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSByZXNwb25zZS5lbWFpbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmNyZWF0ZWRfYXQgPSByZXNwb25zZS5jcmVhdGVkX2F0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZ2VuZGVyID0gcmVzcG9uc2UuZ2VuZGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudGl0bGUgPSByZXNwb25zZS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmFib3V0ID0gcmVzcG9uc2UuYWJvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5jb3VudHJ5ID0gcmVzcG9uc2UuY291bnRyeV9pZDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxvZ291dFVzZXIoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2xvZ2luJ10pO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgXCJpc1BhZ2VTZWxlY3RlZFwiIGZ1bmN0aW9uIGlzIGJvdW5kIHRvIGV2ZXJ5IG5hdmlnYXRpb24gaXRlbSBvbiB0aGUgPE15RHJhd2VySXRlbT4uXG4gICAgKiBJdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBpdGVtIHNob3VsZCBoYXZlIHRoZSBcInNlbGVjdGVkXCIgY2xhc3MuXG4gICAgKiBUaGUgXCJzZWxlY3RlZFwiIGNsYXNzIGNoYW5nZXMgdGhlIHN0eWxlcyBvZiB0aGUgaXRlbSwgc28gdGhhdCB5b3Uga25vdyB3aGljaCBwYWdlIHlvdSBhcmUgb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBpc1BhZ2VTZWxlY3RlZChwYWdlVGl0bGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcbiAgICB9XG5cbn0iXX0=