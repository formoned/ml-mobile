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
            this.router.navigate(['/']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0VBQXNFO0FBQ3RFLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0YsZUFBZTtBQUNmLDRCQUE0QjtBQUM1Qiw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1QyxLQUFLO0FBQ0wsaURBQWlEO0FBQ2pELEVBQUU7QUFDRiwrQ0FBK0M7QUFDL0MsRUFBRTtBQUNGLG1CQUFtQjtBQUNuQiw4REFBOEQ7QUFDOUQsMkNBQTJDO0FBQzNDLFlBQVk7QUFDWixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLEVBQUU7QUFDRixJQUFJOztBQUVKLHNDQUF1RTtBQUN2RSwwQ0FBeUM7QUFDekMsK0RBQStEO0FBQy9ELGlEQUFnRDtBQVdoRDtJQUtJLHVCQUFvQixNQUFlLEVBQVUsSUFBVztRQUFwQyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTztRQUZ4RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFOUQsb0NBQW9DO1FBQ3BDLCtCQUErQjtRQUMvQixJQUFJO1FBQ0osMENBQTBDO1FBQzFDLGdDQUFnQztRQUNoQyxJQUFJO0lBQ1IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFFTCxDQUFDO0lBaENRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBTStCLGVBQU0sRUFBaUIsV0FBSTtPQUwvQyxhQUFhLENBa0N6QjtJQUFELG9CQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vXHJcbi8vIEBDb21wb25lbnQoe1xyXG4vLyAgICAgc2VsZWN0b3I6ICdhcHAtdXNlcicsXHJcbi8vICAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci5jb21wb25lbnQuaHRtbCcsXHJcbi8vICAgICBzdHlsZVVybHM6IFsnLi91c2VyLmNvbXBvbmVudC5zY3NzJ10sXHJcbi8vICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbi8vIH0pXHJcbi8vIGV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuLy9cclxuLy8gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyKSB7IH1cclxuLy9cclxuLy8gICAgIG5nT25Jbml0KCkge1xyXG4vLyAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykgIT0gbnVsbCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCcpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyB9XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7TG9naW5Gb3JtLCBVc2VyfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtdXNlclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdXNlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdXNlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLCBwcml2YXRlIHBhZ2UgOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRoaXMucm91dGVyLnVybCA9PSAnL2xvZ2luJyA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5yb3V0ZXIudXJsID09ICcvbG9naW4nKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmKHRoaXMucm91dGVyLnVybCA9PSAnL3NpZ251cCcpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGb3JtKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ251cCddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZighdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=