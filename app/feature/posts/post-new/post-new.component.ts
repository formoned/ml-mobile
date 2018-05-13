import { Component, OnInit, ViewChild } from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {alert} from "tns-core-modules/ui/dialogs";
import {MapView, Marker, Position} from "nativescript-google-maps-sdk";
import {clearWatch, enableLocationRequest, Location, watchLocation} from "nativescript-geolocation";
import {ApiGetService, ApiPostService} from "../../../core/services";
import {ActivatedRoute, Router} from "@angular/router";
import {postForm} from "../../../core/models";
import {Accuracy} from "tns-core-modules/ui/enums";

@Component({
    selector: "app-post-new",
    moduleId: module.id,
    templateUrl: "./post-new.component.html"
})
export class PostNewComponent implements OnInit {

    public buttonText = "Start location monitoring";
    public isMonitoring = false;
    public options;
    public listener;
    public monitorLongitude: string = "0";
    public monitorLatitude: string = "0";
    public monitorAltitude: string = "0";
    public monitorDirection: string = "0";
    public monitorSpeed: string = "0";


    lat = -33.33;
    lng = 151.08;
    zoom = 12;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    firstMarker : boolean = true;

    id;
    returnUrl;
    post : postForm;
    loadData : boolean = false;
    isSubmiting : boolean = false;

    lastCamera: String;

    constructor(
        private routerExtensions: RouterExtensions,
        private route : ActivatedRoute,
        private apiPostService : ApiPostService,
        private router : Router
    ) {
        this.options = {
            desiredAccuracy: Accuracy.high,
            updateDistance: 0.1,
            updateTime: 3000,
            minimumUpdateTime: 100
        };
        enableLocationRequest(true);
        this.post = {
            id : null,
            title: '',
            description: '',
            lat: 0,
            lng: 0
        };
    }
    ngOnInit(): void {

    }

    //Map events
    onMapReady(event) {
        console.log('Map Ready');
        this.mapView = event.object;
        var gMap = event.gMap;
        this.mapView.myLocationEnabled = true;

        this.mapView.removeAllMarkers();
        var marker = new Marker();
        marker.position = Position.positionFromLatLng(this.lat, this.lng);
        this.mapView.addMarker(marker);
        this.post.lat = this.lat;
        this.post.lng = this.lng;
        this.monitor();
    }

    public monitor(args?) {
        // >> location-monitoring
        if (this.isMonitoring) {
            clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
        } else {
            this.listener = watchLocation((loc: Location) => {
                if (loc) {
                    if(this.firstMarker) {
                        this.mapView.removeAllMarkers();
                        var marker = new Marker();
                        marker.position = Position.positionFromLatLng(loc.latitude, loc.longitude);
                        this.mapView.addMarker(marker);
                        this.post.lat = loc.latitude;
                        this.post.lng = loc.longitude;
                        this.firstMarker = false;
                        this.goToMarker();
                    }
                    this.monitorLongitude = (loc.longitude).toFixed(4);
                    this.monitorLatitude = (loc.latitude).toFixed(4);
                    this.monitorAltitude = (loc.altitude).toFixed(2);
                    this.monitorDirection = (loc.direction).toFixed(2);
                    this.monitorSpeed = (loc.speed).toFixed(2);

                }
            }, (e) => {
                console.log("Error: " + e.message);
            }, this.options);

            this.isMonitoring = true;
            this.buttonText = "Stop location monitoring";
        }
        // << location-monitoring
    }

    onCoordinateTapped(args) {

        this.mapView.removeAllMarkers();
        var marker = new Marker();
        marker.position = Position.positionFromLatLng(args.position.latitude, args.position.longitude);
        this.mapView.addMarker(marker);
        this.post.lat = args.position.latitude;
        this.post.lng = args.position.longitude;
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude);
    }

    onMarkerEvent(args) {
        console.log(args.eventName);
        // if(args.eventName == 'markerInfoWindowTapped') {
        //     this.router.navigate(['/page/posts/' + args.marker.userData.id]);
        // }
        // console.log("Marker Event: '" + args.eventName
        //     + "' triggered on: " + args.marker.title
        //     + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

    goToMarker() {
        this.mapView.latitude = +this.post.lat;
        this.mapView.longitude = +this.post.lng;
        this.mapView.zoom = 17;
        this.mapView.updateCamera();
        this.mapView.updatePadding();
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    onSave() {
        this.isSubmiting = true;
        console.log(this.post);
        this.apiPostService.saveNewPost(this.post)
            .subscribe((response : any) => {
                    if(response.success == true) {
                        this.isSubmiting = false;
                        this.router.navigate(['/page/posts']);
                    }
                    else {
                        this.alert(response.message, 'Warning');
                    }
                    this.isSubmiting = false;

                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });

    }

    alert(message: string, title?: string) {
        return alert({
            title: title ? title : "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }

}
