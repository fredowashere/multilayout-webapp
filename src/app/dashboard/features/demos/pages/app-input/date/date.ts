import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MonthpickerStruct } from 'src/app/shared/components/monthpicker/monthpicker.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'appd-date',
	standalone: true,
    imports: [SharedModule, JsonPipe],
	templateUrl: './date.html',
})
export class AppdDate {

    date1 = new FormControl();
    date2 = new FormControl();
    date3 = new FormControl();

	dateFloating1 = new FormControl();
    dateFloating2 = new FormControl();
    dateFloating3 = new FormControl();

	startMonth = new FormControl(null, [Validators.required]);
	endMonth = new FormControl(null, [Validators.required]);

	startMonthFloating = new FormControl(null, [Validators.required]);
	endMonthFloating = new FormControl(null, [Validators.required]);
}
