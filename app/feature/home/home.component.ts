import { Component, OnInit, ViewChild } from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";

import { registerElement } from 'nativescript-angular/element-registry';
import {Circle, MapView, Marker, Polyline, Position} from 'nativescript-google-maps-sdk';
import {Accuracy} from "tns-core-modules/ui/enums";
import * as permissions from "nativescript-permissions";
import { Location, enableLocationRequest, watchLocation, clearWatch } from "nativescript-geolocation";
import { SegmentedBarItem } from "ui/segmented-bar";
import {ApiGetService} from "../../core/services";
import {Color} from "tns-core-modules/color";
import {alert} from "tns-core-modules/ui/dialogs";
import {NavigationExtras, Router, RouterStateSnapshot} from "@angular/router";


// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

// import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
// import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

interface marker {
    id: number;
    lat: number;
    lng: number;
    created_at: string;
    title?: string;
    label?: string;
}

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    markers : marker[] = [];

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;

    public buttonText = "Start location monitoring";
    public isMonitoring = false;
    public options;
    public listener;
    public monitorLongitude: string = "0";
    public monitorLatitude: string = "0";
    public monitorAltitude: string = "0";
    public monitorDirection: string = "0";
    public monitorSpeed: string = "0";


    latitude =  56.65025977476675;
    longitude = 23.724272343408188;
    zoom = 12;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    constructor(
        private router : Router,
        private apiGetService : ApiGetService
    ) {
        this.options = {
            desiredAccuracy: Accuracy.high,
            updateDistance: 0.1,
            updateTime: 3000,
            minimumUpdateTime: 100
        };
        enableLocationRequest(true);

    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }


    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onSideBarButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }



    //Map events
    onMapReady(event) {
        console.log('Map Ready');
        this.mapView = event.object;
        var gMap = event.gMap;
        // gMap.setMyLocationEnabled(true);
        // gMap.myLocationButtonEnableds = true;
        this.mapView.myLocationEnabled = true;
        this.loadUserPostsMarkers();
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
                    // this.mapView.latitude = loc.latitude;
                    // this.mapView.longitude= loc.longitude;
                    // this.mapView.zoom = 20;
                    // console.log(loc.longitude + " " + loc.latitude);
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
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude);
    }

    onMarkerEvent(args) {
        if(args.eventName == 'markerInfoWindowTapped') {
            this.router.navigate(['/page/posts/' + args.marker.userData.id]);
        }
        // console.log("Marker Event: '" + args.eventName
        //     + "' triggered on: " + args.marker.title
        //     + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

    onRefresh() {
        this.mapView.removeAllMarkers();
        this.loadUserPostsMarkers();
        this.mapView.latitude = +this.monitorLatitude;
        this.mapView.longitude = +this.monitorLongitude;
        this.mapView.zoom = 7;
    }
    onAdd() {
        this.router.navigate(['/page/posts/post/new']);
    }

    loadUserPostsMarkers() {
        this.apiGetService.getUserPostsMarkers()
            .subscribe((response : any) => {
                    var posts = response.posts;
                    this.markers = [];
                    for (var v in posts) {
                        this.markers.push({
                            id: Number(posts[v].id),
                            lat: Number(posts[v].lat),
                            lng: Number(posts[v].lng),
                            created_at: posts[v].created_at,
                            title: posts[v].title
                        });
                    }

                    console.log("Setting a marker...");

                    for (var v in this.markers) {
                        var marker = new Marker();
                        marker.position = Position.positionFromLatLng(this.markers[v].lat, this.markers[v].lng);
                        marker.title = this.markers[v].title;
                        marker.userData = posts[v];
                        this.mapView.addMarker(marker);
                    }
                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });
    }
    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}
