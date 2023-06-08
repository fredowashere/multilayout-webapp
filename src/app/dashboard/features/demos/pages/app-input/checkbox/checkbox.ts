import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from 'src/app/shared/components/input/input.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'appd-checkbox',
	standalone: true,
    imports: [SharedModule],
	templateUrl: './checkbox.html',
})
export class AppdCheckbox {

    checkbox = new FormControl();

    radio = new FormControl();

    choices: SelectOption[] = [
        { text: 'Female', value: 1 },
        { text: 'Male', value: 2 },
        { text: 'Non-binary', value: 3 },
        { text: 'Who knows what', value: 4 },
    ];
}