"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ApiDeleteService = /** @class */ (function () {
    function ApiDeleteService(http) {
        this.http = http;
        this.rootUrl = 'https://bachelor-server.kods.lv';
    }
    ApiDeleteService.prototype.deleteUserPost = function (_id) {
        var header = new http_1.Headers();
        header.append('Accept', 'application/json');
        header.append('Authorization', "Bearer " + localStorage.getItem('token'));
        return this.http.delete(this.rootUrl + '/api/delete/user-post/' + _id, { headers: header });
    };
    ApiDeleteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ApiDeleteService);
    return ApiDeleteService;
}());
exports.ApiDeleteService = ApiDeleteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWRlbGV0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLWRlbGV0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE0QztBQUc1QztJQUlFLDBCQUFvQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztRQUZ0QixZQUFPLEdBQUcsaUNBQWlDLENBQUM7SUFFbEIsQ0FBQztJQUVwQyx5Q0FBYyxHQUFkLFVBQWUsR0FBRztRQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUUxRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsR0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUcsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBYlUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBS2dCLFdBQUk7T0FKcEIsZ0JBQWdCLENBYzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hlYWRlcnMsIEh0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlEZWxldGVTZXJ2aWNlIHtcblxuICByZWFkb25seSByb290VXJsID0gJ2h0dHBzOi8vYmFjaGVsb3Itc2VydmVyLmtvZHMubHYnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHApIHsgfVxuXG4gIGRlbGV0ZVVzZXJQb3N0KF9pZCkge1xuICAgIHZhciBoZWFkZXIgPSBuZXcgSGVhZGVycygpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBoZWFkZXIuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnJvb3RVcmwgKyAnL2FwaS9kZWxldGUvdXNlci1wb3N0LycrX2lkLHtoZWFkZXJzIDogaGVhZGVyfSk7XG4gIH1cbn1cbiJdfQ==