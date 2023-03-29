import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttivitaComponent } from './attivita.component';
import { OpportunitaComponent } from './components/opportunita/opportunita.component';
import { OffertaComponent } from './components/offerta/offerta.component';
import { SottocommesseComponent } from './components/sottocommesse/sottocommesse.component';
import { TaskComponent } from './components/task/task.component';
import { RisorseComponent } from './components/risorse/risorse.component';
import { CostiComponent } from './components/costi/costi.component';
import { RicaviComponent } from './components/ricavi/ricavi.component';
import { OrdiniComponent } from './components/ordini/ordini.component';
import { FattureComponent } from './components/fatture/fatture.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EliminazioneDialog } from './dialogs/eliminazione.dialog';
import { AttivitaNavigationComponent } from './components/attivita-navigation/attivita-navigation.component';
import { AttivitaCreazioneModifica } from './dialogs/attivita-creazione-modifica/attivita-creazione-modifica.component';


const routes: Routes = [
  { path: '', component: AttivitaComponent }
];

@NgModule({
  declarations: [
    AttivitaComponent,
    OpportunitaComponent,
    OffertaComponent,
    SottocommesseComponent,
    TaskComponent,
    RisorseComponent,
    CostiComponent,
    RicaviComponent,
    OrdiniComponent,
    FattureComponent,
    EliminazioneDialog,
    AttivitaCreazioneModifica,
    AttivitaNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AttivitaModule { }