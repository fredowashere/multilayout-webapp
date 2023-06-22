import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { countries } from '../mock';

@Component({
	selector: 'appd-table-sorted',
	standalone: true,
	imports: [SharedModule, DecimalPipe, NgFor],
	templateUrl: './table-sorted.html',
})
export class AppdTableSorted {
	countries = countries;
}