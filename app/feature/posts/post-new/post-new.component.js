"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var services_1 = require("../../../core/services");
var router_1 = require("@angular/router");
var enums_1 = require("tns-core-modules/ui/enums");
var PostNewComponent = /** @class */ (function () {
    function PostNewComponent(routerExtensions, route, apiPostService, router) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.apiPostService = apiPostService;
        this.router = router;
        this.buttonText = "Start location monitoring";
        this.isMonitoring = false;
        this.monitorLongitude = "0";
        this.monitorLatitude = "0";
        this.monitorAltitude = "0";
        this.monitorDirection = "0";
        this.monitorSpeed = "0";
        this.lat = -33.33;
        this.lng = 151.08;
        this.zoom = 12;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
        this.firstMarker = true;
        this.loadData = false;
        this.isSubmiting = false;
        this.options = {
            desiredAccuracy: enums_1.Accuracy.high,
            updateDistance: 0.1,
            updateTime: 3000,
            minimumUpdateTime: 100
        };
        nativescript_geolocation_1.enableLocationRequest(true);
        this.post = {
            id: null,
            title: '',
            description: '',
            lat: 0,
            lng: 0
        };
    }
    PostNewComponent.prototype.ngOnInit = function () {
    };
    //Map events
    PostNewComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        var gMap = event.gMap;
        this.mapView.myLocationEnabled = true;
        this.mapView.removeAllMarkers();
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(this.lat, this.lng);
        this.mapView.addMarker(marker);
        this.post.lat = this.lat;
        this.post.lng = this.lng;
        this.monitor();
    };
    PostNewComponent.prototype.monitor = function (args) {
        var _this = this;
        // >> location-monitoring
        if (this.isMonitoring) {
            nativescript_geolocation_1.clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
        }
        else {
            this.listener = nativescript_geolocation_1.watchLocation(function (loc) {
                if (loc) {
                    if (_this.firstMarker) {
                        _this.mapView.removeAllMarkers();
                        var marker = new nativescript_google_maps_sdk_1.Marker();
                        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(loc.latitude, loc.longitude);
                        _this.mapView.addMarker(marker);
                        _this.post.lat = loc.latitude;
                        _this.post.lng = loc.longitude;
                        _this.firstMarker = false;
                        _this.goToMarker();
                    }
                    _this.monitorLongitude = (loc.longitude).toFixed(4);
                    _this.monitorLatitude = (loc.latitude).toFixed(4);
                    _this.monitorAltitude = (loc.altitude).toFixed(2);
                    _this.monitorDirection = (loc.direction).toFixed(2);
                    _this.monitorSpeed = (loc.speed).toFixed(2);
                }
            }, function (e) {
                console.log("Error: " + e.message);
            }, this.options);
            this.isMonitoring = true;
            this.buttonText = "Stop location monitoring";
        }
        // << location-monitoring
    };
    PostNewComponent.prototype.onCoordinateTapped = function (args) {
        this.mapView.removeAllMarkers();
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.position.latitude, args.position.longitude);
        this.mapView.addMarker(marker);
        this.post.lat = args.position.latitude;
        this.post.lng = args.position.longitude;
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude);
    };
    PostNewComponent.prototype.onMarkerEvent = function (args) {
        console.log(args.eventName);
        // if(args.eventName == 'markerInfoWindowTapped') {
        //     this.router.navigate(['/page/posts/' + args.marker.userData.id]);
        // }
        // console.log("Marker Event: '" + args.eventName
        //     + "' triggered on: " + args.marker.title
        //     + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude);
    };
    PostNewComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    PostNewComponent.prototype.goToMarker = function () {
        this.mapView.latitude = +this.post.lat;
        this.mapView.longitude = +this.post.lng;
        this.mapView.zoom = 17;
        this.mapView.updateCamera();
        this.mapView.updatePadding();
    };
    PostNewComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    PostNewComponent.prototype.onSave = function () {
        var _this = this;
        this.isSubmiting = true;
        console.log(this.post);
        this.apiPostService.saveNewPost(this.post)
            .subscribe(function (response) {
            if (response.success == true) {
                _this.isSubmiting = false;
                _this.router.navigate(['/page/posts']);
            }
            else {
                _this.alert(response.message, 'Warning');
            }
            _this.isSubmiting = false;
        }, function (error) {
            dialogs_1.alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    PostNewComponent.prototype.alert = function (message, title) {
        return dialogs_1.alert({
            title: title ? title : "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    PostNewComponent = __decorate([
        core_1.Component({
            selector: "app-post-new",
            moduleId: module.id,
            templateUrl: "./post-new.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute,
            services_1.ApiPostService,
            router_1.Router])
    ], PostNewComponent);
    return PostNewComponent;
}());
exports.PostNewComponent = PostNewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1uZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1uZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUFzRDtBQUN0RCx1REFBa0Q7QUFDbEQsNkVBQXVFO0FBQ3ZFLHFFQUFvRztBQUNwRyxtREFBcUU7QUFDckUsMENBQXVEO0FBRXZELG1EQUFtRDtBQU9uRDtJQWlDSSwwQkFDWSxnQkFBa0MsRUFDbEMsS0FBc0IsRUFDdEIsY0FBK0IsRUFDL0IsTUFBZTtRQUhmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVM7UUFuQ3BCLGVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUN6QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdyQixxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDL0Isb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIsb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR2xDLFFBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNiLFFBQUcsR0FBRyxNQUFNLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRzNCLGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBSzdCLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcs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LGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUNqQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBaExRLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FtQ2dDLHVDQUFnQjtZQUMxQix1QkFBYztZQUNMLHlCQUFjO1lBQ3RCLGVBQU07T0FyQ2xCLGdCQUFnQixDQWtMNUI7SUFBRCx1QkFBQztDQUFBLEFBbExELElBa0xDO0FBbExZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7YWxlcnR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7TWFwVmlldywgTWFya2VyLCBQb3NpdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIjtcbmltcG9ydCB7Y2xlYXJXYXRjaCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHtBcGlHZXRTZXJ2aWNlLCBBcGlQb3N0U2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtwb3N0Rm9ybX0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvbW9kZWxzXCI7XG5pbXBvcnQge0FjY3VyYWN5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtcG9zdC1uZXdcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1uZXcuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBQb3N0TmV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBidXR0b25UZXh0ID0gXCJTdGFydCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XG4gICAgcHVibGljIGlzTW9uaXRvcmluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBvcHRpb25zO1xuICAgIHB1YmxpYyBsaXN0ZW5lcjtcbiAgICBwdWJsaWMgbW9uaXRvckxvbmdpdHVkZTogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIG1vbml0b3JMYXRpdHVkZTogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIG1vbml0b3JBbHRpdHVkZTogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIG1vbml0b3JEaXJlY3Rpb246IHN0cmluZyA9IFwiMFwiO1xuICAgIHB1YmxpYyBtb25pdG9yU3BlZWQ6IHN0cmluZyA9IFwiMFwiO1xuXG5cbiAgICBsYXQgPSAtMzMuMzM7XG4gICAgbG5nID0gMTUxLjA4O1xuICAgIHpvb20gPSAxMjtcbiAgICBtaW5ab29tID0gMDtcbiAgICBtYXhab29tID0gMjI7XG4gICAgYmVhcmluZyA9IDA7XG4gICAgdGlsdCA9IDA7XG4gICAgcGFkZGluZyA9IFs0MCwgNDAsIDQwLCA0MF07XG4gICAgbWFwVmlldzogTWFwVmlldztcblxuICAgIGZpcnN0TWFya2VyIDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBpZDtcbiAgICByZXR1cm5Vcmw7XG4gICAgcG9zdCA6IHBvc3RGb3JtO1xuICAgIGxvYWREYXRhIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzU3VibWl0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbGFzdENhbWVyYTogU3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZSA6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGFwaVBvc3RTZXJ2aWNlIDogQXBpUG9zdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcbiAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAwLjEsXG4gICAgICAgICAgICB1cGRhdGVUaW1lOiAzMDAwLFxuICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWU6IDEwMFxuICAgICAgICB9O1xuICAgICAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSk7XG4gICAgICAgIHRoaXMucG9zdCA9IHtcbiAgICAgICAgICAgIGlkIDogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIGxhdDogMCxcbiAgICAgICAgICAgIGxuZzogMFxuICAgICAgICB9O1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIC8vTWFwIGV2ZW50c1xuICAgIG9uTWFwUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01hcCBSZWFkeScpO1xuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG4gICAgICAgIHZhciBnTWFwID0gZXZlbnQuZ01hcDtcbiAgICAgICAgdGhpcy5tYXBWaWV3Lm15TG9jYXRpb25FbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm1hcFZpZXcucmVtb3ZlQWxsTWFya2VycygpO1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy5sYXQsIHRoaXMubG5nKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xuICAgICAgICB0aGlzLnBvc3QubGF0ID0gdGhpcy5sYXQ7XG4gICAgICAgIHRoaXMucG9zdC5sbmcgPSB0aGlzLmxuZztcbiAgICAgICAgdGhpcy5tb25pdG9yKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vbml0b3IoYXJncz8pIHtcbiAgICAgICAgLy8gPj4gbG9jYXRpb24tbW9uaXRvcmluZ1xuICAgICAgICBpZiAodGhpcy5pc01vbml0b3JpbmcpIHtcbiAgICAgICAgICAgIGNsZWFyV2F0Y2godGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTdGFydCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gd2F0Y2hMb2NhdGlvbigobG9jOiBMb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maXJzdE1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LnJlbW92ZUFsbE1hcmtlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcobG9jLmxhdGl0dWRlLCBsb2MubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdC5sYXQgPSBsb2MubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QubG5nID0gbG9jLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RNYXJrZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub01hcmtlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckxvbmdpdHVkZSA9IChsb2MubG9uZ2l0dWRlKS50b0ZpeGVkKDQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMYXRpdHVkZSA9IChsb2MubGF0aXR1ZGUpLnRvRml4ZWQoNCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckFsdGl0dWRlID0gKGxvYy5hbHRpdHVkZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yRGlyZWN0aW9uID0gKGxvYy5kaXJlY3Rpb24pLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvclNwZWVkID0gKGxvYy5zcGVlZCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5pc01vbml0b3JpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTdG9wIGxvY2F0aW9uIG1vbml0b3JpbmdcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA8PCBsb2NhdGlvbi1tb25pdG9yaW5nXG4gICAgfVxuXG4gICAgb25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcblxuICAgICAgICB0aGlzLm1hcFZpZXcucmVtb3ZlQWxsTWFya2VycygpO1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoYXJncy5wb3NpdGlvbi5sYXRpdHVkZSwgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUpO1xuICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICAgIHRoaXMucG9zdC5sYXQgPSBhcmdzLnBvc2l0aW9uLmxhdGl0dWRlO1xuICAgICAgICB0aGlzLnBvc3QubG5nID0gYXJncy5wb3NpdGlvbi5sb25naXR1ZGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZSBUYXBwZWQsIExhdDogXCIgKyBhcmdzLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSk7XG4gICAgfVxuXG4gICAgb25NYXJrZXJFdmVudChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuZXZlbnROYW1lKTtcbiAgICAgICAgLy8gaWYoYXJncy5ldmVudE5hbWUgPT0gJ21hcmtlckluZm9XaW5kb3dUYXBwZWQnKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYWdlL3Bvc3RzLycgKyBhcmdzLm1hcmtlci51c2VyRGF0YS5pZF0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTWFya2VyIEV2ZW50OiAnXCIgKyBhcmdzLmV2ZW50TmFtZVxuICAgICAgICAvLyAgICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXG4gICAgICAgIC8vICAgICArIFwiLCBMYXQ6IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZSk7XG4gICAgfVxuXG4gICAgb25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW1lcmEgY2hhbmdlZDogXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSksIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSA9PT0gdGhpcy5sYXN0Q2FtZXJhKTtcbiAgICAgICAgdGhpcy5sYXN0Q2FtZXJhID0gSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpO1xuICAgIH1cblxuICAgIGdvVG9NYXJrZXIoKSB7XG4gICAgICAgIHRoaXMubWFwVmlldy5sYXRpdHVkZSA9ICt0aGlzLnBvc3QubGF0O1xuICAgICAgICB0aGlzLm1hcFZpZXcubG9uZ2l0dWRlID0gK3RoaXMucG9zdC5sbmc7XG4gICAgICAgIHRoaXMubWFwVmlldy56b29tID0gMTc7XG4gICAgICAgIHRoaXMubWFwVmlldy51cGRhdGVDYW1lcmEoKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3LnVwZGF0ZVBhZGRpbmcoKTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc3QpO1xuICAgICAgICB0aGlzLmFwaVBvc3RTZXJ2aWNlLnNhdmVOZXdQb3N0KHRoaXMucG9zdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlIDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cyddKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UubWVzc2FnZSwgJ1dhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUgPyB0aXRsZSA6IFwiQVBQIE5BTUVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==