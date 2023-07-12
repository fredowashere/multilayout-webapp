import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { flavorList, states } from '../autocomplete/mock';

@Component({
    selector: 'appd-form',
    standalone: true,
    imports: [ SharedModule, JsonPipe ],
    templateUrl: './form.html',
})
export class AppdForm {

    statesFormatter = (state: any) => state.name;
    statesFilter = (term: string, state: any) => state.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    states = states; // imported from autocomplete/mock

    flavorsFormatter = (flavor: any) => flavor.name;
    flavorsFilter = (term: string, flavor: any) => flavor.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    flavorList = flavorList; // imported from autocomplete/mock

    form = new FormGroup({
        firstName: new FormControl("Fredo"),
        lastName: new FormControl("Corleone"),
        email: new FormControl(undefined, [ Validators.required, Validators.email ]),
        city: new FormControl(undefined, [ Validators.required ]),
        state: new FormControl(
            { name: "Hawaii", flag: "e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png" },
            [ Validators.required ]
        ),
        zip: new FormControl(undefined, [ Validators.required ]),
        flavors: new FormControl([{ id: 0, name: "Banana" } ]),
        agree: new FormControl(undefined, [ Validators.requiredTrue ])
    });

    submit() {
        alert("Submitted!");
    }
}


