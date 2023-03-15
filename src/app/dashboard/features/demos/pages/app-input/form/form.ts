import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { flavorList, states } from '../autocomplete/mock';

@Component({
    selector: 'appd-form',
    standalone: true,
    imports: [SharedModule, JsonPipe],
    templateUrl: './form.html',
})
export class AppdForm {

    form: FormGroup;

    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    city: FormControl;
    state: FormControl;
    zip: FormControl;
    flavors: FormControl;
    agree: FormControl;

    statesFormatter = (state: any) => state.name;
    statesFilter = (term: string, state: any) => state.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    states = states; // imported from autocomplete/mock

    flavorsFormatter = (flavor: any) => flavor.name;
    flavorsFilter = (term: string, flavor: any) => flavor.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    flavorList = flavorList; // imported from autocomplete/mock

    constructor() {

        this.firstName = new FormControl('Fredo');
        this.lastName = new FormControl('Corleone');
        this.email = new FormControl(null, [ Validators.required, Validators.email ]);
        this.city = new FormControl(null, [ Validators.required ]);
        this.state = new FormControl(
            { name: 'Hawaii', flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
            [ Validators.required ]
        );
        this.zip = new FormControl(null, [ Validators.required ]);
        this.flavors = new FormControl([{ id: 0, name: 'Banana' } ]);
        this.agree = new FormControl(null, [ Validators.requiredTrue ]);

        this.form = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            city: this.city,
            state: this.state,
            zip: this.zip,
            flavors: this.flavors,
            agree: this.agree
        });
    }

    submit() {
        alert('Submitted!');
    }
}


