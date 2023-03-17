import { Injectable } from '@angular/core';
import { EnumStatiChiusura, GetSottoCommesseAvanzamentoResponse, UtentiAnagrafica } from '../api/stato-avanzamento/models';
import { pm, sottoCommesseAvanzamento } from '../mocks/stato-avanzamento';
import { SottoCommessaAvanzamento } from '../models/stato-avanzamento';

@Injectable({
  providedIn: 'root'
})
export class StatoAvanzamentoService {

  constructor() {}

  getPm() {
    return pm as unknown as UtentiAnagrafica[];
  }

  getSottoCommesseAvanzamento() {
    return [...sottoCommesseAvanzamento.map(sc => new SottoCommessaAvanzamento(sc as unknown as GetSottoCommesseAvanzamentoResponse))];
  }

  getSottoCommesseAvanzamentoAggiornate() {
    const avanzamento = this.getSottoCommesseAvanzamento();
    avanzamento[2].dettaglio[1].statoValidazione.id = EnumStatiChiusura.Aperto;
    console.log(avanzamento[2]);
    return avanzamento;
  }
}
