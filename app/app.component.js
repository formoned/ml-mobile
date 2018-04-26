"use strict";
// import { Component } from "@angular/core";
//
// @Component({
//     selector: "ns-app",
//     templateUrl: "app.component.html"
// })
// export class AppComponent { }
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./shared/backend.service");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        backend_service_1.BackendService.setup();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQix3Q0FBd0M7QUFDeEMsS0FBSztBQUNMLGdDQUFnQzs7QUFHaEMsc0NBQTBDO0FBRTFDLDREQUEwRDtBQU0xRDtJQUNJO1FBQ0ksZ0NBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBSFEsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOztPQUNXLFlBQVksQ0FJeEI7SUFBRCxtQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy9cclxuLy8gQENvbXBvbmVudCh7XHJcbi8vICAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuLy8gICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbi8vIH0pXHJcbi8vIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XHJcblxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2Uuc2V0dXAoKTtcclxuICAgIH1cclxufSJdfQ==