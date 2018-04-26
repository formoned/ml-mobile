"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.rootUrl = 'http://bachelor-server.kods.lv';
        this.clientId = '2';
        this.clientSecret = '1qMmaxtVnN4q1ZxvkGTZSTDLxWKxHJX5POlU5jGk';
        this.grantType = 'password';
    }
    UserService.prototype.register = function (user) {
        // return new Promise((resolve, reject) => {
        //     Kinvey.User.logout()
        //         .then(() => {
        //             Kinvey.User.signup({ username: user.email, password: user.password })
        //                 .then(resolve)
        //                 .catch((error) => { this.handleErrors(error); reject(); })
        //         })
        //         .catch((error) => { this.handleErrors(error); reject(); })
        // });
    };
    UserService.prototype.userAuthentication = function (user) {
        var body = {
            grant_type: this.grantType,
            username: user.email,
            password: user.password,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            scope: ""
        };
        var reqHeader = new http_1.HttpHeaders();
        reqHeader.append('Accept', 'application/json');
        reqHeader.append('Content-Type', 'application/json');
        return this.http.post(this.rootUrl + '/oauth/token', body, { headers: reqHeader });
    };
    UserService.prototype.registerUser = function (user) {
        var body = {
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        };
        var reqHeader = new http_1.HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' });
        return this.http.post(this.rootUrl + '/api/auth/register ', body, { headers: reqHeader });
    };
    // login(user: LoginForm) {
    //
    //
    //     const body: LoginOAuthForm = {
    //         grant_type: this.grantType,
    //         username: user.email,
    //         password: user.password,
    //         client_id: this.clientId,
    //         client_secret: this.clientSecret,
    //         scope: ""
    //     }
    //
    //     var reqHeader = new Headers();
    //
    //     reqHeader.append('Accept', 'application/json');
    //     reqHeader.append('Content-Type', 'application/json');
    //
    //     return this.http.post(this.rootUrl + '/oauth/token', body, {headers : reqHeader });
    //
    //     // return new Promise((resolve, reject) => {
    //     //     Kinvey.User.logout()
    //     //         .then(() => {
    //     //             Kinvey.User.login(user.email, user.password)
    //     //                 .then(resolve)
    //     //                 .catch((error) => { this.handleErrors(error); reject(); })
    //     //         })
    //     //         .catch((error) => { this.handleErrors(error); reject(); })
    //     // });
    // }
    UserService.prototype.resetPassword = function (email) {
        // return Kinvey.User.resetPassword(email)
        //     .catch(this.handleErrors);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUE2RTtBQUM3RSxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBRzlCO0lBUUkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFOM0IsWUFBTyxHQUFHLGdDQUFnQyxDQUFDO1FBQzNDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixpQkFBWSxHQUFHLDBDQUEwQyxDQUFDO1FBQzFELGNBQVMsR0FBRyxVQUFVLENBQUM7SUFJaEMsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBR2YsNENBQTRDO1FBQzVDLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsb0ZBQW9GO1FBQ3BGLGlDQUFpQztRQUNqQyw2RUFBNkU7UUFDN0UsYUFBYTtRQUNiLHFFQUFxRTtRQUNyRSxNQUFNO0lBQ1YsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixJQUFlO1FBRTlCLElBQU0sSUFBSSxHQUFtQjtZQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDeEIsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ2hDLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQTtRQUVELElBQUksU0FBUyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBRWxDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDL0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFHLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFFdkYsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxJQUFVO1FBRW5CLElBQU0sSUFBSSxHQUFTO1lBQ2YsS0FBSyxFQUFtQixJQUFJLENBQUMsS0FBSztZQUNsQyxRQUFRLEVBQWdCLElBQUksQ0FBQyxRQUFRO1lBQ3JDLHFCQUFxQixFQUFHLElBQUksQ0FBQyxxQkFBcUI7U0FDckQsQ0FBQTtRQUVELElBQUksU0FBUyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztRQUV2RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsRUFBRSxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUcsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLEVBQUU7SUFDRixFQUFFO0lBQ0YscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLFFBQVE7SUFDUixFQUFFO0lBQ0YscUNBQXFDO0lBQ3JDLEVBQUU7SUFDRixzREFBc0Q7SUFDdEQsNERBQTREO0lBQzVELEVBQUU7SUFDRiwwRkFBMEY7SUFDMUYsRUFBRTtJQUNGLG1EQUFtRDtJQUNuRCxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLGtFQUFrRTtJQUNsRSx3Q0FBd0M7SUFDeEMsb0ZBQW9GO0lBQ3BGLG9CQUFvQjtJQUNwQiw0RUFBNEU7SUFDNUUsYUFBYTtJQUNiLElBQUk7SUFFSixtQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLDBDQUEwQztRQUMxQyxpQ0FBaUM7SUFDckMsQ0FBQztJQTVGUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBU2lCLGlCQUFVO09BUjNCLFdBQVcsQ0FpR3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0sIExvZ2luT0F1dGhGb3JtLCBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgICByZWFkb25seSByb290VXJsID0gJ2h0dHA6Ly9iYWNoZWxvci1zZXJ2ZXIua29kcy5sdic7XHJcbiAgICByZWFkb25seSBjbGllbnRJZCA9ICcyJztcclxuICAgIHJlYWRvbmx5IGNsaWVudFNlY3JldCA9ICcxcU1tYXh0Vm5ONHExWnh2a0dUWlNUREx4V0t4SEpYNVBPbFU1akdrJztcclxuICAgIHJlYWRvbmx5IGdyYW50VHlwZSA9ICdwYXNzd29yZCc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcblxyXG5cclxuICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBLaW52ZXkuVXNlci5sb2dvdXQoKVxyXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKTsgcmVqZWN0KCk7IH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJBdXRoZW50aWNhdGlvbih1c2VyOiBMb2dpbkZvcm0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keTogTG9naW5PQXV0aEZvcm0gPSB7XHJcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IHRoaXMuZ3JhbnRUeXBlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jbGllbnRTZWNyZXQsXHJcbiAgICAgICAgICAgIHNjb3BlOiBcIlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVxSGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIHJlcUhlYWRlci5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgcmVxSGVhZGVyLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMucm9vdFVybCArICcvb2F1dGgvdG9rZW4nLCBib2R5LCB7aGVhZGVycyA6IHJlcUhlYWRlciB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJVc2VyKHVzZXI6IFVzZXIpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keTogVXNlciA9IHtcclxuICAgICAgICAgICAgZW1haWw6ICAgICAgICAgICAgICAgICAgdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICAgICAgICAgICAgICAgdXNlci5wYXNzd29yZCxcclxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAgdXNlci5wYXNzd29yZF9jb25maXJtYXRpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXFIZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoeydYLVJlcXVlc3RlZC1XaXRoJzonWE1MSHR0cFJlcXVlc3QnfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJvb3RVcmwgKyAnL2FwaS9hdXRoL3JlZ2lzdGVyICcsIGJvZHkse2hlYWRlcnMgOiByZXFIZWFkZXJ9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2dpbih1c2VyOiBMb2dpbkZvcm0pIHtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnN0IGJvZHk6IExvZ2luT0F1dGhGb3JtID0ge1xyXG4gICAgLy8gICAgICAgICBncmFudF90eXBlOiB0aGlzLmdyYW50VHlwZSxcclxuICAgIC8vICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcbiAgICAvLyAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgLy8gICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXHJcbiAgICAvLyAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50U2VjcmV0LFxyXG4gICAgLy8gICAgICAgICBzY29wZTogXCJcIlxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgdmFyIHJlcUhlYWRlciA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJlcUhlYWRlci5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAvLyAgICAgcmVxSGVhZGVyLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMucm9vdFVybCArICcvb2F1dGgvdG9rZW4nLCBib2R5LCB7aGVhZGVycyA6IHJlcUhlYWRlciB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgS2ludmV5LlVzZXIubG9nb3V0KClcclxuICAgIC8vICAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgICAgICAgICBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKVxyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKTsgcmVqZWN0KCk7IH0pXHJcbiAgICAvLyAgICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgICAgICAvLyByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcclxuICAgICAgICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoYW5kbGVFcnJvcnMoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gfVxyXG59Il19