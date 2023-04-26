import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DiarieAziendaComponent } from './diarie-azienda.component';

const routes: Routes = [
  { path: "", component: DiarieAziendaComponent }
];

@NgModule({
  declarations: [
    DiarieAziendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DiarieAziendaModule { }
