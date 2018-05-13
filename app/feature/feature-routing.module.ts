import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeatureComponent } from "./feature.component";

const routes: Routes = [
    // { path: "", component: FeatureComponent}
    { path: "", component: FeatureComponent,
        children : [
            {
                path: 'home',
                loadChildren: "./feature/home/home.module#HomeModule"
            },
            {
                path: 'posts',
                loadChildren: "./feature/posts/posts.module#PostsModule"
            },
            {
                path: 'settings',
                loadChildren: "./feature/settings/settings.module#SettingsModule"
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeatureRoutingModule { }
