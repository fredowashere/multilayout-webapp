import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Dettaglio, EnumStatiChiusura, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { StatoAvanzamentoWrapService } from 'src/app/dashboard/features/stato-avanzamento/services/stato-avanzamento-wrap.service';
import { SottocommessaAvanzamento } from 'src/app/models/stato-avanzamento';
import { guid } from 'src/app/utils/uuid';

interface Tab {
  id: string;
  title: string;
  avanzamento: SottocommessaAvanzamento[];
}

@Component({
  selector: 'app-stato-avanzamento',
  templateUrl: './stato-avanzamento.component.html',
  styleUrls: ['./stato-avanzamento.component.css']
})
export class StatoAvanzamentoComponent {

  destroy$ = new Subject<void>();
  searchClick$ = new Subject<void>();

  activeTabId!: string;
  tabs: Tab[] = [];

  EnumStatiChiusura = EnumStatiChiusura;

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
    private statoAvanzamentoWrap: StatoAvanzamentoWrapService
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
      avanzamento
    });
  }

  closeTab(event: MouseEvent, toRemove: string) {

    // Open the tab to the left
    const tabToRemoveIndex = this.tabs
      .findIndex(tab => tab.id === toRemove);
    this.activeTabId = this.tabs[tabToRemoveIndex - 1]?.id;

    // Remove tab from the array
		this.tabs = this.tabs.filter((tab) => tab.id !== toRemove);
		event.preventDefault();
		event.stopImmediatePropagation();
	}

  salvaDettaglio() {}

  trackByIdCommessa(index: number, item: SottocommessaAvanzamento) {
    return item.commessa.codice;
  }
}
