import { NgModule, Component, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        UserRoutingModule,
        SharedModule
    ],
    declarations: [
        UserComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UserModule implements OnInit {

    public people: Array<any>;

    public constructor() {
        console.log("Hello World");
    }

    public ngOnInit(){}

}