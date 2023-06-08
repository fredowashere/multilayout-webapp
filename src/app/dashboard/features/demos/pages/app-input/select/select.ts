import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from 'src/app/shared/components/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'appd-select',
	standalone: true,
    imports: [SharedModule],
	templateUrl: './select.html',
})
export class AppdSelect {

    choice = new FormControl();

    choices: SelectOption[] = [
        { text: 'Hi Mark', value: 1 },
        { text: 'Hi Fredo', value: 2 },
        { text: 'Hi Angelica', value: 3 },
        { text: 'Hi Bledar', value: 4 },
    ];
}


