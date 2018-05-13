import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiGetService} from "../../core/services";
// import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
// import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}

interface post {
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
}

@Component({
    selector: "app-posts",
    moduleId: module.id,
    templateUrl: "./posts.component.html"
})
export class PostsComponent implements OnInit {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;

    posts : post[] = [];
    isSubmiting : boolean = false;
    id;
    constructor(
        private apiGetService : ApiGetService,
        private router : Router,
        private route : ActivatedRoute
) {

}
    ngOnInit(): void {
        if(this.route.snapshot.params['id'])
        {
            this.router.navigate(["/page/posts/open/"+this.route.snapshot.params['id']]);
        }

        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.loadPosts();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    onSideBarButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    loadPosts() {
        this.isSubmiting = true;
        this.apiGetService.getUserPosts()
            .subscribe((response : any) => {
                    var posts = response.posts;
                    this.posts = [];
                    for (var v in posts) {
                        this.posts.push({
                            id: Number(posts[v].id),
                            title: posts[v].title,
                            description: posts[v].description,
                            lat: Number(posts[v].lat),
                            lng: Number(posts[v].lng),
                            map_lat: Number(posts[v].lat),
                            map_lng: Number(posts[v].lng),
                            created_by: Number(posts[v].created_by),
                            created_at: posts[v].created_at,
                            updated_at: posts[v].updated_at
                        });
                    }
                    this.isSubmiting = false;
                    // this.posts = response.json().posts;
                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });
    }

    onItemTap(event) {
        console.log(event);
        this.router.navigate(['/page/posts/open/' + event.id]);
    }

    onRefresh() {
        this.loadPosts();
    }

    onAdd() {
        this.router.navigate(['/page/posts/post/new']);
    }
}
