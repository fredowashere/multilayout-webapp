import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { catchError, combineLatest, startWith, Subject, switchMap, takeUntil, tap, throwError } from 'rxjs';
import { Dettaglio, EnumStatiChiusura, GetSottoCommessePerReferenteResponse, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { StatoAvanzamentoWrapService } from 'src/app/dashboard/features/stato-avanzamento/services/stato-avanzamento-wrap.service';
import { SottocommessaAvanzamento, SottocommessaAvanzamentoDettaglio } from 'src/app/dashboard/features/stato-avanzamento/models/stato-avanzamento';
import { ToastService } from 'src/app/services/toast.service';
import { enforceMinMax } from 'src/app/utils/input';
import { guid } from 'src/app/utils/uuid';
import { BUSINESS_MANAGER } from 'src/app/models/user';

interface Tab {
  id: string;
  title: string;
  pm: UtentiAnagrafica;
  sottocommessa: GetSottoCommessePerReferenteResponse | null;
  cliente: Dettaglio | null;
  stato: number;
  avanzamento: SottocommessaAvanzamento[];
}

@Component({
  selector: 'app-stato-avanzamento',
  templateUrl: './stato-avanzamento.component.html',
  styleUrls: ['./stato-avanzamento.component.css']
})
export class StatoAvanzamentoComponent {

  enforceMinMax = enforceMinMax;
  EnumStatiChiusura = EnumStatiChiusura;
  BUSINESS_MANAGER = BUSINESS_MANAGER;

  destroy$ = new Subject<void>();
  searchClick$ = new Subject<void>();

  activeTabId!: string;
  tabs: Tab[] = [];

  pmCtrl = new FormControl<UtentiAnagrafica | null>(null, [Validators.required]);
  get idPm() {
    return this.pmCtrl.value?.idUtente;
  }
  pmList: UtentiAnagrafica[] = [];
  pmFormatter = (pm: UtentiAnagrafica) => pm.cognome + ' ' + pm.nome;
  pmFilter = (term: string, pm: UtentiAnagrafica) =>
    (pm.cognome + ' ' + pm.nome).toLowerCase().includes(term.toLowerCase());

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

  sottocommesseAvanzamento: SottocommessaAvanzamento[] = [];

  constructor(
    private statoAvanzamentoWrap: StatoAvanzamentoWrapService,
    private toastService: ToastService
  ) { }
  
  ngOnInit() {

    this.pmCtrl.valueChanges
      .pipe(
        startWith(null),
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap.getClienti$(
              this.idPm,
              this.idSottocommessa
            ),
            this.statoAvanzamentoWrap.getSottocommesse$(
              this.idPm,
              this.idCliente
            )
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
        startWith(null),
        switchMap(() =>
          combineLatest([
            this.statoAvanzamentoWrap.getUtenti$(
              true, false,
              this.idSottocommessa,
              this.idCliente
            ),
            this.statoAvanzamentoWrap.getClienti$(
              this.idPm,
              this.idSottocommessa
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
            this.statoAvanzamentoWrap.getUtenti$(
              true, false,
              this.idSottocommessa,
              this.idCliente
            ),
            this.statoAvanzamentoWrap.getSottocommesse$(
              this.idPm,
              this.idCliente
            )
          ])
        ),
        tap(([ pmList, sottocommesse ]) => {
          this.pmList = pmList;
          this.sottocommesse = sottocommesse;
        })
      )
      .subscribe();

    this.searchClick$
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() =>
          this.statoAvanzamentoWrap
            .getAvanzamento$(
              this.idPm as number,
              this.idSottocommessa,
              this.idCliente,
              this.statoCtrl.value as number
            )
        ),
        tap(avanzamento => {
          this.addTab(avanzamento);
          this.sottocommesseAvanzamento = avanzamento  
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  resetControls() {
    this.pmCtrl.setValue(null);
    this.clienteCtrl.setValue(null);
    this.statoCtrl.setValue(0);
  }

  addTab(avanzamento: SottocommessaAvanzamento[]) {

    const title = this.pmCtrl.value?.cognome + ' ' + this.pmCtrl.value?.nome;

    const isAlreadyIncluded = this.tabs.some(t => t.pm.idUtente === this.pmCtrl.value?.idUtente);
    if (isAlreadyIncluded) {
      const txt = `${title} già incluso nelle tab di ricerca`;
      this.toastService.show(txt, { classname: 'bg-danger text-white' });
      return;
    }

    const id = guid();
    this.activeTabId = id;

    this.tabs.push({
      id,
      title,
      avanzamento,
      pm: this.pmCtrl.value as UtentiAnagrafica,
      sottocommessa: this.sottocommessaCtrl.value,
      cliente: this.clienteCtrl.value,
      stato: this.statoCtrl.value as number,
    });
  }

  closeTab(event: MouseEvent, toRemove: string) {

    // Open the tab to the left
    const tabToRemoveIndex = this.tabs.findIndex(tab => tab.id === toRemove);
    this.activeTabId = this.tabs[tabToRemoveIndex - 1]?.id;

    // Remove tab from the array
		this.tabs = this.tabs.filter((tab) => tab.id !== toRemove);
		event.preventDefault();
		event.stopImmediatePropagation();
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

    // Save active tab and filters
    const activeTabIndex = this.tabs.findIndex(t => t.id === this.activeTabId);
    const activeTab = this.tabs[activeTabIndex];
    const {
      pm,
      sottocommessa,
      cliente,
      stato
    } = this.tabs[activeTabIndex];

    this.statoAvanzamentoWrap
      .postAvanzamento$(dettaglio)
      .pipe(
        catchError(err => {
          this.toastService.show(err.error, { classname: 'bg-danger text-light', delay: 10000 });
          return throwError(err);
        }),
        tap(() => {

          // Call the backend with the original filter and update tab avanzamento
          this.statoAvanzamentoWrap
            .getAvanzamento$(
              pm.idUtente as number,
              sottocommessa?.sottoCommessa?.id,
              cliente?.id,
              stato
            )
            .subscribe(avanzamento =>
              activeTab.avanzamento = avanzamento
            );
        })
      )
      .subscribe();
  }

  trackByIdCommessa(index: number, item: SottocommessaAvanzamento) {
    return item.commessa.codice;
  }
}
