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
        gMap.setMyLocationEnabled(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1uZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1uZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUFzRDtBQUN0RCx1REFBa0Q7QUFDbEQsNkVBQXVFO0FBQ3ZFLHFFQUFvRztBQUNwRyxtREFBcUU7QUFDckUsMENBQXVEO0FBRXZELG1EQUFtRDtBQU9uRDtJQWlDSSwwQkFDWSxnQkFBa0MsRUFDbEMsS0FBc0IsRUFDdEIsY0FBK0IsRUFDL0IsTUFBZTtRQUhmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVM7UUFuQ3BCLGVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUN6QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdyQixxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDL0Isb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIsb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR2xDLFFBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNiLFFBQUcsR0FBRyxNQUFNLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRzNCLGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBSzdCLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcs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LENBQUM7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFDakMsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhMUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7eUNBbUNnQyx1Q0FBZ0I7WUFDMUIsdUJBQWM7WUFDTCx5QkFBYztZQUN0QixlQUFNO09BckNsQixnQkFBZ0IsQ0FrTDVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxMRCxJQWtMQztBQWxMWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHthbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQge01hcFZpZXcsIE1hcmtlciwgUG9zaXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCI7XHJcbmltcG9ydCB7Y2xlYXJXYXRjaCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQge0FwaUdldFNlcnZpY2UsIEFwaVBvc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtwb3N0Rm9ybX0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvbW9kZWxzXCI7XHJcbmltcG9ydCB7QWNjdXJhY3l9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1wb3N0LW5ld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1uZXcuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdE5ld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGJ1dHRvblRleHQgPSBcIlN0YXJ0IGxvY2F0aW9uIG1vbml0b3JpbmdcIjtcclxuICAgIHB1YmxpYyBpc01vbml0b3JpbmcgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvcHRpb25zO1xyXG4gICAgcHVibGljIGxpc3RlbmVyO1xyXG4gICAgcHVibGljIG1vbml0b3JMb25naXR1ZGU6IHN0cmluZyA9IFwiMFwiO1xyXG4gICAgcHVibGljIG1vbml0b3JMYXRpdHVkZTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICBwdWJsaWMgbW9uaXRvckFsdGl0dWRlOiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIHB1YmxpYyBtb25pdG9yRGlyZWN0aW9uOiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIHB1YmxpYyBtb25pdG9yU3BlZWQ6IHN0cmluZyA9IFwiMFwiO1xyXG5cclxuXHJcbiAgICBsYXQgPSAtMzMuMzM7XHJcbiAgICBsbmcgPSAxNTEuMDg7XHJcbiAgICB6b29tID0gMTI7XHJcbiAgICBtaW5ab29tID0gMDtcclxuICAgIG1heFpvb20gPSAyMjtcclxuICAgIGJlYXJpbmcgPSAwO1xyXG4gICAgdGlsdCA9IDA7XHJcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcclxuICAgIG1hcFZpZXc6IE1hcFZpZXc7XHJcblxyXG4gICAgZmlyc3RNYXJrZXIgOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBpZDtcclxuICAgIHJldHVyblVybDtcclxuICAgIHBvc3QgOiBwb3N0Rm9ybTtcclxuICAgIGxvYWREYXRhIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNTdWJtaXRpbmcgOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbGFzdENhbWVyYTogU3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHJvdXRlIDogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlQb3N0U2VydmljZSA6IEFwaVBvc3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgdXBkYXRlRGlzdGFuY2U6IDAuMSxcclxuICAgICAgICAgICAgdXBkYXRlVGltZTogMzAwMCxcclxuICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWU6IDEwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUpO1xyXG4gICAgICAgIHRoaXMucG9zdCA9IHtcclxuICAgICAgICAgICAgaWQgOiBudWxsLFxyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgbGF0OiAwLFxyXG4gICAgICAgICAgICBsbmc6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vTWFwIGV2ZW50c1xyXG4gICAgb25NYXBSZWFkeShldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcclxuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XHJcbiAgICAgICAgdmFyIGdNYXAgPSBldmVudC5nTWFwO1xyXG4gICAgICAgIGdNYXAuc2V0TXlMb2NhdGlvbkVuYWJsZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwVmlldy5yZW1vdmVBbGxNYXJrZXJzKCk7XHJcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcclxuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy5sYXQsIHRoaXMubG5nKTtcclxuICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgdGhpcy5wb3N0LmxhdCA9IHRoaXMubGF0O1xyXG4gICAgICAgIHRoaXMucG9zdC5sbmcgPSB0aGlzLmxuZztcclxuICAgICAgICB0aGlzLm1vbml0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9uaXRvcihhcmdzPykge1xyXG4gICAgICAgIC8vID4+IGxvY2F0aW9uLW1vbml0b3JpbmdcclxuICAgICAgICBpZiAodGhpcy5pc01vbml0b3JpbmcpIHtcclxuICAgICAgICAgICAgY2xlYXJXYXRjaCh0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5pc01vbml0b3JpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTdGFydCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHdhdGNoTG9jYXRpb24oKGxvYzogTG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZpcnN0TWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy5yZW1vdmVBbGxNYXJrZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsb2MubGF0aXR1ZGUsIGxvYy5sb25naXR1ZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdC5sYXQgPSBsb2MubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdC5sbmcgPSBsb2MubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0TWFya2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub01hcmtlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMb25naXR1ZGUgPSAobG9jLmxvbmdpdHVkZSkudG9GaXhlZCg0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMYXRpdHVkZSA9IChsb2MubGF0aXR1ZGUpLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yQWx0aXR1ZGUgPSAobG9jLmFsdGl0dWRlKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckRpcmVjdGlvbiA9IChsb2MuZGlyZWN0aW9uKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvclNwZWVkID0gKGxvYy5zcGVlZCkudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU3RvcCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIDw8IGxvY2F0aW9uLW1vbml0b3JpbmdcclxuICAgIH1cclxuXHJcbiAgICBvbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xyXG5cclxuICAgICAgICB0aGlzLm1hcFZpZXcucmVtb3ZlQWxsTWFya2VycygpO1xyXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUsIGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlKTtcclxuICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgdGhpcy5wb3N0LmxhdCA9IGFyZ3MucG9zaXRpb24ubGF0aXR1ZGU7XHJcbiAgICAgICAgdGhpcy5wb3N0LmxuZyA9IGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZSBUYXBwZWQsIExhdDogXCIgKyBhcmdzLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYXJrZXJFdmVudChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5ldmVudE5hbWUpO1xyXG4gICAgICAgIC8vIGlmKGFyZ3MuZXZlbnROYW1lID09ICdtYXJrZXJJbmZvV2luZG93VGFwcGVkJykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYWdlL3Bvc3RzLycgKyBhcmdzLm1hcmtlci51c2VyRGF0YS5pZF0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcclxuICAgICAgICAvLyAgICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXHJcbiAgICAgICAgLy8gICAgICsgXCIsIExhdDogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbWVyYUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2FtZXJhID0gSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9NYXJrZXIoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LmxhdGl0dWRlID0gK3RoaXMucG9zdC5sYXQ7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LmxvbmdpdHVkZSA9ICt0aGlzLnBvc3QubG5nO1xyXG4gICAgICAgIHRoaXMubWFwVmlldy56b29tID0gMTc7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LnVwZGF0ZUNhbWVyYSgpO1xyXG4gICAgICAgIHRoaXMubWFwVmlldy51cGRhdGVQYWRkaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N1Ym1pdGluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3N0KTtcclxuICAgICAgICB0aGlzLmFwaVBvc3RTZXJ2aWNlLnNhdmVOZXdQb3N0KHRoaXMucG9zdClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYWdlL3Bvc3RzJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5tZXNzYWdlLCAnV2FybmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgoSlNPTi5wYXJzZShlcnJvci50ZXh0KCkpKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUgPyB0aXRsZSA6IFwiQVBQIE5BTUVcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19