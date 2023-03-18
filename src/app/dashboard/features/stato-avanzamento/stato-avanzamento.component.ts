import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnumStatiChiusura, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { SottoCommessaAvanzamento, SottoCommessaAvanzamentoDettaglio } from 'src/app/models/stato-avanzamento';
import { StatoAvanzamentoWrapService } from 'src/app/dashboard/features/stato-avanzamento/services/stato-avanzamento-wrap.service';

@Component({
  selector: 'app-stato-avanzamento',
  templateUrl: './stato-avanzamento.component.html',
  styleUrls: ['./stato-avanzamento.component.css']
})
export class StatoAvanzamentoComponent {

  EnumStatiChiusura = EnumStatiChiusura;

  pmCtrl!: FormControl;
  commessaCtrl!: FormControl;
  statoCtrl!: FormControl;

  form!: FormGroup;

  stati = [
    { text: 'Tutti', value: 0 },
    { text: 'Aperto', value: 1 },
    { text: 'Chiuso', value: 2 },
    { text: 'Vistato', value: 3 },
  ];

  pmFormatter = (pm: any) => pm.cognome + ' ' + pm.nome;
  pmFilter = (term: string, pm: any) =>
    (pm.cognome + ' ' + pm.nome).toLowerCase().indexOf(term.toLowerCase()) > -1;
  pm: UtentiAnagrafica[] = [];

  sottoCommesseAvanzamento: SottoCommessaAvanzamento[] = [];

  constructor(
    private statoAvanzamentoWrap: StatoAvanzamentoWrapService
  ) {}

  ngOnInit() {

    this.pm = this.statoAvanzamentoWrap.getPm();

    this.pmCtrl = new FormControl();
    this.commessaCtrl = new FormControl();
    this.statoCtrl = new FormControl();

    this.form = new FormGroup({
      pm: this.pmCtrl,
      commessa: this.commessaCtrl,
      stato: this.statoCtrl
    });

    this.sottoCommesseAvanzamento = this.statoAvanzamentoWrap.getSottoCommesseAvanzamento();
  }

  salvaDettaglio() {
    this.sottoCommesseAvanzamento = this.statoAvanzamentoWrap.getSottoCommesseAvanzamentoAggiornate();
  }

  trackByIdCommessa(index: number, item: SottoCommessaAvanzamento) {
    return item.commessa.codice;
  }
}
