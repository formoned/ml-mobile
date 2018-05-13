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
        // gMap.setMyLocationEnabled(true);
        // gMap.myLocationButtonEnableds = true;
        this.mapView.myLocationEnabled = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBNEY7QUFDNUYsa0VBQThFO0FBRTlFLDBFQUF3RTtBQUN4RSw2RUFBeUY7QUFDekYsbURBQW1EO0FBRW5ELHFFQUFzRztBQUV0RyxnREFBa0Q7QUFFbEQsdURBQWtEO0FBQ2xELDBDQUE4RTtBQUc5RSxnRkFBZ0Y7QUFDaEYsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLHNDQUFPLEVBQVAsQ0FBTyxDQUFDLENBQUM7QUFtQjFDO0lBOEJJLHVCQUNZLE1BQWUsRUFDZixhQUE2QjtRQUQ3QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBOUJ6QyxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBS2pCLGVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUN6QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdyQixxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDL0Isb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIsb0JBQWUsR0FBVyxHQUFHLENBQUM7UUFDOUIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBR2xDLGFBQVEsR0FBSSxpQkFBaUIsQ0FBQztRQUM5QixjQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDL0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQVN2QixJQUFJLENBQUMsT0FBTyxHQUFHO1lB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QGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5pbXBvcnQge0NpcmNsZSwgTWFwVmlldywgTWFya2VyLCBQb2x5bGluZSwgUG9zaXRpb259IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHtBY2N1cmFjeX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCAqIGFzIHBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IExvY2F0aW9uLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIHdhdGNoTG9jYXRpb24sIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7QXBpR2V0U2VydmljZX0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXNcIjtcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQge2FsZXJ0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQge05hdmlnYXRpb25FeHRyYXMsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cbi8vIEltcG9ydGFudCAtIG11c3QgcmVnaXN0ZXIgTWFwVmlldyBwbHVnaW4gaW4gb3JkZXIgdG8gdXNlIGluIEFuZ3VsYXIgdGVtcGxhdGVzXG5yZWdpc3RlckVsZW1lbnQoJ01hcFZpZXcnLCAoKSA9PiBNYXBWaWV3KTtcblxuLy8gaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG4vLyBpbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmludGVyZmFjZSBtYXJrZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbGF0OiBudW1iZXI7XG4gICAgbG5nOiBudW1iZXI7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGxhYmVsPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBtYXJrZXJzIDogbWFya2VyW10gPSBbXTtcblxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIHB1YmxpYyBidXR0b25UZXh0ID0gXCJTdGFydCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XG4gICAgcHVibGljIGlzTW9uaXRvcmluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBvcHRpb25zO1xuICAgIHB1YmxpYyBsaXN0ZW5lcjtcbiAgICBwdWJsaWMgbW9uaXRvckxvbmdpdHVkZTogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIG1vbml0b3JMYXRpdHVkZTogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIG1vbml0b3JBbHRpdHVkZTogc3RyaW5nID0gXCIwXCI7XG4gICAgcHVibGljIG1vbml0b3JEaXJlY3Rpb246IHN0cmluZyA9IFwiMFwiO1xuICAgIHB1YmxpYyBtb25pdG9yU3BlZWQ6IHN0cmluZyA9IFwiMFwiO1xuXG5cbiAgICBsYXRpdHVkZSA9ICA1Ni42NTAyNTk3NzQ3NjY3NTtcbiAgICBsb25naXR1ZGUgPSAyMy43MjQyNzIzNDM0MDgxODg7XG4gICAgem9vbSA9IDEyO1xuICAgIG1pblpvb20gPSAwO1xuICAgIG1heFpvb20gPSAyMjtcbiAgICBiZWFyaW5nID0gMDtcbiAgICB0aWx0ID0gMDtcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xuXG4gICAgbGFzdENhbWVyYTogU3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFwaUdldFNlcnZpY2UgOiBBcGlHZXRTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcbiAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAwLjEsXG4gICAgICAgICAgICB1cGRhdGVUaW1lOiAzMDAwLFxuICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWU6IDEwMFxuICAgICAgICB9O1xuICAgICAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvblNpZGVCYXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuXG5cbiAgICAvL01hcCBldmVudHNcbiAgICBvbk1hcFJlYWR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xuICAgICAgICB2YXIgZ01hcCA9IGV2ZW50LmdNYXA7XG4gICAgICAgIC8vIGdNYXAuc2V0TXlMb2NhdGlvbkVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIC8vIGdNYXAubXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXBWaWV3Lm15TG9jYXRpb25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2FkVXNlclBvc3RzTWFya2VycygpO1xuICAgICAgICB0aGlzLm1vbml0b3IoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW9uaXRvcihhcmdzPykge1xuICAgICAgICAvLyA+PiBsb2NhdGlvbi1tb25pdG9yaW5nXG4gICAgICAgIGlmICh0aGlzLmlzTW9uaXRvcmluZykge1xuICAgICAgICAgICAgY2xlYXJXYXRjaCh0aGlzLmxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuaXNNb25pdG9yaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlN0YXJ0IGxvY2F0aW9uIG1vbml0b3JpbmdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB3YXRjaExvY2F0aW9uKChsb2M6IExvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1hcFZpZXcubGF0aXR1ZGUgPSBsb2MubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubWFwVmlldy5sb25naXR1ZGU9IGxvYy5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubWFwVmlldy56b29tID0gMjA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvYy5sb25naXR1ZGUgKyBcIiBcIiArIGxvYy5sYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckxvbmdpdHVkZSA9IChsb2MubG9uZ2l0dWRlKS50b0ZpeGVkKDQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMYXRpdHVkZSA9IChsb2MubGF0aXR1ZGUpLnRvRml4ZWQoNCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckFsdGl0dWRlID0gKGxvYy5hbHRpdHVkZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yRGlyZWN0aW9uID0gKGxvYy5kaXJlY3Rpb24pLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvclNwZWVkID0gKGxvYy5zcGVlZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNNb25pdG9yaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU3RvcCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gPDwgbG9jYXRpb24tbW9uaXRvcmluZ1xuICAgIH1cblxuICAgIG9uQ29vcmRpbmF0ZVRhcHBlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZSBUYXBwZWQsIExhdDogXCIgKyBhcmdzLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSk7XG4gICAgfVxuXG4gICAgb25NYXJrZXJFdmVudChhcmdzKSB7XG4gICAgICAgIGlmKGFyZ3MuZXZlbnROYW1lID09ICdtYXJrZXJJbmZvV2luZG93VGFwcGVkJykge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cy8nICsgYXJncy5tYXJrZXIudXNlckRhdGEuaWRdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgLy8gICAgICsgXCInIHRyaWdnZXJlZCBvbjogXCIgKyBhcmdzLm1hcmtlci50aXRsZVxuICAgICAgICAvLyAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUpO1xuICAgIH1cblxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG4gICAgICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMubWFwVmlldy5yZW1vdmVBbGxNYXJrZXJzKCk7XG4gICAgICAgIHRoaXMubG9hZFVzZXJQb3N0c01hcmtlcnMoKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3LmxhdGl0dWRlID0gK3RoaXMubW9uaXRvckxhdGl0dWRlO1xuICAgICAgICB0aGlzLm1hcFZpZXcubG9uZ2l0dWRlID0gK3RoaXMubW9uaXRvckxvbmdpdHVkZTtcbiAgICAgICAgdGhpcy5tYXBWaWV3Lnpvb20gPSA3O1xuICAgIH1cbiAgICBvbkFkZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9wb3N0cy9wb3N0L25ldyddKTtcbiAgICB9XG5cbiAgICBsb2FkVXNlclBvc3RzTWFya2VycygpIHtcbiAgICAgICAgdGhpcy5hcGlHZXRTZXJ2aWNlLmdldFVzZXJQb3N0c01hcmtlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3RzID0gcmVzcG9uc2UucG9zdHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHBvc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IE51bWJlcihwb3N0c1t2XS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBOdW1iZXIocG9zdHNbdl0ubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IE51bWJlcihwb3N0c1t2XS5sbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHBvc3RzW3ZdLmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHBvc3RzW3ZdLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBhIG1hcmtlci4uLlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyh0aGlzLm1hcmtlcnNbdl0ubGF0LCB0aGlzLm1hcmtlcnNbdl0ubG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci50aXRsZSA9IHRoaXMubWFya2Vyc1t2XS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHBvc3RzW3ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KChKU09OLnBhcnNlKGVycm9yLnRleHQoKSkpLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19