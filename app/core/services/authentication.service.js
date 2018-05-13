"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Http, Headers, Response } from '@angular/http';
var http_1 = require("@angular/common/http");
// import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
var operators_1 = require("rxjs/operators");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.rootUrl = 'https://bachelor-server.kods.lv';
        this.clientId = '2';
        this.clientSecret = '1qMmaxtVnN4q1ZxvkGTZSTDLxWKxHJX5POlU5jGk';
        this.grantType = 'password';
    }
    AuthenticationService.prototype.isAuthorized = function () {
    };
    AuthenticationService.prototype.login = function (userLogin) {
        var body = {
            grant_type: this.grantType,
            username: userLogin.email,
            password: userLogin.password,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            scope: ""
        };
        var header = new http_1.HttpHeaders();
        header.append('Accept', 'application/json');
        header.append('Content-Type', 'application/json');
        return this.http.post(this.rootUrl + '/oauth/token', body, { headers: header })
            .pipe(operators_1.map(function (response) {
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('jwt_info', response);
            return response;
        }), operators_1.catchError(this.handleError));
    };
    AuthenticationService.prototype.register = function (body) {
        var reqHeader = new http_1.HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' });
        return this.http.post(this.rootUrl + '/api/auth/register ', body, { headers: reqHeader });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('jwt_info');
    };
    AuthenticationService.prototype.getUser = function () {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.get(this.rootUrl + '/api/user', { headers: header });
    };
    AuthenticationService.prototype.changeProfileInfo = function (value) {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.post(this.rootUrl + '/api/profile-edit', value, { headers: header });
    };
    AuthenticationService.prototype.changeProfilePassword = function (value) {
        var header = new http_1.HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.post(this.rootUrl + '/api/profile-password-change', value, { headers: header });
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return Observable_1.Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'Server error');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMkRBQTJEO0FBQzNELDZDQUFnRztBQUNoRyxtRkFBbUY7QUFDbkYsNENBQStDO0FBRS9DLDhDQUEyQztBQUMzQyxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBSTlCO0lBU0ksK0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFQNUIsWUFBTyxHQUFHLGlDQUFpQyxDQUFDO1FBQzVDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixpQkFBWSxHQUFHLDBDQUEwQyxDQUFDO1FBQzFELGNBQVMsR0FBRyxVQUFVLENBQUM7SUFJUyxDQUFDO0lBRTFDLDRDQUFZLEdBQVo7SUFFQSxDQUFDO0lBRUQscUNBQUssR0FBTCxVQUFNLFNBQXFCO1FBRXZCLElBQU0sSUFBSSxHQUFlO1lBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUztZQUMxQixRQUFRLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDekIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO1lBQzVCLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN4QixhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDaEMsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBQyxP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QUNwQyxpREFBaUQ7WUFDakQsaUVBQWlFO1FBQ25FLENBQUM7UUFDRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUE5RlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBVWtCLGlCQUFVO09BVDVCLHFCQUFxQixDQStGakM7SUFBRCw0QkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuLy8gaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7SUxvZ2luQm9keSwgSVVzZXJMb2dpbiwgcGFzc3dvcmRFZGl0Rm9ybSwgcHJvZmlsZUZvcm19IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IHtJVXNlclJlZ2lzdGVyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXItbG9naW4ubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG5cbiAgICByZWFkb25seSByb290VXJsID0gJ2h0dHBzOi8vYmFjaGVsb3Itc2VydmVyLmtvZHMubHYnO1xuICAgIHJlYWRvbmx5IGNsaWVudElkID0gJzInO1xuICAgIHJlYWRvbmx5IGNsaWVudFNlY3JldCA9ICcxcU1tYXh0Vm5ONHExWnh2a0dUWlNUREx4V0t4SEpYNVBPbFU1akdrJztcbiAgICByZWFkb25seSBncmFudFR5cGUgPSAncGFzc3dvcmQnO1xuXG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgaXNBdXRob3JpemVkKCkge1xuXG4gICAgfVxuXG4gICAgbG9naW4odXNlckxvZ2luOiBJVXNlckxvZ2luKSB7XG5cbiAgICAgICAgY29uc3QgYm9keTogSUxvZ2luQm9keSA9IHtcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IHRoaXMuZ3JhbnRUeXBlLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJMb2dpbi5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyTG9naW4ucGFzc3dvcmQsXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudFNlY3JldCxcbiAgICAgICAgICAgIHNjb3BlOiBcIlwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJvb3RVcmwgKyAnL29hdXRoL3Rva2VuJywgYm9keSwge2hlYWRlcnMgOiBoZWFkZXJ9KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChyZXNwb25zZSA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0X2luZm8nLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGJvZHk6IElVc2VyUmVnaXN0ZXIpIHtcblxuICAgICAgICB2YXIgcmVxSGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHsnWC1SZXF1ZXN0ZWQtV2l0aCc6J1hNTEh0dHBSZXF1ZXN0J30pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJvb3RVcmwgKyAnL2FwaS9hdXRoL3JlZ2lzdGVyICcsIGJvZHkse2hlYWRlcnMgOiByZXFIZWFkZXJ9KTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgLy8gcmVtb3ZlIHVzZXIgZnJvbSBsb2NhbCBzdG9yYWdlIHRvIGxvZyB1c2VyIG91dFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdqd3RfaW5mbycpO1xuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG5cbiAgICAgICAgbGV0IGhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucm9vdFVybCArICcvYXBpL3VzZXInLHtoZWFkZXJzIDogaGVhZGVyfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJvZmlsZUluZm8odmFsdWUgOiBwcm9maWxlRm9ybSkge1xuICAgICAgICBsZXQgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJvb3RVcmwgKyAnL2FwaS9wcm9maWxlLWVkaXQnLCB2YWx1ZSwge2hlYWRlcnMgOiBoZWFkZXJ9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQcm9maWxlUGFzc3dvcmQodmFsdWUgOiBwYXNzd29yZEVkaXRGb3JtKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5yb290VXJsICsgJy9hcGkvcHJvZmlsZS1wYXNzd29yZC1jaGFuZ2UnLCB2YWx1ZSwge2hlYWRlcnMgOiBoZWFkZXJ9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5lcnJvcignc2VydmVyIGVycm9yOicsIGVycm9yKTtcbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc3QgZXJyTWVzc2FnZSA9IGVycm9yLmVycm9yLm1lc3NhZ2U7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNZXNzYWdlKTtcbiAgICAgIC8vIFVzZSB0aGUgZm9sbG93aW5nIGluc3RlYWQgaWYgdXNpbmcgbGl0ZS1zZXJ2ZXJcbiAgICAgIC8vIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyci50ZXh0KCkgfHwgJ2JhY2tlbmQgc2VydmVyIGVycm9yJyk7XG4gICAgfVxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICB9XG59XG4iXX0=