import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DemosComponent } from '../../demos.component';
import { NgbdDemoListService } from '../../ngbd-demo-list.service';
import { AppdDynamicFormBasic } from './basic/dynamic-form-basic';

declare var require: any;

const demos = {
    basic: {
        title: 'Basic',
        code: require('!raw-loader!./basic/dynamic-form-basic').default,
        markup: require('!raw-loader!./basic/dynamic-form-basic.html').default,
        type: AppdDynamicFormBasic,
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
                    inject(NgbdDemoListService).register('app-dynamic-form', demos),
            },
        ],
    },
];
