import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { StatoAvanzamentoWrapService } from '../stato-avanzamento/services/stato-avanzamento-wrap.service';
import { Commessa, CommessaSearchDto } from './models/attivita.models';
import { CommessaService } from './services/attivita.service';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent {

  @ViewChild("pmAutocomplete") pmAutocomplete!: InputComponent;
  @ViewChild("commessaAutocomplete") commessaAutocomplete!: InputComponent;
  @ViewChild("clienteAutocomplete") clienteAutocomplete!: InputComponent;

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

    this.initializeAutocompleteValues();

    // Define of autocomplete handlers
    const onPmType$ = combineLatest([
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
    .pipe(
      tap(([ clienti, commesse ]) => {
        this.commesse = commesse;
        this.clienti = clienti;
      })
    );

    const onCommessaType$ = combineLatest([
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
    .pipe(
      tap(([ pmList, clienti ]) => {
        this.pmList = pmList;
        this.clienti = clienti;
      })
    );

    const onClienteType$ = combineLatest([
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
    .pipe(
      tap(([ pmList, commesse ]) => {
        this.pmList = pmList;
        this.commesse = commesse;
      })
    );

    // Assign autocomplete handler to its control
    this.pmCtrl.valueChanges
      .pipe(switchMap(() => onPmType$))
      .subscribe();

    this.commessaCtrl.valueChanges
      .pipe(switchMap(() => onCommessaType$))
      .subscribe();
    
    this.clienteCtrl.valueChanges
      .pipe(switchMap(() => onClienteType$))
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

  initializeAutocompleteValues() {

    this.statoAvanzamentoWrap
      .getUtenti$(true, false)
      .subscribe(pmList => this.pmList = pmList);

    this.commessaService
      .getCommesseAutocomplete$()
      .subscribe(commesse => this.commesse = commesse);

    this.statoAvanzamentoWrap
      .getClienti$()
      .subscribe(clienti => this.clienti = clienti);
  }

  resetControls() {

    // DO NOT emit otherwise they will call the backend 6 times...
    this.pmCtrl.setValue(null, { emitEvent: false });
    this.commessaCtrl.setValue(null, { emitEvent: false });
    this.clienteCtrl.setValue(null, { emitEvent: false });

    // ...instead clear the input manually
    this.pmAutocomplete._autocompleteChoice = null;
    this.commessaAutocomplete._autocompleteChoice = null;
    this.clienteAutocomplete._autocompleteChoice = null;

    this.initializeAutocompleteValues();

    this.statoCtrl.setValue('true');
  }
}
