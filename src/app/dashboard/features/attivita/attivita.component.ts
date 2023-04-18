import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, merge, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/modulo-attivita/models';
import { ToastService } from 'src/app/services/toast.service';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { delayedScrollTo } from 'src/app/utils/dom';
import { jsonCopy } from 'src/app/utils/json';
import { StatoAvanzamentoWrapService } from '../stato-avanzamento/services/stato-avanzamento-wrap.service';
import { CommessaCreazioneModifica } from './dialogs/commessa-creazione-modifica/commessa-creazione-modifica.component';
import { EliminazioneDialog } from './dialogs/eliminazione.dialog';
import { Commessa, CommessaSearchDto } from './models/commessa';
import { CommessaService } from './services/commessa.service';
import { MiscDataService } from './services/miscData.service';

const today = new Date();
const [ currYear, currMonth, currDay ] = [ today.getFullYear(), today.getMonth() + 1, today.getDate() ];

interface Tab {
  id: number;
  codiceCommessa: string;
}

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent {

  @ViewChild("clienteDirettoAutocomplete") clienteDirettoAutocomplete!: InputComponent;
  @ViewChild("clienteFinaleAutocomplete") clienteFinaleAutocomplete!: InputComponent;
  @ViewChild("commessaAutocomplete") commessaAutocomplete!: InputComponent;
  @ViewChild("pmAutocomplete") pmAutocomplete!: InputComponent;
  @ViewChild("bmAutocomplete") bmAutocomplete!: InputComponent;

  destroy$ = new Subject<void>();
  searchClick$ = new Subject<void>();
  refresh$ = new Subject<void>();
  isLoading = false;

  activeTabId!: number;
  tabs: Tab[] = [];

  clienteDirettoCtrl = new FormControl<Dettaglio | null>(null);
  get idClienteDiretto() {
    return this.clienteDirettoCtrl.value?.id;
  }
  clientiDiretti: Dettaglio[] = [];
  clienteFormatter = (c: Dettaglio) => c.descrizione;
  clienteFilter = (term: string, c: Dettaglio) =>
    (c.descrizione as string).toLowerCase().includes(term.toLowerCase());

  clienteFinaleCtrl = new FormControl<Dettaglio | null>(null);
  get idClienteFinale() {
    return this.clienteFinaleCtrl.value?.id;
  }
  clientiFinali: Dettaglio[] = [];

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

  descrizioneCtrl = new FormControl<string | null>(null);

  tipoAttivitaCtrl = new FormControl<number | null>(null);
  get tipoAttivita() {
    return this.tipoAttivitaCtrl.value;
  }
  tipiAttivita = [
    { text: 'Tutte', value: null },
    { text: 'Opportunità', _descr: "optn", value: 1 },
    { text: 'Commessa interna', _descr: "cmint", value: 2 }
  ];

  statoCtrl = new FormControl<string | null>('true'); // backend wants a string "true" or "false"
  stati = [
    { text: 'Tutte', value: null },
    { text: 'Valida', value: 'true' },
    { text: 'Annullata', value: 'false' },
  ];

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

  // dataInizioDef = `${currMonth > 1 ? currYear : currYear - 1}-${('' + (currMonth > 1 ? currMonth - 1 : 12)).padStart(2, '0')}-01`;
  dataInizioCtrl = new FormControl();
  get dataInizio() {
    return this.dataInizioCtrl.value;
  }

  // dataFineDef = `${currMonth < 12 ? currYear : currYear + 1}-${('' + (currMonth < 12 ? currMonth + 1 : 1)).padStart(2, '0')}-01`;
  dataFineCtrl = new FormControl();
  get dataFine() {
    return this.dataFineCtrl.value;
  }

  commesseResults: CommessaSearchDto[] = [];

  constructor(
    private commessaService: CommessaService,
    private statoAvanzamentoWrap: StatoAvanzamentoWrapService,
    private miscDataService: MiscDataService,
    private modalService: NgbModal,
    private toaster: ToastService
  ) { }

  ngOnInit() {

    this.initializeAutocompleteValues();

    this.attachAutocompleteListeners();
    
    let init = false;
    merge(this.searchClick$, this.refresh$)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.isLoading = true),
        switchMap(() =>
          this.commessaService
            .getAllCommesse$({
              idCliente: this.idClienteDiretto,
              idClienteFinale: this.idClienteFinale,
              codiceCommessa: this.codiceCommessa,
              idProjectManager: this.idPm,
              idBusinessManager: this.idBm,
              idFase: this.tipoAttivita as number,
              valido: this.statoCtrl.value as string,
              dataInizio: this.dataInizio,
              dataFine: this.dataFine
            })
        ),
        tap(commesseResults => {
          this.isLoading = false;
          this.commesseResults = commesseResults;

          if (!init) {
            delayedScrollTo("#tabella-commesse");
            init = true;
          }
        })
      )
      .subscribe();

    // When adding a new commessa
    this.refresh$
      .subscribe(() =>
        this.initializeAutocompleteValues(false, true, false) // only refresh commesse
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  initializeAutocompleteValues(
    refreshUtenti = true,
    refreshCommesse = true,
    refreshClienti = true
  ) {

    if (refreshUtenti) {

      this.statoAvanzamentoWrap
        .getUtenti$({ IsPm: true, IsBm: false })
        .subscribe(pmList => this.pmList = pmList);

      this.statoAvanzamentoWrap
        .getUtenti$({ IsPm: false, IsBm: true })
        .subscribe(bmList => this.bmList = bmList);
    }

    if (refreshCommesse)
      this.commessaService
        .getCommesseAutocomplete$()
        .subscribe(commesse => this.commesse = commesse);

    if (refreshClienti)
      this.statoAvanzamentoWrap
        .getClienti$({ totali: true })
        .subscribe(clienti => {
          this.clientiDiretti = jsonCopy(clienti);
          this.clientiFinali = jsonCopy(clienti);
        });
  }

  attachAutocompleteListeners() {

    // Define of autocomplete handlers
    const onClienteSelect$ = () => combineLatest([
      this.statoAvanzamentoWrap
        .getUtenti$({
          IsPm: true,
          IsBm: false,
          idCliente: this.idClienteDiretto,
          idCommessa: this.idCommessa
        }),
      this.statoAvanzamentoWrap
        .getUtenti$({
          IsPm: false,
          IsBm: true,
          idCliente: this.idClienteDiretto,
          idCommessa: this.idCommessa
        }),
      this.commessaService
        .getCommesseAutocomplete$({
          idCliente: this.idClienteDiretto,
          idProjectManager: this.idPm,
          idBusinessManager: this.idBm
        })
    ])
    .pipe(
      tap(([ pmList, bmList, commesse ]) => {
        this.pmList = pmList;
        this.bmList = bmList;
        this.commesse = commesse;
      })
    );

    const onCommessaSelect$ = () => combineLatest([
      this.statoAvanzamentoWrap
        .getUtenti$({
          IsPm: true,
          IsBm: false,
          idCliente: this.idClienteDiretto,
          idCommessa: this.idCommessa
        }),
      this.statoAvanzamentoWrap
        .getUtenti$({
          IsPm: false,
          IsBm: true,
          idCliente: this.idClienteDiretto,
          idCommessa: this.idCommessa
        }),
      this.statoAvanzamentoWrap
        .getClienti$({
          idReferente: this.idPm,
          idBusinessManager: this.idBm,
          idCommessa: this.idCommessa,
          totali: true
        }),
    ])
    .pipe(
      tap(([ pmList, bmList, clienti ]) => {
        this.pmList = pmList;
        this.bmList = bmList;
        this.clientiDiretti = clienti;
      })
    );

    const onPmSelect$ = () => combineLatest([
      this.statoAvanzamentoWrap
        .getClienti$({
          idReferente: this.idPm,
          idBusinessManager: this.idBm,
          idCommessa: this.idCommessa,
          totali: true
        }),
      this.commessaService
        .getCommesseAutocomplete$({
          idCliente: this.idClienteDiretto,
          idProjectManager: this.idPm
        })
    ])
    .pipe(
      tap(([ clienti, commesse ]) => {
        this.commesse = commesse;
        this.clientiDiretti = clienti;
      })
    );

    const onBmSelect$ = () => combineLatest([
      this.statoAvanzamentoWrap
        .getClienti$({
          idReferente: this.idPm,
          idBusinessManager: this.idBm,
          idCommessa: this.idCommessa,
          totali: true
        }),
      this.commessaService
        .getCommesseAutocomplete$({
          idCliente: this.idClienteDiretto,
          idProjectManager: this.idPm
        })
    ])
    .pipe(
      tap(([ clienti, commesse ]) => {
        this.commesse = commesse;
        this.clientiDiretti = clienti;
      })
    );

    // Assign autocomplete handler to its control
    this.clienteDirettoCtrl.valueChanges
      .pipe(switchMap(() => onClienteSelect$()))
      .subscribe();

    this.commessaCtrl.valueChanges
      .pipe(switchMap(() => onCommessaSelect$()))
      .subscribe();

    this.pmCtrl.valueChanges
      .pipe(switchMap(() => onPmSelect$()))
      .subscribe();

    this.bmCtrl.valueChanges
      .pipe(switchMap(() => onBmSelect$()))
      .subscribe();
  }

  resetControls() {

    // DO NOT emit otherwise they will call the backend 6 times...
    this.clienteDirettoCtrl.setValue(null, { emitEvent: false });
    this.clienteFinaleCtrl.setValue(null, { emitEvent: false });
    this.commessaCtrl.setValue(null, { emitEvent: false });
    this.pmCtrl.setValue(null, { emitEvent: false });
    this.bmCtrl.setValue(null, { emitEvent: false });

    // ...instead clear the input manually
    this.clienteDirettoAutocomplete._autocompleteChoice = null;
    this.clienteFinaleAutocomplete._autocompleteChoice = null;
    this.commessaAutocomplete._autocompleteChoice = null;
    this.pmAutocomplete._autocompleteChoice = null;
    this.bmAutocomplete._autocompleteChoice = null;

    this.initializeAutocompleteValues();

    this.statoCtrl.setValue('true');
    this.tipoAttivitaCtrl.setValue(null);
  }

  addTab(id: number, codiceCommessa: string) {

    const tabAlreadyExist = this.tabs.find(t => t.id === id);
    if (tabAlreadyExist) {
      this.activeTabId = id;
      delayedScrollTo("#commessa-" + id);
      return;
    }

    this.activeTabId = id;

    this.tabs.push({
      id,
      codiceCommessa
    });

    delayedScrollTo("#commessa-" + id);
  }

  closeTab(toRemove: number, evt?: MouseEvent) {

    // Open the tab to the left
    const tabToRemoveIndex = this.tabs.findIndex(tab => tab.id === toRemove);
    if (this.activeTabId === toRemove)
      if (tabToRemoveIndex === 0)
        this.activeTabId = this.tabs[tabToRemoveIndex + 1]?.id; // right
      else
        this.activeTabId = this.tabs[tabToRemoveIndex - 1]?.id; // left

    // Remove tab from the array
		this.tabs = this.tabs.filter((tab) => tab.id !== toRemove);

    if (evt) {
      evt.preventDefault();
      evt.stopImmediatePropagation();
    }
	}

  async create() {

    const modalRef = this.modalService
      .open(
        CommessaCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );

    const result = await modalRef.result;
    this.addTab(result.idCommessa, result.codiceCommessa);
    this.refresh$.next();
  }

  async update(commessa: CommessaSearchDto) {

    const modalRef = this.modalService
      .open(
        CommessaCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idCommessa = commessa.id;

    await modalRef.result;
    this.refresh$.next();
  }

  async deleteCommessaInterna(commessa: CommessaSearchDto) {

    const modalRef = this.modalService
      .open(
        EliminazioneDialog,
        {
          size: 'md',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.name = commessa.codiceCommessa;
    modalRef.componentInstance.message = "Stai eliminando definitivamente una commessa interna."

    await modalRef.result;

    this.commessaService
      .deleteCommessaInterna$(commessa.id)
      .subscribe(
        () => {

          const txt = "Commessa interna eliminata con successo!";
          this.toaster.show(txt, { classname: 'bg-success text-white' });

          this.closeTab(commessa.id);

          this.refresh$.next();
        },
        (ex) => {
          this.toaster.show(ex.error, { classname: 'bg-danger text-white' });
        }
      );
  }

  async cancelOpportunita(commessa: CommessaSearchDto) {

    const modalRef = this.modalService
      .open(
        EliminazioneDialog,
        {
          size: 'md',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.name = commessa.codiceCommessa;
    modalRef.componentInstance.reversible = true;
    modalRef.componentInstance.message = "Stai disabilitando un'opportunità, potrai ripristinarla in qualunque momento."

    await modalRef.result;

    this.commessaService
      .cancelOpportunita$(commessa.id)
      .subscribe(
        () => {

          const txt = "Opportunità disabilitata con successo!";
          this.toaster.show(txt, { classname: 'bg-success text-white' });

          this.closeTab(commessa.id);

          this.refresh$.next();
        },
        (ex) => {
          this.toaster.show(ex.error, { classname: 'bg-danger text-white' });
        }
      );
  }

  restore(commessa: CommessaSearchDto) {
    this.commessaService
      .restoreOpportunita(commessa.id)
      .subscribe(
        () => {
          const txt = "Opportunità ripristinata con successo!";
          this.toaster.show(txt, { classname: 'bg-success text-white' });
          this.refresh$.next();
        },
        (ex) => {
          this.toaster.show(ex.error, { classname: 'bg-danger text-white' });
        }
      );
  }
}
