"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SideBarService = /** @class */ (function () {
    function SideBarService() {
        this.selected = new core_1.EventEmitter();
        this.sideNavCompact = new core_1.EventEmitter();
        this.sideNavCompact.emit(this.getSideNavCompact());
    }
    SideBarService.prototype.setSelect = function (_page) {
        this.selected.emit(_page);
    };
    SideBarService.prototype.getSideNavCompact = function () {
        return localStorage.getItem('compact-sidenav') == 'true' ? true : false;
    };
    SideBarService.prototype.setSideNavCompact = function (_status) {
        this.sideNavCompact.emit(_status);
        localStorage.setItem('compact-sidenav', _status);
    };
    SideBarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SideBarService);
    return SideBarService;
}());
exports.SideBarService = SideBarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1iYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGUtYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUQ7QUFHdkQ7SUFLRTtRQUhBLGFBQVEsR0FBUSxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUMzQyxtQkFBYyxHQUFRLElBQUksbUJBQVksRUFBVyxDQUFDO1FBR2hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxLQUFjO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUUsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixPQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXBCVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2lkZUJhclNlcnZpY2Uge1xuXG4gIHNlbGVjdGVkICAgICAgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgc2lkZU5hdkNvbXBhY3QgICAgICA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNpZGVOYXZDb21wYWN0LmVtaXQodGhpcy5nZXRTaWRlTmF2Q29tcGFjdCgpKTtcbiAgfVxuXG4gIHNldFNlbGVjdChfcGFnZSA6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChfcGFnZSk7XG4gIH1cblxuICBnZXRTaWRlTmF2Q29tcGFjdCgpIDogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYWN0LXNpZGVuYXYnKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBzZXRTaWRlTmF2Q29tcGFjdChfc3RhdHVzKSB7XG4gICAgdGhpcy5zaWRlTmF2Q29tcGFjdC5lbWl0KF9zdGF0dXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYWN0LXNpZGVuYXYnLCBfc3RhdHVzKTtcbiAgfVxuXG59XG4iXX0=