import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DemosComponent } from '../../demos.component';
import { NgbdDemoListService } from '../../services/ngbd-demo-list.service';
import { AppdText } from './text/text';
import { AppdTextMasking } from './text-masking/text-masking';
import { AppdAutocomplete } from './autocomplete/autocomplete';
import { AppdSelect } from './select/select';
import { AppdCheckbox } from './checkbox/checkbox';
import { AppdForm } from './form/form';
import { AppdDate } from './date/date';
import { AppdTextFloating } from './text-floating/text-floating';
import { AppdLayout } from './layout/layout';
import { AppdCustomValidation } from './custom-validation/custom-validation';

declare var require: any;

const demos = {
	form: {
		title: 'Complete example',
		code: require('!raw-loader!./form/form').default,
		markup: require('!raw-loader!./form/form.html').default,
		type: AppdForm,
	},
	text: {
		title: 'Textual inputs',
		code: require('!raw-loader!./text/text').default,
		markup: require('!raw-loader!./text/text.html').default,
		type: AppdText,
	},
	textFloating: {
		title: 'Floating labels',
		code: require('!raw-loader!./text-floating/text-floating').default,
		markup: require('!raw-loader!./text-floating/text-floating.html').default,
		type: AppdTextFloating,
	},
	customValidation: {
		title: 'Custom validation',
		code: require('!raw-loader!./custom-validation/custom-validation').default,
		markup: require('!raw-loader!./custom-validation/custom-validation.html').default,
		type: AppdCustomValidation,
	},
	textMasking: {
		title: 'Text masking',
		code: require('!raw-loader!./text-masking/text-masking').default,
		markup: require('!raw-loader!./text-masking/text-masking.html').default,
		type: AppdTextMasking,
	},
	date: {
		title: 'Date',
		code: require('!raw-loader!./date/date').default,
		markup: require('!raw-loader!./date/date.html').default,
		type: AppdDate,
	},
	select: {
		title: 'Select',
		code: require('!raw-loader!./select/select').default,
		markup: require('!raw-loader!./select/select.html').default,
		type: AppdSelect,
	},
	checkboxAndRadio: {
		title: 'Checkbox & radio',
		code: require('!raw-loader!./checkbox/checkbox').default,
		markup: require('!raw-loader!./checkbox/checkbox.html').default,
		type: AppdCheckbox,
	},
	autocomplete: {
		title: 'Autocompleted inputs',
		code: require('!raw-loader!./autocomplete/autocomplete').default,
		markup: require('!raw-loader!./autocomplete/autocomplete.html').default,
		type: AppdAutocomplete,
	},
	layout: {
		title: 'Layout',
		code: require('!raw-loader!./layout/layout').default,
		markup: require('!raw-loader!./layout/layout.html').default,
		type: AppdLayout,
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
					inject(NgbdDemoListService).register('app-input', demos),
			},
		],
	},
];
