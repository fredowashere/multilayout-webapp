import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { countries } from '../mock';

@Component({
	selector: 'appd-table-basic',
	standalone: true,
	imports: [SharedModule, DecimalPipe, NgFor],
	templateUrl: './table-basic.html',
})
export class AppdTableBasic {
	countries: any[] = countries;
}