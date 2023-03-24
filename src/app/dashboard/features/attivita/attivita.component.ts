import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { StatoAvanzamentoWrapService } from '../stato-avanzamento/services/stato-avanzamento-wrap.service';
import { Commessa, CommessaSearchDto } from './models/attivita.models';
import { CommessaService } from './services/attivita.service';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent {

  destroy$ = new Subject<void>();
  searchClick$ = new Subject<void>();

  pmCtrl = new FormControl<UtentiAnagrafica | null>(null);
  get idPm() {
    return this.pmCtrl.value?.idUtente;
  }
  pmList: UtentiAnagrafica[] = [];
  pmFormatter = (pm: UtentiAnagrafica) => pm.cognome + ' ' + pm.nome;
  pmFilter = (term: string, pm: UtentiAnagrafica) =>
    (pm.cognome + ' ' + pm.nome).toLowerCase().includes(term.toLowerCase());

  commessaCtrl = new FormControl<Commessa | null>(null);
  get idCommessa() {
    return this.commessaCtrl.value?.id;
  }
  get codiceCommessa() {
    return this.commessaCtrl.value?.codice;
  }
  commesse: Commessa[] = [];
  commesseFormatter = (sc: Commessa) => sc?.codice + ' ' + sc?.descrizione;
  commesseFilter = (term: string, sc: Commessa) =>
    (sc?.codice + ' ' + sc?.descrizione).toLowerCase().includes(term.toLowerCase());

  clienteCtrl = new FormControl<Dettaglio | null>(null);
  get idCliente() {
    return this.clienteCtrl.value?.id;
  }
  clienti: Dettaglio[] = [];
  clienteFormatter = (c: Dettaglio) => c.descrizione;
  clienteFilter = (term: string, c: Dettaglio) =>
    (c.descrizione as string).toLowerCase().includes(term.toLowerCase());

  statoCtrl = new FormControl<string | null>('true'); // backend wants a string "true" or "false"
  stati = [
    { text: 'Tutti', value: null },
    { text: 'Valido', value: 'true' },
    { text: 'Invalido', value: 'false' },
  ];

  attivita: CommessaSearchDto[] = [];

  constructor(
    private commessaService: CommessaService,
    private statoAvanzamentoWrap: StatoAvanzamentoWrapService
  ) { }

  ngOnInit() {

    this.pmCtrl.valueChanges
      .pipe(
        startWith(null),
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap
              .getClienti$(
                this.idPm,
                this.idCommessa
              ),
            this.commessaService
              .getCommesseAutocomplete$({
                idCliente: this.idCliente,
                idProjectManager: this.idPm
              })
          ])
        ),
        tap(([ clienti, commesse ]) => {
          this.commesse = commesse;
          this.clienti = clienti;
        })
      )
      .subscribe();

    this.commessaCtrl.valueChanges
      .pipe(
        startWith(null),
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap
              .getUtenti$(
                true, false,
                this.idCommessa,
                this.idCliente
              ),
            this.statoAvanzamentoWrap
              .getClienti$(
                this.idPm,
                this.idCommessa
              ),
          ])
        ),
        tap(([ pmList, clienti ]) => {
          this.pmList = pmList;
          this.clienti = clienti;
        })
      )
      .subscribe();
    
    this.clienteCtrl.valueChanges
      .pipe(
        startWith(null),
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap
              .getUtenti$(
                true, false,
                this.idCommessa,
                this.idCliente
              ),
            this.commessaService
              .getCommesseAutocomplete$({
                idCliente: this.idCliente,
                idProjectManager: this.idPm
              })
          ])
        ),
        tap(([ pmList, commesse ]) => {
          this.pmList = pmList;
          this.commesse = commesse;
        })
      )
      .subscribe();

    this.searchClick$
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() =>
          this.commessaService
            .getAllCommesse$({
              idProjectManager: this.idPm,
              codiceCommessa: this.codiceCommessa,
              idCliente: this.idCliente,
              valido: this.statoCtrl.value as string
            })
        ),
        tap(attivita => {
          this.attivita = attivita  
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  resetControls() {
    this.pmCtrl.setValue(null);
    this.commessaCtrl.setValue(null);
    this.clienteCtrl.setValue(null);
    this.statoCtrl.setValue('true');
  }
}
