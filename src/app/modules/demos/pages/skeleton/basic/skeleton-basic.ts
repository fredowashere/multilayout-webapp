import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'appd-skeleton-basic',
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    templateUrl: './skeleton-basic.html',
})
export class AppdSkeletonBasic {}