"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var enums_1 = require("tns-core-modules/ui/enums");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var services_1 = require("../../core/services");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var router_1 = require("@angular/router");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, apiGetService) {
        this.router = router;
        this.apiGetService = apiGetService;
        this.markers = [];
        this.buttonText = "Start location monitoring";
        this.isMonitoring = false;
        this.monitorLongitude = "0";
        this.monitorLatitude = "0";
        this.monitorAltitude = "0";
        this.monitorDirection = "0";
        this.monitorSpeed = "0";
        this.latitude = 56.65025977476675;
        this.longitude = 23.724272343408188;
        this.zoom = 12;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
        this.options = {
            desiredAccuracy: enums_1.Accuracy.high,
            updateDistance: 0.1,
            updateTime: 3000,
            minimumUpdateTime: 100
        };
        nativescript_geolocation_1.enableLocationRequest(true);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    HomeComponent.prototype.onSideBarButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    //Map events
    HomeComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        var gMap = event.gMap;
        gMap.setMyLocationEnabled(true);
        this.loadUserPostsMarkers();
        this.monitor();
    };
    HomeComponent.prototype.monitor = function (args) {
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
                    // this.mapView.latitude = loc.latitude;
                    // this.mapView.longitude= loc.longitude;
                    // this.mapView.zoom = 20;
                    // console.log(loc.longitude + " " + loc.latitude);
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
    HomeComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude);
    };
    HomeComponent.prototype.onMarkerEvent = function (args) {
        if (args.eventName == 'markerInfoWindowTapped') {
            this.router.navigate(['/page/posts/' + args.marker.userData.id]);
        }
        // console.log("Marker Event: '" + args.eventName
        //     + "' triggered on: " + args.marker.title
        //     + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude);
    };
    HomeComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    HomeComponent.prototype.onRefresh = function () {
        this.mapView.removeAllMarkers();
        this.loadUserPostsMarkers();
        this.mapView.latitude = +this.monitorLatitude;
        this.mapView.longitude = +this.monitorLongitude;
        this.mapView.zoom = 7;
    };
    HomeComponent.prototype.onAdd = function () {
        this.router.navigate(['/page/posts/post/new']);
    };
    HomeComponent.prototype.loadUserPostsMarkers = function () {
        var _this = this;
        this.apiGetService.getUserPostsMarkers()
            .subscribe(function (response) {
            var posts = response.posts;
            _this.markers = [];
            for (var v in posts) {
                _this.markers.push({
                    id: Number(posts[v].id),
                    lat: Number(posts[v].lat),
                    lng: Number(posts[v].lng),
                    created_at: posts[v].created_at,
                    title: posts[v].title
                });
            }
            console.log("Setting a marker...");
            for (var v in _this.markers) {
                var marker = new nativescript_google_maps_sdk_1.Marker();
                marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(_this.markers[v].lat, _this.markers[v].lng);
                marker.title = _this.markers[v].title;
                marker.userData = posts[v];
                _this.mapView.addMarker(marker);
            }
        }, function (error) {
            dialogs_1.alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    HomeComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            services_1.ApiGetService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBNEY7QUFDNUYsa0VBQThFO0FBRTlFLDBFQUF3RTtBQUN4RSw2RUFBeUY7QUFDekYsbURBQW1EO0FBRW5ELHFFQUFzRztBQUV0RyxnREFBa0Q7QUFFbEQsdURBQWtEO0FBQ2xELDBDQUE4RTtBQUc5RSxnRkFBZ0Y7QUFDaEYsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLHNDQUFPLEVBQVAsQ0FBTyxDQUFDLENBQUM7QUFtQjFDO0lBOEJJLHVCQUNZLE1BQWUsRUFDZixhQUE2QjtRQUQ3QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBOUJ6QyxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBS2pCLGVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUN6QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdyQixxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDL0Isb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIsb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR2xDLGFBQVEsR0FBSSxpQkFBaUIsQ0FBQztRQUM5QixjQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDL0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQVN2QixJQUFJLENBQUMsT0FBTyxHQUFHO1lB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QUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEYsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDckMsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFDTCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsZUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsNkJBQUssR0FBTCxVQUFNLE9BQWU7UUFDakIsTUFBTSxDQUFDLGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuS29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MERBQUM7SUFKcEQsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FnQ3VCLGVBQU07WUFDQyx3QkFBYTtPQWhDaEMsYUFBYSxDQXdLekI7SUFBRCxvQkFBQztDQUFBLEFBeEtELElBd0tDO0FBeEtZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5pbXBvcnQge0NpcmNsZSwgTWFwVmlldywgTWFya2VyLCBQb2x5bGluZSwgUG9zaXRpb259IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xyXG5pbXBvcnQge0FjY3VyYWN5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xyXG5pbXBvcnQgKiBhcyBwZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIHdhdGNoTG9jYXRpb24sIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xyXG5pbXBvcnQge0FwaUdldFNlcnZpY2V9IGZyb20gXCIuLi8uLi9jb3JlL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcbmltcG9ydCB7YWxlcnR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG4vLyBJbXBvcnRhbnQgLSBtdXN0IHJlZ2lzdGVyIE1hcFZpZXcgcGx1Z2luIGluIG9yZGVyIHRvIHVzZSBpbiBBbmd1bGFyIHRlbXBsYXRlc1xyXG5yZWdpc3RlckVsZW1lbnQoJ01hcFZpZXcnLCAoKSA9PiBNYXBWaWV3KTtcclxuXHJcbi8vIGltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG4vLyBpbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcblxyXG5pbnRlcmZhY2UgbWFya2VyIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBsYXQ6IG51bWJlcjtcclxuICAgIGxuZzogbnVtYmVyO1xyXG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBtYXJrZXJzIDogbWFya2VyW10gPSBbXTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBwdWJsaWMgYnV0dG9uVGV4dCA9IFwiU3RhcnQgbG9jYXRpb24gbW9uaXRvcmluZ1wiO1xyXG4gICAgcHVibGljIGlzTW9uaXRvcmluZyA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9wdGlvbnM7XHJcbiAgICBwdWJsaWMgbGlzdGVuZXI7XHJcbiAgICBwdWJsaWMgbW9uaXRvckxvbmdpdHVkZTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICBwdWJsaWMgbW9uaXRvckxhdGl0dWRlOiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIHB1YmxpYyBtb25pdG9yQWx0aXR1ZGU6IHN0cmluZyA9IFwiMFwiO1xyXG4gICAgcHVibGljIG1vbml0b3JEaXJlY3Rpb246IHN0cmluZyA9IFwiMFwiO1xyXG4gICAgcHVibGljIG1vbml0b3JTcGVlZDogc3RyaW5nID0gXCIwXCI7XHJcblxyXG5cclxuICAgIGxhdGl0dWRlID0gIDU2LjY1MDI1OTc3NDc2Njc1O1xyXG4gICAgbG9uZ2l0dWRlID0gMjMuNzI0MjcyMzQzNDA4MTg4O1xyXG4gICAgem9vbSA9IDEyO1xyXG4gICAgbWluWm9vbSA9IDA7XHJcbiAgICBtYXhab29tID0gMjI7XHJcbiAgICBiZWFyaW5nID0gMDtcclxuICAgIHRpbHQgPSAwO1xyXG4gICAgcGFkZGluZyA9IFs0MCwgNDAsIDQwLCA0MF07XHJcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xyXG5cclxuICAgIGxhc3RDYW1lcmE6IFN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGFwaUdldFNlcnZpY2UgOiBBcGlHZXRTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgdXBkYXRlRGlzdGFuY2U6IDAuMSxcclxuICAgICAgICAgICAgdXBkYXRlVGltZTogMzAwMCxcclxuICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWU6IDEwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXHJcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uU2lkZUJhckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vTWFwIGV2ZW50c1xyXG4gICAgb25NYXBSZWFkeShldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcclxuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XHJcbiAgICAgICAgdmFyIGdNYXAgPSBldmVudC5nTWFwO1xyXG4gICAgICAgIGdNYXAuc2V0TXlMb2NhdGlvbkVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkVXNlclBvc3RzTWFya2VycygpO1xyXG4gICAgICAgIHRoaXMubW9uaXRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb25pdG9yKGFyZ3M/KSB7XHJcbiAgICAgICAgLy8gPj4gbG9jYXRpb24tbW9uaXRvcmluZ1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9uaXRvcmluZykge1xyXG4gICAgICAgICAgICBjbGVhcldhdGNoKHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlN0YXJ0IGxvY2F0aW9uIG1vbml0b3JpbmdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gd2F0Y2hMb2NhdGlvbigobG9jOiBMb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubWFwVmlldy5sYXRpdHVkZSA9IGxvYy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1hcFZpZXcubG9uZ2l0dWRlPSBsb2MubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubWFwVmlldy56b29tID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jLmxvbmdpdHVkZSArIFwiIFwiICsgbG9jLmxhdGl0dWRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMb25naXR1ZGUgPSAobG9jLmxvbmdpdHVkZSkudG9GaXhlZCg0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMYXRpdHVkZSA9IChsb2MubGF0aXR1ZGUpLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yQWx0aXR1ZGUgPSAobG9jLmFsdGl0dWRlKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckRpcmVjdGlvbiA9IChsb2MuZGlyZWN0aW9uKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvclNwZWVkID0gKGxvYy5zcGVlZCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNNb25pdG9yaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJTdG9wIGxvY2F0aW9uIG1vbml0b3JpbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gPDwgbG9jYXRpb24tbW9uaXRvcmluZ1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29vcmRpbmF0ZVRhcHBlZChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlIFRhcHBlZCwgTGF0OiBcIiArIGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1hcmtlckV2ZW50KGFyZ3MpIHtcclxuICAgICAgICBpZihhcmdzLmV2ZW50TmFtZSA9PSAnbWFya2VySW5mb1dpbmRvd1RhcHBlZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cy8nICsgYXJncy5tYXJrZXIudXNlckRhdGEuaWRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJNYXJrZXIgRXZlbnQ6ICdcIiArIGFyZ3MuZXZlbnROYW1lXHJcbiAgICAgICAgLy8gICAgICsgXCInIHRyaWdnZXJlZCBvbjogXCIgKyBhcmdzLm1hcmtlci50aXRsZVxyXG4gICAgICAgIC8vICAgICArIFwiLCBMYXQ6IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBjaGFuZ2VkOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSwgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpID09PSB0aGlzLmxhc3RDYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LnJlbW92ZUFsbE1hcmtlcnMoKTtcclxuICAgICAgICB0aGlzLmxvYWRVc2VyUG9zdHNNYXJrZXJzKCk7XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LmxhdGl0dWRlID0gK3RoaXMubW9uaXRvckxhdGl0dWRlO1xyXG4gICAgICAgIHRoaXMubWFwVmlldy5sb25naXR1ZGUgPSArdGhpcy5tb25pdG9yTG9uZ2l0dWRlO1xyXG4gICAgICAgIHRoaXMubWFwVmlldy56b29tID0gNztcclxuICAgIH1cclxuICAgIG9uQWRkKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhZ2UvcG9zdHMvcG9zdC9uZXcnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFVzZXJQb3N0c01hcmtlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5hcGlHZXRTZXJ2aWNlLmdldFVzZXJQb3N0c01hcmtlcnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3N0cyA9IHJlc3BvbnNlLnBvc3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gcG9zdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IE51bWJlcihwb3N0c1t2XS5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IE51bWJlcihwb3N0c1t2XS5sYXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBOdW1iZXIocG9zdHNbdl0ubG5nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHBvc3RzW3ZdLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG9zdHNbdl0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgYSBtYXJrZXIuLi5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyh0aGlzLm1hcmtlcnNbdl0ubGF0LCB0aGlzLm1hcmtlcnNbdl0ubG5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnRpdGxlID0gdGhpcy5tYXJrZXJzW3ZdLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIudXNlckRhdGEgPSBwb3N0c1t2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQVBQIE5BTUVcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=