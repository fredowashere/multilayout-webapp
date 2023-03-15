import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'appd-select',
	standalone: true,
    imports: [SharedModule],
	templateUrl: './select.html',
})
export class AppdSelect {

    choice = new FormControl();

    choices = [
        { text: 'Hi Mark', value: 1 },
        { text: 'Hi Fredo', value: 2 },
        { text: 'Hi Angelica', value: 3 },
        { text: 'Hi Bledar', value: 4 },
    ];
}


