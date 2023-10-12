import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { countries } from '../mock';

@Component({
	selector: 'appd-table-searchable',
	standalone: true,
	imports: [SharedModule, DecimalPipe, AsyncPipe, NgFor],
	templateUrl: './table-searchable.html',
})
export class AppdTableSearchable {

	countries = countries;
	
}