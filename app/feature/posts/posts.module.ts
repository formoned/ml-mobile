import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoreModule } from "../../core/core.module";
import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts.component";
import {PostNewComponent} from "./post-new/post-new.component";
import {PostEditComponent} from "./post-edit/post-edit.component";
import {NativeScriptFormsModule} from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PostsRoutingModule,
        NativeScriptFormsModule,
        CoreModule
    ],
    declarations: [
        PostsComponent,
        PostNewComponent,
        PostEditComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PostsModule { }
