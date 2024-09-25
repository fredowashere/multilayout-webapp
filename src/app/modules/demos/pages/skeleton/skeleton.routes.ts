import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DemosComponent } from '../../demos.component';
import { NgbdDemoListService } from '../../ngbd-demo-list.service';
import { AppdSkeletonBasic } from './basic/skeleton-basic';

declare var require: any;

const demos = {
    basic: {
        title: 'Basic',
        code: require('!raw-loader!./basic/skeleton-basic').default,
        markup: require('!raw-loader!./basic/skeleton-basic.html').default,
        type: AppdSkeletonBasic,
    },
};

export const routes: Routes = [
    {
        path: '',
        component: DemosComponent,
        providers: [
            {
                provide: ENVIRONMENT_INITIALIZER,
                multi: true,
                useValue: () =>
                    inject(NgbdDemoListService).register('skeleton', demos),
            },
        ],
    },
];
