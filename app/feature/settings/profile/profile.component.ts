import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {ListPicker} from "tns-core-modules/ui/list-picker";
import {action, alert} from "tns-core-modules/ui/dialogs";
import {ApiGetService, AuthenticationService} from "../../../core/services";
import {profileForm} from "../../../core/models";


export interface countries {
    id : number;
    name : string;
}

@Component({
    selector: "Profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {

    loadData : boolean = false;
    isSubmiting : boolean = false;
    countries : countries[] = [];
    genders = [];
    genderSelected: string = 'None';
    countrySelected: string = 'None';
    @Output() statusChange = new EventEmitter<boolean>();
    @ViewChild("title") title: ElementRef;
    @ViewChild("about") about: ElementRef;

    test = 'Waiting!';

    editUserForm : boolean = false;
    user : profileForm = {
        name : '',
        email : '',
        created_at : '',
        title : '',
        about : '',
        gender : 'other',
        country : null
    };
    user_default : profileForm = {
        name : '',
        email : '',
        created_at : '',
        title : '',
        about : '',
        gender : 'other',
        country : null
    };

    constructor(
        private authenticationService : AuthenticationService,
        private apiGetService : ApiGetService
    ) {
        // Use the constructor to inject services.
        this.genders.push(
            {key : 'man', value : 'Man'},
            {key : 'woman', value : 'Woman'},
            {key : 'other', value : 'Other'}
        );
        console.log('profile construct');
    }


    ngOnInit() {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.loadUser();
    }

    onSave(){
        this.test = 'ITs save';

        this.submit(this.user);
    }
    onEdit() {
        this.test = 'ITs edit';
        this.editForm();
    }
    onCancel() {
        this.editForm();
    }

    // Load data
    loadUser() {
        this.loadData = true;
        this.authenticationService.getUser()
            .subscribe((response : any) => {
                    this.user.name = response.name;
                    this.user.email = response.email;
                    this.user.created_at = response.created_at;
                    this.user.gender = response.gender;
                    this.user.title = response.title;
                    this.user.about = response.about;
                    this.user.country = response.country_id;

                    this.user_default.name = response.name;
                    this.user_default.email = response.email;
                    this.user_default.created_at = response.created_at;
                    this.user_default.gender = response.gender;
                    this.user_default.title = response.title;
                    this.user_default.about = response.about;
                    this.user_default.country = response.country_id;
                    // this.loadData = false;
                    this.loadCountries();
                    //
                    this.genderSelected = this.getGenderText(this.user.gender);


                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });
    };
    loadCountries() {
        this.apiGetService.getCountriesList()
            .subscribe((response : any) => {
                this.countries = response.list;
                this.countrySelected = this.getCountryText(this.user.country);
                this.loadData = false;
            },
            error => {
                alert((JSON.parse(error.text())).message);
                console.log(error.text());
            });
    }

    // Focus elements
    focusTitle() {
        this.title.nativeElement.focus();
    }
    focusAbout() {
        this.about.nativeElement.focus();
    }

    // Dialogs
    displayGenderDialog(_status) {
        if(_status == false)
        {
            return;
        }
        // >> action-dialog-code
        let genderActions = [];

        for (var v in this.genders) {
            genderActions.push(this.genders[v].value);
        }

        let options = {
            title: "Gender selection",
            message: "Choose your gender",
            cancelButtonText: "Cancel",
            actions: genderActions
        };

        action(options).then((result) => {
            if(result != 'Cancel') {
                let _gender_id;
                for (var v in this.genders) {
                    if(this.genders[v].value == result) {
                        _gender_id = v;
                    }
                }
                this.genderSelected = this.genders[_gender_id].value;
                this.user.gender = this.genders[_gender_id].key;
            }
        });
        // << action-dialog-code
    }
    displayCountryDialog(_status) {
        // >> action-dialog-code
        if(_status == false)
        {
            return;
        }

        let countryActions = [];

        for (var v in this.countries) {
            countryActions.push(this.countries[v].name);
        }

        let options = {
            title: "Country selection",
            message: "Choose your country",
            cancelButtonText: "Cancel",
            actions: countryActions
        };

        action(options).then((result) => {
            if(result != 'Cancel') {
                let _country_id;
                for (var v in this.countries) {
                    if(this.countries[v].name == result) {
                        _country_id = v;
                    }
                }
                this.countrySelected = this.countries[_country_id].name;
                this.user.country = this.countries[_country_id].id;
            }
        });
        // << action-dialog-code
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log("picker selection: " + picker.selectedIndex);
    }

    getGenderText(name) {
        for (var v in this.genders) {
            if(this.genders[v].key == name) {
                return this.genders[v].value;
            }
        }
        return 'Null';
    }
    getCountryText(name) {
        for (var v in this.countries) {
            if(this.countries[v].id == name) {
                return this.countries[v].name;
            }
        }
        return 'Null';
    }
    editForm() {
        this.editUserForm = !this.editUserForm;
        this.statusChange.emit(this.editUserForm);
        if(!this.editUserForm) {
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
    }
    submit (value : profileForm) {
        this.editUserForm = false;
        this.loadData = true;
        this.authenticationService.changeProfileInfo(value)
            .subscribe((response : any) => {
                if(response.success === true) {
                        this.loadData = false;
                        this.statusChange.emit(false);
                        this.alert('Changes was Saved');
                    } else {
                        // false
                        this.alert(response.message);
                    }
                },
                error => {
                    alert((JSON.parse(error.text())).message);
                    console.log(error.text());
                });
    }
    alert(message: string) {
        return alert({
            title: "Profile",
            okButtonText: "OK",
            message: message
        });
    }
}