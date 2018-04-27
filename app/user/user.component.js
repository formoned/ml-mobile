"use strict";
// import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {Router} from "@angular/router";
//
// @Component({
//     selector: 'app-user',
//     templateUrl: './user.component.html',
//     styleUrls: ['./user.component.scss'],
//     encapsulation: ViewEncapsulation.None
// })
// export class UserComponent implements OnInit {
//
//     constructor(private router : Router) { }
//
//     ngOnInit() {
//         if (localStorage.getItem('access_token') != null) {
//             this.router.navigate(['/']);
//         }
//         console.log('ngOnInit');
//     }
//
// }
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { alert, prompt } from "tns-core-modules/ui/dialogs";
var page_1 = require("tns-core-modules/ui/page");
var UserComponent = /** @class */ (function () {
    function UserComponent(router, page) {
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        // localStorage.removeItem('access_token');
        if (localStorage.getItem('access_token') != null) {
            this.router.navigate(['/home']);
        }
        else {
            this.router.navigate(['/login']);
        }
        this.page.actionBarHidden = true;
        this.isLoggingIn = this.router.url == '/login' ? true : false;
        // if(this.router.url == '/login') {
        //     this.isLoggingIn = true;
        // }
        // else if(this.router.url == '/signup') {
        //     this.isLoggingIn = false;
        // }
    }
    UserComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') != null) {
            this.router.navigate(['/home']);
        }
    };
    UserComponent.prototype.toggleForm = function () {
        if (this.isLoggingIn) {
            this.router.navigate(['/signup']);
        }
        else if (!this.isLoggingIn) {
            this.router.navigate(['/login']);
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: "app-user",
            moduleId: module.id,
            templateUrl: "./user.component.html",
            styleUrls: ['./user.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0VBQXNFO0FBQ3RFLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0YsZUFBZTtBQUNmLDRCQUE0QjtBQUM1Qiw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1QyxLQUFLO0FBQ0wsaURBQWlEO0FBQ2pELEVBQUU7QUFDRiwrQ0FBK0M7QUFDL0MsRUFBRTtBQUNGLG1CQUFtQjtBQUNuQiw4REFBOEQ7QUFDOUQsMkNBQTJDO0FBQzNDLFlBQVk7QUFDWixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLEVBQUU7QUFDRixJQUFJOztBQUVKLHNDQUF1RTtBQUN2RSwwQ0FBeUM7QUFDekMsK0RBQStEO0FBQy9ELGlEQUFnRDtBQVdoRDtJQUtJLHVCQUFvQixNQUFlLEVBQVUsSUFBVztRQUFwQyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTztRQUZ4RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdmLDJDQUEyQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUU5RCxvQ0FBb0M7UUFDcEMsK0JBQStCO1FBQy9CLElBQUk7UUFDSiwwQ0FBMEM7UUFDMUMsZ0NBQWdDO1FBQ2hDLElBQUk7SUFDUixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUVMLENBQUM7SUF2Q1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FNK0IsZUFBTSxFQUFpQixXQUFJO09BTC9DLGFBQWEsQ0F5Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuLy9cclxuLy8gQENvbXBvbmVudCh7XHJcbi8vICAgICBzZWxlY3RvcjogJ2FwcC11c2VyJyxcclxuLy8gICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLmNvbXBvbmVudC5odG1sJyxcclxuLy8gICAgIHN0eWxlVXJsczogWycuL3VzZXIuY29tcG9uZW50LnNjc3MnXSxcclxuLy8gICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxuLy8gfSlcclxuLy8gZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4vL1xyXG4vLyAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpIHsgfVxyXG4vL1xyXG4vLyAgICAgbmdPbkluaXQoKSB7XHJcbi8vICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSAhPSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ25nT25Jbml0Jyk7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vIH1cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHtMb2dpbkZvcm0sIFVzZXJ9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC11c2VyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi91c2VyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsIHByaXZhdGUgcGFnZSA6IFBhZ2UpIHtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRoaXMucm91dGVyLnVybCA9PSAnL2xvZ2luJyA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5yb3V0ZXIudXJsID09ICcvbG9naW4nKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmKHRoaXMucm91dGVyLnVybCA9PSAnL3NpZ251cCcpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRm9ybSgpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWdudXAnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoIXRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19