import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'appd-text',
	standalone: true,
    imports: [SharedModule],
	templateUrl: './text.html',
})
export class AppdText {

    text = new FormControl();

    number = new FormControl();

    password = new FormControl();

    textarea = new FormControl();

    textValidation = new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(6)]);
}


