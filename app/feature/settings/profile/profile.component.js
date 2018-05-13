"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var services_1 = require("../../../core/services");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authenticationService, apiGetService) {
        this.authenticationService = authenticationService;
        this.apiGetService = apiGetService;
        this.loadData = true;
        this.isSubmiting = false;
        this.countries = [];
        this.genders = [];
        this.genderSelected = 'None';
        this.countrySelected = 'None';
        this.editUserForm = false;
        this.user = {
            name: '',
            email: '',
            created_at: '',
            title: '',
            about: '',
            gender: 'other',
            country: null
        };
        this.user_default = {
            name: '',
            email: '',
            created_at: '',
            title: '',
            about: '',
            gender: 'other',
            country: null
        };
        // Use the constructor to inject services.
        this.genders.push({ key: 'man', value: 'Man' }, { key: 'woman', value: 'Woman' }, { key: 'other', value: 'Other' });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.loadUser();
    };
    // Load data
    ProfileComponent.prototype.loadUser = function () {
        var _this = this;
        this.authenticationService.getUser()
            .subscribe(function (response) {
            _this.user.name = response.name;
            _this.user.email = response.email;
            _this.user.created_at = response.created_at;
            _this.user.gender = response.gender;
            _this.user.title = response.title;
            _this.user.about = response.about;
            _this.user.country = response.country_id;
            _this.user_default.name = response.name;
            _this.user_default.email = response.email;
            _this.user_default.created_at = response.created_at;
            _this.user_default.gender = response.gender;
            _this.user_default.title = response.title;
            _this.user_default.about = response.about;
            _this.user_default.country = response.country_id;
            // this.loadData = false;
            _this.loadCountries();
            //
            _this.genderSelected = _this.getGenderText(_this.user.gender);
        }, function (error) {
            alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    ;
    ProfileComponent.prototype.loadCountries = function () {
        var _this = this;
        this.apiGetService.getCountriesList()
            .subscribe(function (response) {
            _this.countries = response.list;
            _this.countrySelected = _this.getCountryText(_this.user.country);
            _this.loadData = false;
        }, function (error) {
            alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    // Focus elements
    ProfileComponent.prototype.focusTitle = function () {
        this.title.nativeElement.focus();
    };
    ProfileComponent.prototype.focusAbout = function () {
        this.about.nativeElement.focus();
    };
    // Dialogs
    ProfileComponent.prototype.displayGenderDialog = function (_status) {
        var _this = this;
        if (_status == false) {
            return;
        }
        // >> action-dialog-code
        var genderActions = [];
        for (var v in this.genders) {
            genderActions.push(this.genders[v].value);
        }
        var options = {
            title: "Gender selection",
            message: "Choose your gender",
            cancelButtonText: "Cancel",
            actions: genderActions
        };
        dialogs_1.action(options).then(function (result) {
            if (result != 'Cancel') {
                var _gender_id = void 0;
                for (var v in _this.genders) {
                    if (_this.genders[v].value == result) {
                        _gender_id = v;
                    }
                }
                _this.genderSelected = _this.genders[_gender_id].value;
                _this.user.gender = _this.genders[_gender_id].key;
            }
        });
        // << action-dialog-code
    };
    ProfileComponent.prototype.displayCountryDialog = function (_status) {
        var _this = this;
        // >> action-dialog-code
        if (_status == false) {
            return;
        }
        var countryActions = [];
        for (var v in this.countries) {
            countryActions.push(this.countries[v].name);
        }
        var options = {
            title: "Country selection",
            message: "Choose your country",
            cancelButtonText: "Cancel",
            actions: countryActions
        };
        dialogs_1.action(options).then(function (result) {
            if (result != 'Cancel') {
                var _country_id = void 0;
                for (var v in _this.countries) {
                    if (_this.countries[v].name == result) {
                        _country_id = v;
                    }
                }
                _this.countrySelected = _this.countries[_country_id].name;
                _this.user.country = _this.countries[_country_id].id;
            }
        });
        // << action-dialog-code
    };
    ProfileComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        console.log("picker selection: " + picker.selectedIndex);
    };
    ProfileComponent.prototype.getGenderText = function (name) {
        for (var v in this.genders) {
            if (this.genders[v].key == name) {
                return this.genders[v].value;
            }
        }
        return 'Null';
    };
    ProfileComponent.prototype.getCountryText = function (name) {
        for (var v in this.countries) {
            if (this.countries[v].id == name) {
                return this.countries[v].name;
            }
        }
        return 'Null';
    };
    ProfileComponent.prototype.editForm = function () {
        this.editUserForm = !this.editUserForm;
        if (!this.editUserForm) {
            console.log('Here is me');
            // Reset interface
            this.user.name = this.user_default.name;
            this.user.email = this.user_default.email;
            this.user.created_at = this.user_default.created_at;
            this.user.gender = this.user_default.gender;
            console.log(this.user.title + ' = ' + this.user_default.title);
            this.user.title = this.user_default.title;
            this.user.about = this.user_default.about;
            this.user.country = this.user_default.country;
            // Fill values
            this.genderSelected = this.getGenderText(this.user.gender);
            this.countrySelected = this.getCountryText(this.user.country);
        }
    };
    ProfileComponent.prototype.submit = function (value) {
        var _this = this;
        this.editUserForm = false;
        this.isSubmiting = true;
        this.authenticationService.changeProfileInfo(value)
            .subscribe(function (response) {
            if (response.success === true) {
                _this.isSubmiting = false;
            }
            else {
                // false
            }
        }, function (error) {
            alert((JSON.parse(error.text())).message);
            console.log(error.text());
        });
    };
    __decorate([
        core_1.ViewChild("title"),
        __metadata("design:type", core_1.ElementRef)
    ], ProfileComponent.prototype, "title", void 0);
    __decorate([
        core_1.ViewChild("about"),
        __metadata("design:type", core_1.ElementRef)
    ], ProfileComponent.prototype, "about", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "Profile",
            moduleId: module.id,
            templateUrl: "./profile.component.html"
        }),
        __metadata("design:paramtypes", [services_1.AuthenticationService,
            services_1.ApiGetService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUV2RSx1REFBbUQ7QUFDbkQsbURBQTRFO0FBYzVFO0lBZ0NJLDBCQUNZLHFCQUE2QyxFQUM3QyxhQUE2QjtRQUQ3QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQWhDekMsYUFBUSxHQUFhLElBQUksQ0FBQztRQUMxQixnQkFBVyxHQUFhLEtBQUssQ0FBQztRQUM5QixjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsbUJBQWMsR0FBVyxNQUFNLENBQUM7UUFDaEMsb0JBQWUsR0FBVyxNQUFNLENBQUM7UUFLakMsaUJBQVksR0FBYSxLQUFLLENBQUM7UUFDL0IsU0FBSSxHQUFpQjtZQUNqQixJQUFJLEVBQUcsRUFBRTtZQUNULEtBQUssRUFBRyxFQUFFO1lBQ1YsVUFBVSxFQUFHLEVBQUU7WUFDZixLQUFLLEVBQUcsRUFBRTtZQUNWLEtBQUssRUFBRyxFQUFFO1lBQ1YsTUFBTSxFQUFHLE9BQU87WUFDaEIsT0FBTyxFQUFHLElBQUk7U0FDakIsQ0FBQztRQUNGLGlCQUFZLEdBQWlCO1lBQ3pCLElBQUksRUFBRyxFQUFFO1lBQ1QsS0FBSyxFQUFHLEVBQUU7WUFDVixVQUFVLEVBQUcsRUFBRTtZQUNmLEtBQUssRUFBRyxFQUFFO1lBQ1YsS0FBSyxFQUFHLEVBQUU7WUFDVixNQUFNLEVBQUcsT0FBTztZQUNoQixPQUFPLEVBQUcsSUFBSTtTQUNqQixDQUFDO1FBTUUsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNiLEVBQUMsR0FBRyxFQUFHLEtBQUssRUFBRSxLQUFLLEVBQUcsS0FBSyxFQUFDLEVBQzVCLEVBQUMsR0FBRyxFQUFHLE9BQU8s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QUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FrQ3NDLGdDQUFxQjtZQUM3Qix3QkFBYTtPQWxDaEMsZ0JBQWdCLENBa081QjtJQUFELHVCQUFDO0NBQUEsQUFsT0QsSUFrT0M7QUFsT1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0xpc3RQaWNrZXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XHJcbmltcG9ydCB7YWN0aW9ufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7QXBpR2V0U2VydmljZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQge3Byb2ZpbGVGb3JtfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9tb2RlbHNcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvdW50cmllcyB7XHJcbiAgICBpZCA6IG51bWJlcjtcclxuICAgIG5hbWUgOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJvZmlsZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvZmlsZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBsb2FkRGF0YSA6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNTdWJtaXRpbmcgOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb3VudHJpZXMgOiBjb3VudHJpZXNbXSA9IFtdO1xyXG4gICAgZ2VuZGVycyA9IFtdO1xyXG4gICAgZ2VuZGVyU2VsZWN0ZWQ6IHN0cmluZyA9ICdOb25lJztcclxuICAgIGNvdW50cnlTZWxlY3RlZDogc3RyaW5nID0gJ05vbmUnO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ0aXRsZVwiKSB0aXRsZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJhYm91dFwiKSBhYm91dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBlZGl0VXNlckZvcm0gOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB1c2VyIDogcHJvZmlsZUZvcm0gPSB7XHJcbiAgICAgICAgbmFtZSA6ICcnLFxyXG4gICAgICAgIGVtYWlsIDogJycsXHJcbiAgICAgICAgY3JlYXRlZF9hdCA6ICcnLFxyXG4gICAgICAgIHRpdGxlIDogJycsXHJcbiAgICAgICAgYWJvdXQgOiAnJyxcclxuICAgICAgICBnZW5kZXIgOiAnb3RoZXInLFxyXG4gICAgICAgIGNvdW50cnkgOiBudWxsXHJcbiAgICB9O1xyXG4gICAgdXNlcl9kZWZhdWx0IDogcHJvZmlsZUZvcm0gPSB7XHJcbiAgICAgICAgbmFtZSA6ICcnLFxyXG4gICAgICAgIGVtYWlsIDogJycsXHJcbiAgICAgICAgY3JlYXRlZF9hdCA6ICcnLFxyXG4gICAgICAgIHRpdGxlIDogJycsXHJcbiAgICAgICAgYWJvdXQgOiAnJyxcclxuICAgICAgICBnZW5kZXIgOiAnb3RoZXInLFxyXG4gICAgICAgIGNvdW50cnkgOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlIDogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBpR2V0U2VydmljZSA6IEFwaUdldFNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxyXG4gICAgICAgIHRoaXMuZ2VuZGVycy5wdXNoKFxyXG4gICAgICAgICAgICB7a2V5IDogJ21hbicsIHZhbHVlIDogJ01hbid9LFxyXG4gICAgICAgICAgICB7a2V5IDogJ3dvbWFuJywgdmFsdWUgOiAnV29tYW4nfSxcclxuICAgICAgICAgICAge2tleSA6ICdvdGhlcicsIHZhbHVlIDogJ090aGVyJ31cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICAgICAgdGhpcy5sb2FkVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgZGF0YVxyXG4gICAgbG9hZFVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlIDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLm5hbWUgPSByZXNwb25zZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IHJlc3BvbnNlLmVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5jcmVhdGVkX2F0ID0gcmVzcG9uc2UuY3JlYXRlZF9hdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZ2VuZGVyID0gcmVzcG9uc2UuZ2VuZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci50aXRsZSA9IHJlc3BvbnNlLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5hYm91dCA9IHJlc3BvbnNlLmFib3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5jb3VudHJ5ID0gcmVzcG9uc2UuY291bnRyeV9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyX2RlZmF1bHQubmFtZSA9IHJlc3BvbnNlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyX2RlZmF1bHQuZW1haWwgPSByZXNwb25zZS5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJfZGVmYXVsdC5jcmVhdGVkX2F0ID0gcmVzcG9uc2UuY3JlYXRlZF9hdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJfZGVmYXVsdC5nZW5kZXIgPSByZXNwb25zZS5nZW5kZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyX2RlZmF1bHQudGl0bGUgPSByZXNwb25zZS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJfZGVmYXVsdC5hYm91dCA9IHJlc3BvbnNlLmFib3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcl9kZWZhdWx0LmNvdW50cnkgPSByZXNwb25zZS5jb3VudHJ5X2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9hZERhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb3VudHJpZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZGVyU2VsZWN0ZWQgPSB0aGlzLmdldEdlbmRlclRleHQodGhpcy51c2VyLmdlbmRlcik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGxvYWRDb3VudHJpZXMoKSB7XHJcbiAgICAgICAgdGhpcy5hcGlHZXRTZXJ2aWNlLmdldENvdW50cmllc0xpc3QoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMgPSByZXNwb25zZS5saXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQgPSB0aGlzLmdldENvdW50cnlUZXh0KHRoaXMudXNlci5jb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoKEpTT04ucGFyc2UoZXJyb3IudGV4dCgpKSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb2N1cyBlbGVtZW50c1xyXG4gICAgZm9jdXNUaXRsZSgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGZvY3VzQWJvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5hYm91dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlhbG9nc1xyXG4gICAgZGlzcGxheUdlbmRlckRpYWxvZyhfc3RhdHVzKSB7XHJcbiAgICAgICAgaWYoX3N0YXR1cyA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gPj4gYWN0aW9uLWRpYWxvZy1jb2RlXHJcbiAgICAgICAgbGV0IGdlbmRlckFjdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgdiBpbiB0aGlzLmdlbmRlcnMpIHtcclxuICAgICAgICAgICAgZ2VuZGVyQWN0aW9ucy5wdXNoKHRoaXMuZ2VuZGVyc1t2XS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiR2VuZGVyIHNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNob29zZSB5b3VyIGdlbmRlclwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBnZW5kZXJBY3Rpb25zXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQgIT0gJ0NhbmNlbCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBfZ2VuZGVyX2lkO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdiBpbiB0aGlzLmdlbmRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdlbmRlcnNbdl0udmFsdWUgPT0gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nZW5kZXJfaWQgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZGVyU2VsZWN0ZWQgPSB0aGlzLmdlbmRlcnNbX2dlbmRlcl9pZF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIuZ2VuZGVyID0gdGhpcy5nZW5kZXJzW19nZW5kZXJfaWRdLmtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIDw8IGFjdGlvbi1kaWFsb2ctY29kZVxyXG4gICAgfVxyXG4gICAgZGlzcGxheUNvdW50cnlEaWFsb2coX3N0YXR1cykge1xyXG4gICAgICAgIC8vID4+IGFjdGlvbi1kaWFsb2ctY29kZVxyXG4gICAgICAgIGlmKF9zdGF0dXMgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY291bnRyeUFjdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgdiBpbiB0aGlzLmNvdW50cmllcykge1xyXG4gICAgICAgICAgICBjb3VudHJ5QWN0aW9ucy5wdXNoKHRoaXMuY291bnRyaWVzW3ZdLm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvdW50cnkgc2VsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgY291bnRyeVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBjb3VudHJ5QWN0aW9uc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0ICE9ICdDYW5jZWwnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2NvdW50cnlfaWQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHRoaXMuY291bnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudHJpZXNbdl0ubmFtZSA9PSByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvdW50cnlfaWQgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeVNlbGVjdGVkID0gdGhpcy5jb3VudHJpZXNbX2NvdW50cnlfaWRdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIuY291bnRyeSA9IHRoaXMuY291bnRyaWVzW19jb3VudHJ5X2lkXS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIDw8IGFjdGlvbi1kaWFsb2ctY29kZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGlja2VyIHNlbGVjdGlvbjogXCIgKyBwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2VuZGVyVGV4dChuYW1lKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdiBpbiB0aGlzLmdlbmRlcnMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nZW5kZXJzW3ZdLmtleSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5kZXJzW3ZdLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnTnVsbCc7XHJcbiAgICB9XHJcbiAgICBnZXRDb3VudHJ5VGV4dChuYW1lKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdiBpbiB0aGlzLmNvdW50cmllcykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvdW50cmllc1t2XS5pZCA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudHJpZXNbdl0ubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ051bGwnO1xyXG4gICAgfVxyXG4gICAgZWRpdEZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0VXNlckZvcm0gPSAhdGhpcy5lZGl0VXNlckZvcm07XHJcbiAgICAgICAgaWYoIXRoaXMuZWRpdFVzZXJGb3JtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIZXJlIGlzIG1lJyk7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IGludGVyZmFjZVxyXG4gICAgICAgICAgICB0aGlzLnVzZXIubmFtZSA9IHRoaXMudXNlcl9kZWZhdWx0Lm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IHRoaXMudXNlcl9kZWZhdWx0LmVtYWlsO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIuY3JlYXRlZF9hdCA9IHRoaXMudXNlcl9kZWZhdWx0LmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgIHRoaXMudXNlci5nZW5kZXIgPSB0aGlzLnVzZXJfZGVmYXVsdC5nZW5kZXI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlci50aXRsZSArICcgPSAnICsgdGhpcy51c2VyX2RlZmF1bHQudGl0bGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIudGl0bGUgPSB0aGlzLnVzZXJfZGVmYXVsdC50aXRsZTtcclxuICAgICAgICAgICAgdGhpcy51c2VyLmFib3V0ID0gdGhpcy51c2VyX2RlZmF1bHQuYWJvdXQ7XHJcbiAgICAgICAgICAgIHRoaXMudXNlci5jb3VudHJ5ID0gdGhpcy51c2VyX2RlZmF1bHQuY291bnRyeTtcclxuICAgICAgICAgICAgLy8gRmlsbCB2YWx1ZXNcclxuICAgICAgICAgICAgdGhpcy5nZW5kZXJTZWxlY3RlZCA9IHRoaXMuZ2V0R2VuZGVyVGV4dCh0aGlzLnVzZXIuZ2VuZGVyKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQgPSB0aGlzLmdldENvdW50cnlUZXh0KHRoaXMudXNlci5jb3VudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdWJtaXQgKHZhbHVlIDogcHJvZmlsZUZvcm0pIHtcclxuICAgICAgICB0aGlzLmVkaXRVc2VyRm9ybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTdWJtaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmNoYW5nZVByb2ZpbGVJbmZvKHZhbHVlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KChKU09OLnBhcnNlKGVycm9yLnRleHQoKSkpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==