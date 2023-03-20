import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, startWith, Subject, switchMap, takeUntil, tap, throwError } from 'rxjs';
import { Dettaglio, EnumStatiChiusura, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { StatoAvanzamentoWrapService } from 'src/app/dashboard/features/stato-avanzamento/services/stato-avanzamento-wrap.service';
import { SottocommessaAvanzamento, SottocommessaAvanzamentoDettaglio } from 'src/app/models/stato-avanzamento';
import { ToastService } from 'src/app/services/toast.service';
import { enforceMinMax } from 'src/app/utils/input';
import { guid } from 'src/app/utils/uuid';

interface Tab {
  id: string;
  title: string;
  pm: UtentiAnagrafica;
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

  destroy$ = new Subject<void>();
  searchClick$ = new Subject<void>();

  activeTabId!: string;
  tabs: Tab[] = [];

  pmCtrl = new FormControl<UtentiAnagrafica | null>(null);
  get idPm() {
    return this.pmCtrl.value?.idUtente;
  }
  pmList: UtentiAnagrafica[] = [];
  pmFormatter = (pm: UtentiAnagrafica) => pm.cognome + ' ' + pm.nome;
  pmFilter = (term: string, pm: UtentiAnagrafica) =>
    (pm.cognome + ' ' + pm.nome).toLowerCase().includes(term.toLowerCase());

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
        switchMap(pm =>
          this.statoAvanzamentoWrap
            .getClienti$(pm?.idUtente)
        ),
        tap(clienti => this.clienti = clienti)
      )
      .subscribe();
    
    this.clienteCtrl.valueChanges
      .pipe(
        startWith(null),
        switchMap(cliente =>
          this.statoAvanzamentoWrap
            .getUtenti$(true, false, undefined, cliente?.id)
        ),
        tap(pmList => this.pmList = pmList)
      )
      .subscribe();

    this.searchClick$
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() =>
          this.statoAvanzamentoWrap
            .getAvanzamento$(
              this.idPm as number,
              undefined,
              this.idCliente,
              this.statoCtrl.value as number
            )
        ),
        tap(avanzamento => {
          this.addTab(
            this.pmCtrl.value?.cognome as string,
            avanzamento
          );
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

  addTab(title: string, avanzamento: SottocommessaAvanzamento[]) {

    const id = guid();
    this.activeTabId = id;

    this.tabs.push({
      id,
      title,
      avanzamento,
      pm: this.pmCtrl.value as UtentiAnagrafica,
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
    this.toastService.show("Non implementato", { classname: 'bg-info fw-bold' });
  }

  chiudiDettagliSelezionati(dettagli: SottocommessaAvanzamentoDettaglio[]) {
    console.log(dettagli);
    this.toastService.show("Non implementato", { classname: 'bg-info fw-bold' });
  }

  salvaDettaglio(dettaglio: SottocommessaAvanzamentoDettaglio) {
    this.statoAvanzamentoWrap
      .postAvanzamento$(dettaglio)
      .pipe(
        catchError(err => {
          this.toastService.show(err.error, { classname: 'bg-danger text-light', delay: 10000 });
          return throwError(err);
        }),
        tap(() => {

          const activeTabIndex = this.tabs.findIndex(t => t.id === this.activeTabId);

          const { pm, cliente, stato } = this.tabs[activeTabIndex];

          // Call the backend with the original filter and update tab avanzamento
          this.statoAvanzamentoWrap
            .getAvanzamento$(
              pm.idUtente as number,
              undefined,
              cliente?.id,
              stato
            )
            .subscribe(avanzamento => this.tabs[activeTabIndex].avanzamento = avanzamento);
        })
      )
      .subscribe();
  }

  trackByIdCommessa(index: number, item: SottocommessaAvanzamento) {
    return item.commessa.codice;
  }
}
