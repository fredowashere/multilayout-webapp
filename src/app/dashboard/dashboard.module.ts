import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavbarComponent } from './layout/navbar/navbar.component';
import { DashboardSidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardFooterComponent } from './layout/footer/footer.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'stato-avanzamento', pathMatch: 'full' },
      {
        path: 'attivita',
        loadChildren: () =>
          import('./features/attivita/attivita.module').then(m => m.AttivitaModule)
      },
      {
        path: 'stato-avanzamento',
        loadChildren: () =>
          import('./features/stato-avanzamento/stato-avanzamento.module').then(m => m.StatoAvanzamentoModule)
      },
    ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
