import { NgModule, Component, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule implements OnInit {

    public people: Array<any>;

    public constructor() {
        this.people = [];
        console.log("Hello World");
    }

    public ngOnInit(){
        this.people.push({
            "firstname": "Nic",
            "lastname": "Raboy"
        });
    }
    // var http = require("http");

}
