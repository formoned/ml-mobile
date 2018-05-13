import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PostsComponent } from "./posts.component";
import {PostNewComponent} from "./post-new/post-new.component";
import {PostEditComponent} from "./post-edit/post-edit.component";

const routes: Routes = [
    { path: "", component: PostsComponent },
    { path: ":id", component: PostsComponent },
    { path: "post/new", component: PostNewComponent },
    { path: "open/:id", component: PostEditComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PostsRoutingModule { }
