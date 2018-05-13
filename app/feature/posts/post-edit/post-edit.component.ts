import { Component, OnInit, ViewChild } from "@angular/core";
import {alert} from "tns-core-modules/ui/dialogs";
import {RouterExtensions} from "nativescript-angular";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiGetService, ApiPostService} from "../../../core/services";
import {MapView, Marker, Position} from "nativescript-google-maps-sdk";
import {Accuracy} from "tns-core-modules/ui/enums";
import {clearWatch, enableLocationRequest, Location, watchLocation} from "nativescript-geolocation";
import {postForm} from "../../../core/models";

interface postData {
    id: number;
    title: string;
    description: string;
    lat: number;
    lng: number;
    map_lat: number;
    map_lng: number;
    created_by: number;
    created_at: string;
    updated_at: string;
    editable : boolean;
    form : postForm
}
@Component({
    selector: "app-post-edit",
    moduleId: module.id,
    templateUrl: "./post-edit.component.html"
})
export class PostEditComponent implements OnInit {

    public buttonText = "Start location monitoring";
    public isMonitoring = false;
    public options;
    public listener;
    public monitorLongitude: string = "0";
    public monitorLatitude: string = "0";
    public monitorAltitude: string = "0";
    public monitorDirection: string = "0";
    public monitorSpeed: string = "0";


    zoom = 12;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    markerLatLng : string;

    id;
    returnUrl;
    post : postForm;
    postData : postData;
    loadData : boolean = false;
    isSubmiting : boolean = false;

    lastCamera: String;


    constructor(
        private routerExtensions: RouterExtensions,
        private route : ActivatedRoute,
        private apiPostService : ApiPostService,
        private apiGetService : ApiGetService,
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
            editable : false,
            form : this.post
        };

    }
    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

    }

    loadPost(_id : number) {
        this.loadData = true;
        this.apiGetService.getUserPost(_id)
            .subscribe((response : any) => {

                if(response.success == true) {
                    var post = response.posts;
                    this.postData.id = post.id;
                    this.postData.title = post.title;
                    this.postData.description = post.description;
                    this.postData.lat = post.lat;
                    this.postData.lng = post.lng;
                    this.postData.map_lat = post.lat;
                    this.postData.map_lng = post.lng;
                    this.postData.created_by = post.created_by;
                    this.postData.created_at = post.created_at;
                    this.postData.updated_at = post.updated_at;
                    this.postData.editable = false;
                    // /
                    this.post.id = post.id;
                    this.post.title = post.title;
                    this.post.description = post.description;
                    this.post.lat = post.lat;
                    this.post.lng = post.lng;


                    var marker = new Marker();
                    marker.position = Position.positionFromLatLng(this.post.lat, this.post.lng);
                    // marker.title = this.post.title;
                    marker.userData = this.postData;
                    this.mapView.addMarker(marker);

                    this.mapView.latitude = +this.post.lat;
                    this.mapView.longitude = +this.post.lng;
                    this.mapView.zoom = 15;
                    this.mapView.updateCamera();
                    this.mapView.updatePadding();
                }
                this.loadData = false;
                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });

    }

    //Map events
    onMapReady(event) {
        console.log('Map Ready');
        this.mapView = event.object;
        var gMap = event.gMap;
        // gMap.setMyLocationEnabled(true);
        this.mapView.myLocationEnabled = true;


        this.loadPost(this.id);
        // this.monitor();
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
        if(this.postData.editable) {
            this.mapView.removeAllMarkers();
            var marker = new Marker();
            marker.position = Position.positionFromLatLng(args.position.latitude, args.position.longitude);
            marker.userData = this.postData;
            this.mapView.addMarker(marker);
            this.post.lat = args.position.latitude;
            this.post.lng = args.position.longitude;
        }
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

        this.loadData = true;
        this.postData.editable = false;
        this.apiPostService.savePostEdit(this.post)
            .subscribe((response : any) => {
                    if(response.success == true) {
                        this.alert(response.message, 'Post Save');
                    }
                    else {
                        this.alert(response.message, 'Warning');
                    }
                    this.loadData = false;
                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });
    }

    onEdit() {
        this.postData.editable = true;
    }


    alert(message: string, title?: string) {
        return alert({
            title: title ? title : "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}
