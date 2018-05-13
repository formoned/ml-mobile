"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ApiGetService = /** @class */ (function () {
    function ApiGetService(http) {
        this.http = http;
        this.rootUrl = 'https://bachelor-server.kods.lv';
    }
    ApiGetService.prototype.getCountriesList = function () {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.get(this.rootUrl + '/api/get/countries-list', { headers: header });
    };
    ApiGetService.prototype.getUserPosts = function () {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.get(this.rootUrl + '/api/get/user-posts', { headers: header });
    };
    ApiGetService.prototype.getUserPost = function (_id) {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.get(this.rootUrl + '/api/get/user-post/' + _id, { headers: header });
    };
    ApiGetService.prototype.getUserPostsMarkers = function () {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.get(this.rootUrl + '/api/get/user-posts-markers', { headers: header });
    };
    ApiGetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiGetService);
    return ApiGetService;
}());
exports.ApiGetService = ApiGetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLWdldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUFnRztBQUdoRztJQUlFLHVCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRjVCLFlBQU8sR0FBRyxpQ0FBaUMsQ0FBQztJQUVaLENBQUM7SUFFMUMsd0NBQWdCLEdBQWhCO1FBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsZUFBZSxFQUFFLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMxRCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUF5QixFQUFDLEVBQUMsT0FBTyxFQUFHLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUlELG9DQUFZLEdBQVo7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDekIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixlQUFlLEVBQUUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzFELGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLEVBQUMsRUFBQyxPQUFPLEVBQUcsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBQ0QsbUNBQVcsR0FBWCxVQUFZLEdBQVk7UUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsZUFBZSxFQUFFLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMxRCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixHQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFQywyQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDekIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixlQUFlLEVBQUUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzFELGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLEVBQUMsRUFBQyxPQUFPLEVBQUcsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBM0NRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FLZ0IsaUJBQVU7T0FKMUIsYUFBYSxDQTRDekI7SUFBRCxvQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZWFkZXJzLCBIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaUdldFNlcnZpY2Uge1xuXG4gIHJlYWRvbmx5IHJvb3RVcmwgPSAnaHR0cHM6Ly9iYWNoZWxvci1zZXJ2ZXIua29kcy5sdic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwIDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0Q291bnRyaWVzTGlzdCgpIHtcblxuICAgICAgbGV0IGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5yb290VXJsICsgJy9hcGkvZ2V0L2NvdW50cmllcy1saXN0Jyx7aGVhZGVycyA6IGhlYWRlcn0pO1xuICB9XG5cblxuXG4gIGdldFVzZXJQb3N0cygpIHtcbiAgICAgIGxldCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5yb290VXJsICsgJy9hcGkvZ2V0L3VzZXItcG9zdHMnLHtoZWFkZXJzIDogaGVhZGVyfSk7XG4gIH1cbiAgZ2V0VXNlclBvc3QoX2lkIDogbnVtYmVyKSB7XG4gICAgICBsZXQgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucm9vdFVybCArICcvYXBpL2dldC91c2VyLXBvc3QvJytfaWQgLHtoZWFkZXJzIDogaGVhZGVyfSk7XG4gIH1cblxuICAgIGdldFVzZXJQb3N0c01hcmtlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5yb290VXJsICsgJy9hcGkvZ2V0L3VzZXItcG9zdHMtbWFya2Vycycse2hlYWRlcnMgOiBoZWFkZXJ9KTtcbiAgICB9XG59XG4iXX0=