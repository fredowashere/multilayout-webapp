import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DemosComponent } from '../../demos.component';
import { NgbdDemoListService } from '../../services/ngbd-demo-list.service';
import { AppdTableBasic } from './basic/table-basic';
import { AppdTableComplete } from './complete/table-complete';
import { AppdTableCrud } from './crud/table-crud';
import { AppdTablePaginated } from './paginated/table-paginated';
import { AppdTableRowExpand } from './row-expand/table-row-expand';
import { AppdTableSearchable } from './searchable/table-searchable';
import { AppdTableSelectable } from './selectable/table-selectable';
import { AppdTableSorted } from './sorted/table-sorted';

declare var require: any;

const demos = {
	fullOptional: {
		title: 'Full optional',
		code: require('!raw-loader!./complete/table-complete').default,
		markup: require('!raw-loader!./complete/table-complete.html').default,
		type: AppdTableComplete,
	},
	basic: {
		title: 'Basic',
		code: require('!raw-loader!./basic/table-basic').default,
		markup: require('!raw-loader!./basic/table-basic.html').default,
		type: AppdTableBasic,
	},
	searchable: {
		title: 'Searchable',
		code: require('!raw-loader!./searchable/table-searchable').default,
		markup: require('!raw-loader!./searchable/table-searchable.html').default,
		type: AppdTableSearchable,
	},
	paginated: {
		title: 'Paginated',
		code: require('!raw-loader!./paginated/table-paginated').default,
		markup: require('!raw-loader!./paginated/table-paginated.html').default,
		type: AppdTablePaginated,
	},
	sorted: {
		title: 'Sorted',
		code: require('!raw-loader!./sorted/table-sorted').default,
		markup: require('!raw-loader!./sorted/table-sorted.html').default,
		type: AppdTableSorted,
	},
	selectable: {
		title: 'Selectable',
		code: require('!raw-loader!./selectable/table-selectable').default,
		markup: require('!raw-loader!./selectable/table-selectable.html').default,
		type: AppdTableSelectable,
	},
	rowExpand: {
		title: 'Row expand',
		code: require('!raw-loader!./row-expand/table-row-expand').default,
		markup: require('!raw-loader!./row-expand/table-row-expand.html').default,
		type: AppdTableRowExpand,
	},
	crud: {
		title: 'CRUD',
		files: [
			{
				name: 'table-crud.html',
				source: require('!raw-loader!./crud/table-crud.html').default
			},
			{
				name: 'table-crud.ts',
				source: require('!raw-loader!./crud/table-crud').default
			},
			{
				name: 'are-you-sure.ts',
				source: require('!raw-loader!./crud/are-you-sure').default
			},
			{
				name: 'country-form.ts',
				source: require('!raw-loader!./crud/country-form').default
			}
		],
		type: AppdTableCrud,
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
					inject(NgbdDemoListService).register('app-table', demos),
			},
		],
	},
];
