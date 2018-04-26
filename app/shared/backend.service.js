"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Kinvey } from "kinvey-nativescript-sdk";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    // static kinveyUsername = "admin";
    // static kinveyPassword = "arlasuns";
    // Kinvey.init({
    //     apiHostname: 'https://baas.kinvey.com',
    //     micHostname: 'https://auth.kinvey.com',
    //     appKey: 'kid_H1mLmVa2G',
    //     appSecret: 'bd3d1a12af684c9d8377b02f0f558b24'
    // })
    BackendService.setup = function () {
        // Kinvey.init({
        //     apiHostname: 'https://baas.kinvey.com',
        //     micHostname: 'https://auth.kinvey.com',
        //     appKey: 'kid_H1mLmVa2G',
        //     appSecret: 'bd3d1a12af684c9d8377b02f0f558b24'
        // })
    };
    BackendService.kinveyAppKey = "kid_H1mLmVa2G";
    BackendService.kinveyAppSecret = "bd3d1a12af684c9d8377b02f0f558b24";
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0RBQW9EO0FBRXBEO0lBQUE7SUFzQkEsQ0FBQztJQW5CRyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBRXRDLGdCQUFnQjtJQUNoQiw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLCtCQUErQjtJQUMvQixvREFBb0Q7SUFDcEQsS0FBSztJQUdFLG9CQUFLLEdBQVo7UUFDSSxnQkFBZ0I7UUFDaEIsOENBQThDO1FBQzlDLDhDQUE4QztRQUM5QywrQkFBK0I7UUFDL0Isb0RBQW9EO1FBQ3BELEtBQUs7SUFDVCxDQUFDO0lBcEJNLDJCQUFZLEdBQUcsZUFBZSxDQUFDO0lBQy9CLDhCQUFlLEdBQUcsa0NBQWtDLENBQUM7SUFvQmhFLHFCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGtpbnZleUFwcEtleSA9IFwia2lkX0gxbUxtVmEyR1wiO1xyXG4gICAgc3RhdGljIGtpbnZleUFwcFNlY3JldCA9IFwiYmQzZDFhMTJhZjY4NGM5ZDgzNzdiMDJmMGY1NThiMjRcIjtcclxuICAgIC8vIHN0YXRpYyBraW52ZXlVc2VybmFtZSA9IFwiYWRtaW5cIjtcclxuICAgIC8vIHN0YXRpYyBraW52ZXlQYXNzd29yZCA9IFwiYXJsYXN1bnNcIjtcclxuXHJcbiAgICAvLyBLaW52ZXkuaW5pdCh7XHJcbiAgICAvLyAgICAgYXBpSG9zdG5hbWU6ICdodHRwczovL2JhYXMua2ludmV5LmNvbScsXHJcbiAgICAvLyAgICAgbWljSG9zdG5hbWU6ICdodHRwczovL2F1dGgua2ludmV5LmNvbScsXHJcbiAgICAvLyAgICAgYXBwS2V5OiAna2lkX0gxbUxtVmEyRycsXHJcbiAgICAvLyAgICAgYXBwU2VjcmV0OiAnYmQzZDFhMTJhZjY4NGM5ZDgzNzdiMDJmMGY1NThiMjQnXHJcbiAgICAvLyB9KVxyXG5cclxuXHJcbiAgICBzdGF0aWMgc2V0dXAoKSB7XHJcbiAgICAgICAgLy8gS2ludmV5LmluaXQoe1xyXG4gICAgICAgIC8vICAgICBhcGlIb3N0bmFtZTogJ2h0dHBzOi8vYmFhcy5raW52ZXkuY29tJyxcclxuICAgICAgICAvLyAgICAgbWljSG9zdG5hbWU6ICdodHRwczovL2F1dGgua2ludmV5LmNvbScsXHJcbiAgICAgICAgLy8gICAgIGFwcEtleTogJ2tpZF9IMW1MbVZhMkcnLFxyXG4gICAgICAgIC8vICAgICBhcHBTZWNyZXQ6ICdiZDNkMWExMmFmNjg0YzlkODM3N2IwMmYwZjU1OGIyNCdcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG59Il19