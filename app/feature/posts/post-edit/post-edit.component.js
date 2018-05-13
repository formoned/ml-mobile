"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var services_1 = require("../../../core/services");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var enums_1 = require("tns-core-modules/ui/enums");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var PostEditComponent = /** @class */ (function () {
    function PostEditComponent(routerExtensions, route, apiPostService, apiGetService, router) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.apiPostService = apiPostService;
        this.apiGetService = apiGetService;
        this.router = router;
        this.buttonText = "Start location monitoring";
        this.isMonitoring = false;
        this.monitorLongitude = "0";
        this.monitorLatitude = "0";
        this.monitorAltitude = "0";
        this.monitorDirection = "0";
        this.monitorSpeed = "0";
        this.zoom = 12;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
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
        this.postData = {
            id: null,
            title: '',
            description: '',
            lat: null,
            lng: null,
            map_lat: null,
            map_lng: null,
            created_by: null,
            created_at: '',
            updated_at: '',
            editable: false,
            form: this.post
        };
    }
    PostEditComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    };
    PostEditComponent.prototype.loadPost = function (_id) {
        var _this = this;
        this.loadData = true;
        this.apiGetService.getUserPost(_id)
            .subscribe(function (response) {
            if (response.success == true) {
                var post = response.posts;
                _this.postData.id = post.id;
                _this.postData.title = post.title;
                _this.postData.description = post.description;
                _this.postData.lat = post.lat;
                _this.postData.lng = post.lng;
                _this.postData.map_lat = post.lat;
                _this.postData.map_lng = post.lng;
                _this.postData.created_by = post.created_by;
                _this.postData.created_at = post.created_at;
                _this.postData.updated_at = post.updated_at;
                _this.postData.editable = false;
                // /
                _this.post.id = post.id;
                _this.post.title = post.title;
                _this.post.description = post.description;
                _this.post.lat = post.lat;
                _this.post.lng = post.lng;
                var marker = new nativescript_google_maps_sdk_1.Marker();
                marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(_this.post.lat, _this.post.lng);
                // marker.title = this.post.title;
                marker.userData = _this.postData;
                _this.mapView.addMarker(marker);
                _this.mapView.latitude = +_this.post.lat;
                _this.mapView.longitude = +_this.post.lng;
                _this.mapView.zoom = 15;
                _this.mapView.updateCamera();
                _this.mapView.updatePadding();
            }
            _this.loadData = false;
        }, function (error) {
            dialogs_1.alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    //Map events
    PostEditComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        var gMap = event.gMap;
        gMap.setMyLocationEnabled(true);
        this.loadPost(this.id);
        this.monitor();
    };
    PostEditComponent.prototype.monitor = function (args) {
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
    PostEditComponent.prototype.onCoordinateTapped = function (args) {
        if (this.postData.editable) {
            this.mapView.removeAllMarkers();
            var marker = new nativescript_google_maps_sdk_1.Marker();
            marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.position.latitude, args.position.longitude);
            marker.userData = this.postData;
            this.mapView.addMarker(marker);
            this.post.lat = args.position.latitude;
            this.post.lng = args.position.longitude;
        }
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude);
    };
    PostEditComponent.prototype.onMarkerEvent = function (args) {
        console.log(args.eventName);
        // if(args.eventName == 'markerInfoWindowTapped') {
        //     this.router.navigate(['/page/posts/' + args.marker.userData.id]);
        // }
        // console.log("Marker Event: '" + args.eventName
        //     + "' triggered on: " + args.marker.title
        //     + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude);
    };
    PostEditComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    PostEditComponent.prototype.goToMarker = function () {
        this.mapView.latitude = +this.post.lat;
        this.mapView.longitude = +this.post.lng;
        this.mapView.zoom = 17;
        this.mapView.updateCamera();
        this.mapView.updatePadding();
    };
    PostEditComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    PostEditComponent.prototype.onSave = function () {
        var _this = this;
        this.loadData = true;
        this.postData.editable = false;
        this.apiPostService.savePostEdit(this.post)
            .subscribe(function (response) {
            if (response.success == true) {
                _this.alert(response.message, 'Post Save');
            }
            else {
                _this.alert(response.message, 'Warning');
            }
            _this.loadData = false;
        }, function (error) {
            dialogs_1.alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    PostEditComponent.prototype.onEdit = function () {
        this.postData.editable = true;
    };
    PostEditComponent.prototype.alert = function (message, title) {
        return dialogs_1.alert({
            title: title ? title : "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    PostEditComponent = __decorate([
        core_1.Component({
            selector: "app-post-edit",
            moduleId: module.id,
            templateUrl: "./post-edit.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute,
            services_1.ApiPostService,
            services_1.ApiGetService,
            router_1.Router])
    ], PostEditComponent);
    return PostEditComponent;
}());
exports.PostEditComponent = PostEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsdURBQWtEO0FBQ2xELDZEQUFzRDtBQUN0RCwwQ0FBdUQ7QUFDdkQsbURBQXFFO0FBQ3JFLDZFQUF1RTtBQUN2RSxtREFBbUQ7QUFDbkQscUVBQW9HO0FBc0JwRztJQWlDSSwyQkFDWSxnQkFBa0MsRUFDbEMsS0FBc0IsRUFDdEIsY0FBK0IsRUFDL0IsYUFBNkIsRUFDN0IsTUFBZTtRQUpmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBcENwQixlQUFVLEdBQUcsMkJBQTJCLENBQUM7UUFDekMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLG9CQUFlLEdBQVcsR0FBRyxDQUFDO1FBQzlCLG9CQUFlLEdBQVcsR0FBRyxDQUFDO1FBQzlCLHFCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUMvQixpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUdsQyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBUzNCLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFZMUIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7WUFDOUIsY0FBYyxFQUFFLEdBQUc7WUFDbkIsVUFBVSxFQUFFLElBQUk7WUFDaEIsaUJBQWlCLEVBQUUsR0FBRztTQUN6QixDQUFDO1FBQ0YsZ0RBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLEVBQUUsRUFBRyxJQUFJO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLEVBQUUsRUFBRSxJQUFJO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLEdBQUcsRUFBRSxJQUFJO1lBQ1QsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRyxLQUFLO1lBQ2hCLElBQUksRUFBRyxJQUFJLENBQUMsSUFBSTtTQUNuQixDQUFDO0lBRU4sQ0FBQztJQUNELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxpRUFBaUU7SUFFckUsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxHQUFZO1FBQXJCLGlCQTZDQztRQTVDRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUMsUUFBYztZQUV0QixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSTtnQkFDSixLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QixLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUN6QyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFD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O0lBQ1AsQ0FBQztJQXJPUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7eUNBbUNnQyx1Q0FBZ0I7WUFDMUIsdUJBQWM7WUFDTCx5QkFBYztZQUNmLHdCQUFhO1lBQ3BCLGVBQU07T0F0Q2xCLGlCQUFpQixDQXNPN0I7SUFBRCx3QkFBQztDQUFBLEFBdE9ELElBc09DO0FBdE9ZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge2FsZXJ0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FwaUdldFNlcnZpY2UsIEFwaVBvc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQge01hcFZpZXcsIE1hcmtlciwgUG9zaXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCI7XHJcbmltcG9ydCB7QWNjdXJhY3l9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XHJcbmltcG9ydCB7Y2xlYXJXYXRjaCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQge3Bvc3RGb3JtfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9tb2RlbHNcIjtcclxuXHJcbmludGVyZmFjZSBwb3N0RGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBsYXQ6IG51bWJlcjtcclxuICAgIGxuZzogbnVtYmVyO1xyXG4gICAgbWFwX2xhdDogbnVtYmVyO1xyXG4gICAgbWFwX2xuZzogbnVtYmVyO1xyXG4gICAgY3JlYXRlZF9ieTogbnVtYmVyO1xyXG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xyXG4gICAgdXBkYXRlZF9hdDogc3RyaW5nO1xyXG4gICAgZWRpdGFibGUgOiBib29sZWFuO1xyXG4gICAgZm9ybSA6IHBvc3RGb3JtXHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtcG9zdC1lZGl0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0LWVkaXQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBidXR0b25UZXh0ID0gXCJTdGFydCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XHJcbiAgICBwdWJsaWMgaXNNb25pdG9yaW5nID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb3B0aW9ucztcclxuICAgIHB1YmxpYyBsaXN0ZW5lcjtcclxuICAgIHB1YmxpYyBtb25pdG9yTG9uZ2l0dWRlOiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIHB1YmxpYyBtb25pdG9yTGF0aXR1ZGU6IHN0cmluZyA9IFwiMFwiO1xyXG4gICAgcHVibGljIG1vbml0b3JBbHRpdHVkZTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICBwdWJsaWMgbW9uaXRvckRpcmVjdGlvbjogc3RyaW5nID0gXCIwXCI7XHJcbiAgICBwdWJsaWMgbW9uaXRvclNwZWVkOiBzdHJpbmcgPSBcIjBcIjtcclxuXHJcblxyXG4gICAgem9vbSA9IDEyO1xyXG4gICAgbWluWm9vbSA9IDA7XHJcbiAgICBtYXhab29tID0gMjI7XHJcbiAgICBiZWFyaW5nID0gMDtcclxuICAgIHRpbHQgPSAwO1xyXG4gICAgcGFkZGluZyA9IFs0MCwgNDAsIDQwLCA0MF07XHJcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xyXG5cclxuICAgIG1hcmtlckxhdExuZyA6IHN0cmluZztcclxuXHJcbiAgICBpZDtcclxuICAgIHJldHVyblVybDtcclxuICAgIHBvc3QgOiBwb3N0Rm9ybTtcclxuICAgIHBvc3REYXRhIDogcG9zdERhdGE7XHJcbiAgICBsb2FkRGF0YSA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzU3VibWl0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGxhc3RDYW1lcmE6IFN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGUgOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGFwaVBvc3RTZXJ2aWNlIDogQXBpUG9zdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlHZXRTZXJ2aWNlIDogQXBpR2V0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAwLjEsXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWU6IDMwMDAsXHJcbiAgICAgICAgICAgIG1pbmltdW1VcGRhdGVUaW1lOiAxMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCh0cnVlKTtcclxuICAgICAgICB0aGlzLnBvc3QgPSB7XHJcbiAgICAgICAgICAgIGlkIDogbnVsbCxcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIGxhdDogMCxcclxuICAgICAgICAgICAgbG5nOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvc3REYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIGxhdDogbnVsbCxcclxuICAgICAgICAgICAgbG5nOiBudWxsLFxyXG4gICAgICAgICAgICBtYXBfbGF0OiBudWxsLFxyXG4gICAgICAgICAgICBtYXBfbG5nOiBudWxsLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2J5OiBudWxsLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiAnJyxcclxuICAgICAgICAgICAgdXBkYXRlZF9hdDogJycsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcm0gOiB0aGlzLnBvc3RcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcclxuICAgICAgICAvLyB0aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUG9zdChfaWQgOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWREYXRhID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFwaUdldFNlcnZpY2UuZ2V0VXNlclBvc3QoX2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSA6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3N0ID0gcmVzcG9uc2UucG9zdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RGF0YS5pZCA9IHBvc3QuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RGF0YS50aXRsZSA9IHBvc3QudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RGF0YS5kZXNjcmlwdGlvbiA9IHBvc3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RGF0YS5sYXQgPSBwb3N0LmxhdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3REYXRhLmxuZyA9IHBvc3QubG5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdERhdGEubWFwX2xhdCA9IHBvc3QubGF0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdERhdGEubWFwX2xuZyA9IHBvc3QubG5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdERhdGEuY3JlYXRlZF9ieSA9IHBvc3QuY3JlYXRlZF9ieTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3REYXRhLmNyZWF0ZWRfYXQgPSBwb3N0LmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RGF0YS51cGRhdGVkX2F0ID0gcG9zdC51cGRhdGVkX2F0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdERhdGEuZWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAvXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0LmlkID0gcG9zdC5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QudGl0bGUgPSBwb3N0LnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdC5kZXNjcmlwdGlvbiA9IHBvc3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0LmxhdCA9IHBvc3QubGF0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdC5sbmcgPSBwb3N0LmxuZztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMucG9zdC5sYXQsIHRoaXMucG9zdC5sbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlci50aXRsZSA9IHRoaXMucG9zdC50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXIudXNlckRhdGEgPSB0aGlzLnBvc3REYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmxhdGl0dWRlID0gK3RoaXMucG9zdC5sYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmxvbmdpdHVkZSA9ICt0aGlzLnBvc3QubG5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy56b29tID0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LnVwZGF0ZUNhbWVyYSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwVmlldy51cGRhdGVQYWRkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KChKU09OLnBhcnNlKGVycm9yLnRleHQoKSkpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9NYXAgZXZlbnRzXHJcbiAgICBvbk1hcFJlYWR5KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcCBSZWFkeScpO1xyXG4gICAgICAgIHRoaXMubWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcclxuICAgICAgICB2YXIgZ01hcCA9IGV2ZW50LmdNYXA7XHJcbiAgICAgICAgZ01hcC5zZXRNeUxvY2F0aW9uRW5hYmxlZCh0cnVlKTtcclxuICAgICAgICB0aGlzLmxvYWRQb3N0KHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMubW9uaXRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb25pdG9yKGFyZ3M/KSB7XHJcbiAgICAgICAgLy8gPj4gbG9jYXRpb24tbW9uaXRvcmluZ1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9uaXRvcmluZykge1xyXG4gICAgICAgICAgICBjbGVhcldhdGNoKHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlN0YXJ0IGxvY2F0aW9uIG1vbml0b3JpbmdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gd2F0Y2hMb2NhdGlvbigobG9jOiBMb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckxvbmdpdHVkZSA9IChsb2MubG9uZ2l0dWRlKS50b0ZpeGVkKDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckxhdGl0dWRlID0gKGxvYy5sYXRpdHVkZSkudG9GaXhlZCg0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JBbHRpdHVkZSA9IChsb2MuYWx0aXR1ZGUpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yRGlyZWN0aW9uID0gKGxvYy5kaXJlY3Rpb24pLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yU3BlZWQgPSAobG9jLnNwZWVkKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc01vbml0b3JpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlN0b3AgbG9jYXRpb24gbW9uaXRvcmluZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyA8PCBsb2NhdGlvbi1tb25pdG9yaW5nXHJcbiAgICB9XHJcblxyXG4gICAgb25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcclxuICAgICAgICBpZih0aGlzLnBvc3REYXRhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwVmlldy5yZW1vdmVBbGxNYXJrZXJzKCk7XHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhhcmdzLnBvc2l0aW9uLmxhdGl0dWRlLCBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSk7XHJcbiAgICAgICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHRoaXMucG9zdERhdGE7XHJcbiAgICAgICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgdGhpcy5wb3N0LmxhdCA9IGFyZ3MucG9zaXRpb24ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdC5sbmcgPSBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlIFRhcHBlZCwgTGF0OiBcIiArIGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1hcmtlckV2ZW50KGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmV2ZW50TmFtZSk7XHJcbiAgICAgICAgLy8gaWYoYXJncy5ldmVudE5hbWUgPT0gJ21hcmtlckluZm9XaW5kb3dUYXBwZWQnKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhZ2UvcG9zdHMvJyArIGFyZ3MubWFya2VyLnVzZXJEYXRhLmlkXSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTWFya2VyIEV2ZW50OiAnXCIgKyBhcmdzLmV2ZW50TmFtZVxyXG4gICAgICAgIC8vICAgICArIFwiJyB0cmlnZ2VyZWQgb246IFwiICsgYXJncy5tYXJrZXIudGl0bGVcclxuICAgICAgICAvLyAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW1lcmEgY2hhbmdlZDogXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSksIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSA9PT0gdGhpcy5sYXN0Q2FtZXJhKTtcclxuICAgICAgICB0aGlzLmxhc3RDYW1lcmEgPSBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub01hcmtlcigpIHtcclxuICAgICAgICB0aGlzLm1hcFZpZXcubGF0aXR1ZGUgPSArdGhpcy5wb3N0LmxhdDtcclxuICAgICAgICB0aGlzLm1hcFZpZXcubG9uZ2l0dWRlID0gK3RoaXMucG9zdC5sbmc7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3Lnpvb20gPSAxNztcclxuICAgICAgICB0aGlzLm1hcFZpZXcudXBkYXRlQ2FtZXJhKCk7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LnVwZGF0ZVBhZGRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2F2ZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS5lZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBpUG9zdFNlcnZpY2Uuc2F2ZVBvc3RFZGl0KHRoaXMucG9zdClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5tZXNzYWdlLCAnUG9zdCBTYXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UsICdXYXJuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRWRpdCgpIHtcclxuICAgICAgICB0aGlzLnBvc3REYXRhLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSA/IHRpdGxlIDogXCJBUFAgTkFNRVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==