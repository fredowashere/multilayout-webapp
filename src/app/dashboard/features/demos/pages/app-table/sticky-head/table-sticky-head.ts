import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { countries } from '../mock';

@Component({
    selector: 'appd-table-sticky-head',
    standalone: true,
    imports: [SharedModule, DecimalPipe, NgFor],
    templateUrl: './table-sticky-head.html',
})
export class AppdTableStickyHead {

    countries = countries;

}