"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ApiPostService = /** @class */ (function () {
    function ApiPostService(http) {
        this.http = http;
        this.rootUrl = 'https://bachelor-server.kods.lv';
    }
    ApiPostService.prototype.saveNewPost = function (body) {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.post(this.rootUrl + '/api/post/save-new-post', body, { headers: header });
    };
    ApiPostService.prototype.savePostEdit = function (body) {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.post(this.rootUrl + '/api/post/edit-post', body, { headers: header });
    };
    ApiPostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiPostService);
    return ApiPostService;
}());
exports.ApiPostService = ApiPostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXBvc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS1wb3N0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTZEO0FBSTdEO0lBSUUsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGNUIsWUFBTyxHQUFHLGlDQUFpQyxDQUFDO0lBRVosQ0FBQztJQUUxQyxvQ0FBVyxHQUFYLFVBQVksSUFBZTtRQUV2QixJQUFJLE1BQU0sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDekIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixlQUFlLEVBQUUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzFELGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUwsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcseUJBQXlCLEVBQUUsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFHLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxJQUFlO1FBRXhCLElBQUksTUFBTSxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUN6QixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLGVBQWUsRUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDMUQsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFFTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsRUFBRSxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUcsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBMUJVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLZ0IsaUJBQVU7T0FKMUIsY0FBYyxDQTRCMUI7SUFBRCxxQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge3Bvc3RGb3JtfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlQb3N0U2VydmljZSB7XG5cbiAgcmVhZG9ubHkgcm9vdFVybCA9ICdodHRwczovL2JhY2hlbG9yLXNlcnZlci5rb2RzLmx2JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHAgOiBIdHRwQ2xpZW50KSB7IH1cblxuICBzYXZlTmV3UG9zdChib2R5IDogcG9zdEZvcm0pIHtcblxuICAgICAgbGV0IGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJvb3RVcmwgKyAnL2FwaS9wb3N0L3NhdmUtbmV3LXBvc3QnLCBib2R5LHtoZWFkZXJzIDogaGVhZGVyfSk7XG4gIH1cblxuICBzYXZlUG9zdEVkaXQoYm9keSA6IHBvc3RGb3JtKSB7XG5cbiAgICAgIGxldCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5yb290VXJsICsgJy9hcGkvcG9zdC9lZGl0LXBvc3QnLCBib2R5LHtoZWFkZXJzIDogaGVhZGVyfSk7XG4gIH1cblxufVxuIl19