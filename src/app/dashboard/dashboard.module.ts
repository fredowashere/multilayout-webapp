import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavbarComponent } from './layout/navbar/navbar.component';
import { DashboardSidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'kitchen-sink', pathMatch: 'full' },
      {
        path: 'kitchen-sink',
        loadChildren: () =>
          import('./features/kitchen-sink/kitchen-sink.module').then(m => m.KitchenSinkModule)
      },
      {
        path: 'demos',
        loadChildren: () =>
          import('./features/demos/demos.module').then(m => m.DemosModule)
      },
    ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
