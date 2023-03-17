/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { Dettaglio } from './dettaglio';
import { GetSottoCommesseAvanzamentoResponseDettaglio } from './get-sotto-commesse-avanzamento-response-dettaglio';
import { UtentiAnagrafica } from './utenti-anagrafica';
export interface GetSottoCommesseAvanzamentoResponse {
  cliente?: Dettaglio;
  clienteFinale?: Dettaglio;
  commessa?: Commessa;
  dataFine?: null | string;
  dataInizio?: null | string;
  dettaglio?: null | Array<GetSottoCommesseAvanzamentoResponseDettaglio>;
  referente?: UtentiAnagrafica;
  sottoCommessa?: Commessa;
  stato?: null | number;
}
