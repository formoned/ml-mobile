"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var GeoLocationService = /** @class */ (function () {
    function GeoLocationService() {
    }
    GeoLocationService.prototype.getPosition = function () {
        console.log('asd');
        return Observable_1.Observable.create(function (observer) {
            navigator.geolocation.watchPosition(function (pos) {
                observer.next(pos);
            }),
                function () {
                    console.log('Position is not available');
                },
                {
                    enableHighAccuracy: true
                };
        });
    };
    GeoLocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GeoLocationService);
    return GeoLocationService;
}());
exports.GeoLocationService = GeoLocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvLWxvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW8tbG9jYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBMkM7QUFHM0M7SUFJRTtJQUFnQixDQUFDO0lBRVYsd0NBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FDdEIsVUFBQyxRQUFRO1lBQ1AsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBQyxHQUFhO2dCQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQztnQkFDQTtvQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0Q7b0JBQ0Usa0JBQWtCLEVBQUUsSUFBSTtpQkFDekIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBCVSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTs7T0FDQSxrQkFBa0IsQ0FxQjlCO0lBQUQseUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9Mb2NhdGlvblNlcnZpY2Uge1xuXG4gIGNvb3JkaW5hdGVzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogT2JzZXJ2YWJsZTxQb3NpdGlvbj4ge1xuICAgIGNvbnNvbGUubG9nKCdhc2QnKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoXG4gICAgICAob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oKHBvczogUG9zaXRpb24pID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHBvcyk7XG4gICAgICAgIH0pLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3NpdGlvbiBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==