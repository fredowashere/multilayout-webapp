import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { countries } from '../mock';

@Component({
	selector: 'appd-table-row-expand',
	standalone: true,
	imports: [SharedModule, DecimalPipe, NgFor],
	templateUrl: './table-row-expand.html',
})
export class AppdTableRowExpand {
	countries: any[] = countries;
}