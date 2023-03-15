import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { flavorList, states } from './mock';

@Component({
	selector: 'appd-autocomplete',
	standalone: true,
    imports: [SharedModule, JsonPipe],
	templateUrl: './autocomplete.html',
})
export class AppdAutocomplete {

    statesFormatter = (state: any) => state.name;
    statesFilter = (term: string, state: any) => state.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    state = new FormControl();
    states = states; // imported from autocomplete/mock

    flavorsFormatter = (flavor: any) => flavor.name;
    flavorsFilter = (term: string, flavor: any) => flavor.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    flavors = new FormControl();
    flavorList = flavorList; // imported from autocomplete/mock
}


