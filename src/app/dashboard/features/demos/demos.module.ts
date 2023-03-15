import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './demos.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { routes as accordionRoutes } from './pages/accordion/accordion.routes';
import { routes as alertRoutes } from './pages/alert/alert.routes';
import { routes as carouselRoutes } from './pages/carousel/carousel.routes';
import { routes as collapseRoutes } from './pages/collapse/collapse.routes';
import { routes as datepickerRoutes } from './pages/datepicker/datepicker.routes';
import { routes as dropdownRoutes } from './pages/dropdown/dropdown.routes';
import { routes as modalRoutes } from './pages/modal/modal.routes';
import { routes as navRoutes } from './pages/nav/nav.routes';
import { routes as offcanvasRoutes } from './pages/offcanvas/offcanvas.routes';
import { routes as paginationRoutes } from './pages/pagination/pagination.routes';
import { routes as popoverRoutes } from './pages/popover/popover.routes';
import { routes as progressbarRoutes } from './pages/progressbar/progressbar.routes';
import { routes as ratingRoutes } from './pages/rating/rating.routes';
import { routes as tableRoutes } from './pages/table/table.routes';
import { routes as timepickerRoutes } from './pages/timepicker/timepicker.routes';
import { routes as toastRoutes } from './pages/toast/toast.routes';
import { routes as tooltipRoutes } from './pages/tooltip/tooltip.routes';
import { routes as typeaheadRoutes } from './pages/typeahead/typeahead.routes';
import { routes as appInputRoutes } from './pages/app-input/app-input.routes';
import { routes as appTableRoutes } from './pages/app-table/app-table.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'accordion', pathMatch: 'full' },
  { path: 'accordion', children: accordionRoutes },
  { path: 'alert', children: alertRoutes },
  { path: 'carousel', children: carouselRoutes },
  { path: 'collapse', children: collapseRoutes },
  { path: 'datepicker', children: datepickerRoutes },
  { path: 'dropdown', children: dropdownRoutes },
  { path: 'modal', children: modalRoutes },
  { path: 'nav', children: navRoutes },
  { path: 'offcanvas', children: offcanvasRoutes },
  { path: 'pagination', children: paginationRoutes },
  { path: 'popover', children: popoverRoutes },
  { path: 'progressbar', children: progressbarRoutes },
  { path: 'rating', children: ratingRoutes },
  { path: 'table', children: tableRoutes },
  { path: 'timepicker', children: timepickerRoutes },
  { path: 'toast', children: toastRoutes },
  { path: 'tooltip', children: tooltipRoutes },
  { path: 'typeahead', children: typeaheadRoutes },
  { path: 'app-input', children: appInputRoutes },
  { path: 'app-table', children: appTableRoutes },
];

@NgModule({
  declarations: [
    DemosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DemosModule { }
