import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatoAvanzamentoComponent } from './stato-avanzamento.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: '', component: StatoAvanzamentoComponent }
];

@NgModule({
  declarations: [
    StatoAvanzamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class StatoAvanzamentoModule { }
