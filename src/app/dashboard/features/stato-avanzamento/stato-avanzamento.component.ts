import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, combineLatest, filter, map, startWith, Subject, switchMap, takeUntil, tap, throwError } from 'rxjs';
import { Dettaglio, EnumStatiChiusura, GetSottoCommessePerReferenteResponse, UtentiAnagrafica } from 'src/app/api/modulo-attivita/models';
import { StatoAvanzamentoWrapService } from 'src/app/dashboard/features/stato-avanzamento/services/stato-avanzamento-wrap.service';
import { GetAvanzamentoParam, SottocommessaAvanzamento, SottocommessaAvanzamentoDettaglio } from 'src/app/dashboard/features/stato-avanzamento/models/stato-avanzamento.models';
import { ToastService } from 'src/app/services/toast.service';
import { enforceMinMax } from 'src/app/utils/input';
import { BUSINESS_MANAGER } from 'src/app/models/user';
import { jsonCopy } from 'src/app/utils/json';
import { InputComponent } from 'src/app/shared/components/input/input.component';

interface Tab {
  id: number;
  title: string;
  avanzamento: SottocommessaAvanzamento[];
}

@Component({
  selector: 'app-stato-avanzamento',
  templateUrl: './stato-avanzamento.component.html',
  styleUrls: ['./stato-avanzamento.component.css']
})
export class StatoAvanzamentoComponent {

  @ViewChild("clienteAutocomplete") clienteAutocomplete!: InputComponent;
  @ViewChild("sottocommessaAutocomplete") sottocommessaAutocomplete!: InputComponent;
  @ViewChild("pmAutocomplete") pmAutocomplete!: InputComponent;
  @ViewChild("bmAutocomplete") bmAutocomplete!: InputComponent;

  enforceMinMax = enforceMinMax;
  EnumStatiChiusura = EnumStatiChiusura;
  BUSINESS_MANAGER = BUSINESS_MANAGER;

  destroy$ = new Subject<void>();
  searchClick$ = new Subject<void>();

  activeTabId!: number;
  tabs: Tab[] = [];

  lastSearchFilter!: GetAvanzamentoParam;

  pmCtrl = new FormControl<UtentiAnagrafica | null>(null);
  get idPm() {
    return this.pmCtrl.value?.idUtente;
  }
  pmList: UtentiAnagrafica[] = [];
  pmFormatter = (pm: UtentiAnagrafica) => pm.cognome + ' ' + pm.nome;
  pmFilter = (term: string, pm: UtentiAnagrafica) =>
    (pm.cognome + ' ' + pm.nome).toLowerCase().includes(term.toLowerCase());

  bmCtrl = new FormControl<UtentiAnagrafica | null>(null);
  get idBm() {
    return this.bmCtrl.value?.idUtente;
  }
  bmList: UtentiAnagrafica[] = [];

  sottocommessaCtrl = new FormControl<GetSottoCommessePerReferenteResponse | null>(null);
  get idSottocommessa() {
    return this.sottocommessaCtrl.value?.sottoCommessa?.id;
  }
  sottocommesse: GetSottoCommessePerReferenteResponse[] = [];
  sottocommesseFormatter = (sc: GetSottoCommessePerReferenteResponse) => sc.sottoCommessa?.codice + ' ' + sc.sottoCommessa?.descrizione;
  sottocommesseFilter = (term: string, sc: GetSottoCommessePerReferenteResponse) =>
    (sc.sottoCommessa?.codice + ' ' + sc.sottoCommessa?.descrizione).toLowerCase().includes(term.toLowerCase());

  clienteCtrl = new FormControl<Dettaglio | null>(null);
  get idCliente() {
    return this.clienteCtrl.value?.id;
  }
  clienti: Dettaglio[] = [];
  clienteFormatter = (c: Dettaglio) => c.descrizione;
  clienteFilter = (term: string, c: Dettaglio) =>
    (c.descrizione as string).toLowerCase().includes(term.toLowerCase());

  statoCtrl = new FormControl<number>(0);
  stati = [
    { text: 'Tutti', value: 0 },
    { text: 'Aperto', value: 1 },
    { text: 'Chiuso', value: 2 },
    { text: 'Vistato', value: 3 },
  ];

