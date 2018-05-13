"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.sideNavCompact = new core_1.EventEmitter();
        this.sideNavCompact.emit(this.getSideNavCompact());
    }
    SettingsService.prototype.getSideNavCompact = function () {
        return localStorage.getItem('compact-sidenav') == 'true' ? true : false;
    };
    SettingsService.prototype.setSideNavCompact = function (_status) {
        this.sideNavCompact.emit(_status);
        localStorage.setItem('compact-sidenav', _status);
    };
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0M7SUFJRTtRQUZBLG1CQUFjLEdBQVEsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFHaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFFLENBQUM7SUFFRCwyQ0FBaUIsR0FBakIsVUFBa0IsT0FBTztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuXG4gIHNpZGVOYXZDb21wYWN0ICAgICAgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuc2lkZU5hdkNvbXBhY3QuZW1pdCh0aGlzLmdldFNpZGVOYXZDb21wYWN0KCkpO1xuICB9XG5cbiAgZ2V0U2lkZU5hdkNvbXBhY3QoKSA6IGJvb2xlYW4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFjdC1zaWRlbmF2JykgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgc2V0U2lkZU5hdkNvbXBhY3QoX3N0YXR1cykge1xuICAgIHRoaXMuc2lkZU5hdkNvbXBhY3QuZW1pdChfc3RhdHVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFjdC1zaWRlbmF2JywgX3N0YXR1cyk7XG4gIH1cblxufVxuIl19