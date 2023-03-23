import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'appd-date',
	standalone: true,
    imports: [SharedModule, JsonPipe],
	templateUrl: './date.html',
})
export class AppdDate {

    date = new FormControl();

	month = new FormControl(null, [Validators.required]);
}


