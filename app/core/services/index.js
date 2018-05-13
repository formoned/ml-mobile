"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_service_1 = require("./auth-guard.service");
var authentication_service_1 = require("./authentication.service");
var side_bar_service_1 = require("./side-bar.service");
var settings_service_1 = require("./settings.service");
var api_get_service_1 = require("./api-get.service");
var api_post_service_1 = require("./api-post.service");
var api_delete_service_1 = require("./api-delete.service");
var geo_location_service_1 = require("./geo-location.service");
var validation_service_1 = require("./validation.service");
exports.services = [
    auth_guard_service_1.AuthGuardService,
    authentication_service_1.AuthenticationService,
    side_bar_service_1.SideBarService,
    settings_service_1.SettingsService,
    api_get_service_1.ApiGetService,
    api_post_service_1.ApiPostService,
    api_delete_service_1.ApiDeleteService,
    geo_location_service_1.GeoLocationService,
    validation_service_1.ValidationService
];
__export(require("./auth-guard.service"));
__export(require("./authentication.service"));
__export(require("./side-bar.service"));
__export(require("./settings.service"));
__export(require("./api-get.service"));
__export(require("./api-post.service"));
__export(require("./api-delete.service"));
__export(require("./geo-location.service"));
__export(require("./validation.service"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFzRDtBQUN0RCxtRUFBK0Q7QUFDL0QsdURBQWtEO0FBQ2xELHVEQUFtRDtBQUNuRCxxREFBZ0Q7QUFDaEQsdURBQWtEO0FBQ2xELDJEQUFzRDtBQUN0RCwrREFBMEQ7QUFDMUQsMkRBQXVEO0FBRTFDLFFBQUEsUUFBUSxHQUFVO0lBQzdCLHFDQUFnQjtJQUNoQiw4Q0FBcUI7SUFDckIsaUNBQWM7SUFDZCxrQ0FBZTtJQUNmLCtCQUFhO0lBQ2IsaUNBQWM7SUFDZCxxQ0FBZ0I7SUFDaEIseUNBQWtCO0lBQ2xCLHNDQUFpQjtDQUNsQixDQUFDO0FBRUYsMENBQXFDO0FBQ3JDLDhDQUF5QztBQUN6Qyx3Q0FBbUM7QUFDbkMsd0NBQW1DO0FBQ25DLHVDQUFrQztBQUNsQyx3Q0FBbUM7QUFDbkMsMENBQXFDO0FBQ3JDLDRDQUF1QztBQUN2QywwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhHdWFyZFNlcnZpY2V9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lkZUJhclNlcnZpY2V9IGZyb20gXCIuL3NpZGUtYmFyLnNlcnZpY2VcIjtcbmltcG9ydCB7U2V0dGluZ3NTZXJ2aWNlfSBmcm9tIFwiLi9zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwaUdldFNlcnZpY2V9IGZyb20gXCIuL2FwaS1nZXQuc2VydmljZVwiO1xuaW1wb3J0IHtBcGlQb3N0U2VydmljZX0gZnJvbSBcIi4vYXBpLXBvc3Quc2VydmljZVwiO1xuaW1wb3J0IHtBcGlEZWxldGVTZXJ2aWNlfSBmcm9tIFwiLi9hcGktZGVsZXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7R2VvTG9jYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9nZW8tbG9jYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4vdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlczogYW55W10gPSBbXG4gIEF1dGhHdWFyZFNlcnZpY2UsXG4gIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgU2lkZUJhclNlcnZpY2UsXG4gIFNldHRpbmdzU2VydmljZSxcbiAgQXBpR2V0U2VydmljZSxcbiAgQXBpUG9zdFNlcnZpY2UsXG4gIEFwaURlbGV0ZVNlcnZpY2UsXG4gIEdlb0xvY2F0aW9uU2VydmljZSxcbiAgVmFsaWRhdGlvblNlcnZpY2Vcbl07XG5cbmV4cG9ydCAqIGZyb20gJy4vYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NpZGUtYmFyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5ncy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpLWdldC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpLXBvc3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2FwaS1kZWxldGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2dlby1sb2NhdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aWNlJztcbiJdfQ==