  constructor(
    private statoAvanzamentoWrap: StatoAvanzamentoWrapService,
    private toastService: ToastService
  ) { }
  
  ngOnInit() {

    this.initializeAutocompleteValues();

    this.setupAutocompletes();

    this.searchClick$
      .pipe(
        takeUntil(this.destroy$),
        map(() =>
          ({
            idReferente: this.idPm,
            idBusinessManager: this.idBm,
            idSottoCommessa: this.idSottocommessa,
            idCliente: this.idCliente,
            stato: this.statoCtrl.value as number
          })
        ),
        tap(searchParam =>
          this.lastSearchFilter = jsonCopy(searchParam)
        ),
        filter(() => {
          let _confirm = true;
          if (this.hasUnsavedWork())
            _confirm = confirm("Hai del lavoro in sospeso, e rilanciando la ricerca potresti perderlo. Vuoi comunque continuare?");
          return _confirm;
        }),
        switchMap(searchParam =>
          this.statoAvanzamentoWrap
            .getAvanzamento$(searchParam)
        ),
        tap(avanzamento =>
          this.updateResults(avanzamento)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  initializeAutocompleteValues() {

    this.statoAvanzamentoWrap
      .getClienti$()
      .subscribe(clienti => this.clienti = clienti);

    this.statoAvanzamentoWrap
      .getSottocommesse$()
      .subscribe(sottocommesse => this.sottocommesse = sottocommesse);

    this.statoAvanzamentoWrap
      .getUtenti$({
        IsPm: true,
        IsBm: false
      })
      .subscribe(pmList => this.pmList = pmList);

    this.statoAvanzamentoWrap
      .getUtenti$({
        IsPm: false,
        IsBm: true
      })
      .subscribe(bmList => this.bmList = bmList);
  }

  setupAutocompletes() {

    this.pmCtrl.valueChanges
      .pipe(
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap
              .getClienti$({
                idBusinessManager: this.idBm,
                idReferente: this.idPm,
                idSottoCommessa: this.idSottocommessa
              }),
            this.statoAvanzamentoWrap
              .getSottocommesse$({
                idBusinessManager: this.idBm,
                idReferente: this.idPm,
                idCliente: this.idCliente
              })
          ])
        ),
        tap(([ clienti, sottocommesse ]) => {
          this.sottocommesse = sottocommesse;
          this.clienti = clienti;
        })
      )
      .subscribe();

    this.bmCtrl.valueChanges
      .pipe(
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap
              .getClienti$({
                idBusinessManager: this.idBm,
                idReferente: this.idPm,
                idSottoCommessa: this.idSottocommessa
              }),
            this.statoAvanzamentoWrap
              .getSottocommesse$({
                idBusinessManager: this.idBm,
                idReferente: this.idPm,
                idCliente: this.idCliente
              })
          ])
        ),
        tap(([ clienti, sottocommesse ]) => {
          this.sottocommesse = sottocommesse;
          this.clienti = clienti;
        })
      )
      .subscribe();

    this.sottocommessaCtrl.valueChanges
      .pipe(
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap
              .getUtenti$({
                IsPm: true,
                IsBm: false,
                idSottoCommessa: this.idSottocommessa,
                idCliente: this.idCliente
              }),
            this.statoAvanzamentoWrap
              .getUtenti$({
                IsPm: false,
                IsBm: true,
                idSottoCommessa: this.idSottocommessa,
                idCliente: this.idCliente
              }),
            this.statoAvanzamentoWrap
              .getClienti$({
                idBusinessManager: this.idBm,
                idReferente: this.idPm,
                idSottoCommessa: this.idSottocommessa
              }),
          ])
        ),
        tap(([ pmList, bmList, clienti ]) => {
          this.pmList = pmList;
          this.bmList = bmList;
          this.clienti = clienti;
        })
      )
      .subscribe();
    
    this.clienteCtrl.valueChanges
      .pipe(
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap
              .getUtenti$({
                IsPm: true,
                IsBm: false,
                idSottoCommessa: this.idSottocommessa,
                idCliente: this.idCliente
              }),
            this.statoAvanzamentoWrap
              .getUtenti$({
                IsPm: false,
                IsBm: true,
                idSottoCommessa: this.idSottocommessa,
                idCliente: this.idCliente
              }),
            this.statoAvanzamentoWrap
              .getSottocommesse$({
                idReferente: this.idPm,
                idCliente: this.idCliente
              })
          ])
        ),
        tap(([ pmList, bmList, sottocommesse ]) => {
          this.pmList = pmList;
          this.bmList = bmList;
          this.sottocommesse = sottocommesse;
        })
      )
      .subscribe();
  }

  resetControls() {

    // DO NOT emit otherwise they will call the backend 6 times...
    this.pmCtrl.setValue(null, { emitEvent: false });
    this.bmCtrl.setValue(null, { emitEvent: false });
    this.sottocommessaCtrl.setValue(null, { emitEvent: false });
    this.clienteCtrl.setValue(null, { emitEvent: false });

    // ...instead clear the input manually
    this.clienteAutocomplete._autocompleteChoice = null;
    this.sottocommessaAutocomplete._autocompleteChoice = null;
    this.pmAutocomplete._autocompleteChoice = null;
    this.bmAutocomplete._autocompleteChoice = null;

    this.initializeAutocompleteValues();
    
    this.statoCtrl.setValue(0);
  }

  updateResults(avanzamento: SottocommessaAvanzamento[]) {

    const idPmAvanzamento = avanzamento
      .reduce(
        (a, b) => {
          a[b.referente.idUtente as number] = a[b.referente.idUtente as number] || [];
          a[b.referente.idUtente as number].push(b);
          return a;
        },
        {} as { [key: number]: SottocommessaAvanzamento[] }
      );

    const idPmList = Object.keys(idPmAvanzamento) as unknown as number[];

    // Clean tabs that are not present in the current view
    for (let i = this.tabs.length - 1; i > -1; i--) {

      const tab = this.tabs[i];

      if (!idPmAvanzamento[tab.id])
        this.tabs.splice(i, 1);
    }

    // Create/update tabs
    for (const idPm of idPmList) {

      const { referente: ref } = idPmAvanzamento[idPm][0];

      this.addTab(
        idPm,
        ref.cognome + ' ' + ref.nome,
        idPmAvanzamento[idPm]
      );
    }

    // If current tab doesn't exist anymore, then go back to first
    if (!this.tabs.map(t => t.id).includes(this.activeTabId))
      this.activeTabId = this.tabs[0]?.id;
  }

  addTab(
    id: number,
    title: string,
    avanzamento: SottocommessaAvanzamento[]
  ) {

    // Update existing
    const tabIndex = this.tabs.findIndex(t => t.id === id);
    if (tabIndex > - 1) {
      this.tabs[tabIndex].avanzamento = avanzamento;
      return;
    }
    
    // Create new
    this.tabs.push({
      id,
      title,
      avanzamento
    });
  }

  hasUnsavedWork(t?: Tab) {

    // Check given tab
    if (t)
      return t.avanzamento.some(a =>
        a.dettaglio.some(d =>
          d.dirty
        )
      );

    // Check all tabs
    return this.tabs.some(t =>
      t.avanzamento.some(a =>
        a.dettaglio.some(d =>
          d.dirty
        )
      )
    );
  }

  salvaDettagliSelezionati(dettagli: SottocommessaAvanzamentoDettaglio[]) {
    console.log(dettagli);
    this.toastService.show("Non implementato", { classname: 'bg-warning' });
  }

  chiudiDettagliSelezionati(dettagli: SottocommessaAvanzamentoDettaglio[]) {
    console.log(dettagli);
    this.toastService.show("Non implementato", { classname: 'bg-warning' });
  }

  salvaDettaglio(dettaglio: SottocommessaAvanzamentoDettaglio) {
    this.statoAvanzamentoWrap
      .postAvanzamento$(dettaglio)
      .pipe(
        catchError(err => {
          this.toastService.show(err.error, { classname: 'bg-danger text-light', delay: 10000 });
          return throwError(err);
        }),
        tap(() =>
          this.statoAvanzamentoWrap
            .getAvanzamento$(this.lastSearchFilter) // Call the backend with the last filter
            .subscribe(avanzamento =>
              this.updateResults(avanzamento)
            )
        )
      )
      .subscribe();
  }

  trackByIdCommessa(index: number, item: SottocommessaAvanzamento) {
    return item.commessa.codice;
  }
}
