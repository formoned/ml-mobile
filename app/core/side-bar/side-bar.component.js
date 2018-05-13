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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF1QztBQUN2Qyx1REFBa0Q7QUFDbEQsd0NBQWtEO0FBR2xEOzs7OERBRzhEO0FBTzlEO0lBa0JJLDBCQUNZLE1BQWUsRUFDZixxQkFBNkM7UUFEN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFaekQsU0FBSSxHQUFpQjtZQUNqQixJQUFJLEVBQUcsRUFBRTtZQUNULEtBQUssRUFBRyxFQUFFO1lBQ1YsVUFBVSxFQUFHLEVBQUU7WUFDZixLQUFLLEVBQUcsRUFBRTtZQUNWLEtBQUssRUFBRyxFQUFFO1lBQ1YsTUFBTSxFQUFHLE9BQU87WUFDaEIsT0FBTyxFQUFHLElBQUk7U0FDakIsQ0FBQztJQU9GLENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtRQUM5RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7YUFDL0IsU0FBUyxDQUFDLFVBQUMsUUFBYztZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUMzQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzVDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxlQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUFBQSxDQUFDO0lBRUYscUNBQVUsR0FBVjtRQUNJLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQseUNBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBdERRO1FBQVIsWUFBSyxFQUFFOzswREFBc0I7SUFOckIsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQW9CdUIsZUFBTTtZQUNTLGdDQUFxQjtPQXBCaEQsZ0JBQWdCLENBOEQ1QjtJQUFELHVCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHthbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7cHJvZmlsZUZvcm19IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1mb3JtLm1vZGVsXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIEtlZXAgZGF0YSB0aGF0IGlzIGRpc3BsYXllZCBpbiB5b3VyIGFwcCBkcmF3ZXIgaW4gdGhlIE15RHJhd2VyIGNvbXBvbmVudCBjbGFzcy5cclxuKiBBZGQgbmV3IGRhdGEgb2JqZWN0cyB0aGF0IHlvdSB3YW50IHRvIGRpc3BsYXkgaW4gdGhlIGRyYXdlciBoZXJlIGluIHRoZSBmb3JtIG9mIHByb3BlcnRpZXMuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU2lkZUJhclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lkZS1iYXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zaWRlLWJhci5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBUaGUgXCJzZWxlY3RlZFBhZ2VcIiBpcyBhIGNvbXBvbmVudCBpbnB1dCBwcm9wZXJ0eS5cclxuICAgICogSXQgaXMgdXNlZCB0byBwYXNzIHRoZSBjdXJyZW50IHBhZ2UgdGl0bGUgZnJvbSB0aGUgY29udGFpbmluZyBwYWdlIGNvbXBvbmVudC5cclxuICAgICogWW91IGNhbiBjaGVjayBob3cgaXQgaXMgdXNlZCBpbiB0aGUgXCJpc1BhZ2VTZWxlY3RlZFwiIGZ1bmN0aW9uIGJlbG93LlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogc3RyaW5nO1xyXG5cclxuICAgIHVzZXIgOiBwcm9maWxlRm9ybSA9IHtcclxuICAgICAgICBuYW1lIDogJycsXHJcbiAgICAgICAgZW1haWwgOiAnJyxcclxuICAgICAgICBjcmVhdGVkX2F0IDogJycsXHJcbiAgICAgICAgdGl0bGUgOiAnJyxcclxuICAgICAgICBhYm91dCA6ICcnLFxyXG4gICAgICAgIGdlbmRlciA6ICdvdGhlcicsXHJcbiAgICAgICAgY291bnRyeSA6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2UgOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBVc2UgdGhlIE15RHJhd2VyQ29tcG9uZW50IFwib25Jbml0XCIgZXZlbnQgaGFuZGxlciB0byBpbml0aWFsaXplIHRoZSBwcm9wZXJ0aWVzIGRhdGEgdmFsdWVzLlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgdGhpcy5sb2FkVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRVc2VyKCkge1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5uYW1lID0gcmVzcG9uc2UubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSByZXNwb25zZS5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuY3JlYXRlZF9hdCA9IHJlc3BvbnNlLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmdlbmRlciA9IHJlc3BvbnNlLmdlbmRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudGl0bGUgPSByZXNwb25zZS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYWJvdXQgPSByZXNwb25zZS5hYm91dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuY291bnRyeSA9IHJlc3BvbnNlLmNvdW50cnlfaWQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KChKU09OLnBhcnNlKGVycm9yLnRleHQoKSkpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbG9nb3V0VXNlcigpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFRoZSBcImlzUGFnZVNlbGVjdGVkXCIgZnVuY3Rpb24gaXMgYm91bmQgdG8gZXZlcnkgbmF2aWdhdGlvbiBpdGVtIG9uIHRoZSA8TXlEcmF3ZXJJdGVtPi5cclxuICAgICogSXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaXRlbSBzaG91bGQgaGF2ZSB0aGUgXCJzZWxlY3RlZFwiIGNsYXNzLlxyXG4gICAgKiBUaGUgXCJzZWxlY3RlZFwiIGNsYXNzIGNoYW5nZXMgdGhlIHN0eWxlcyBvZiB0aGUgaXRlbSwgc28gdGhhdCB5b3Uga25vdyB3aGljaCBwYWdlIHlvdSBhcmUgb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaXNQYWdlU2VsZWN0ZWQocGFnZVRpdGxlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcclxuICAgIH1cclxuXHJcbn0iXX0=