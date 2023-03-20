/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { Dettaglio } from './dettaglio';
import { GetSottoCommesseAvanzamentoResponseDettaglio } from './get-sotto-commesse-avanzamento-response-dettaglio';
import { GetSottoCommesseAvanzamentoResponseReferente } from './get-sotto-commesse-avanzamento-response-referente';
export interface GetSottoCommesseAvanzamentoResponse {
  cliente?: Dettaglio;
  clienteFinale?: Dettaglio;
  commessa?: Commessa;
  dataFine?: null | string;
  dataInizio?: null | string;
  dettaglio?: null | Array<GetSottoCommesseAvanzamentoResponseDettaglio>;
  referente?: GetSottoCommesseAvanzamentoResponseReferente;
  sottoCommessa?: Commessa;
  stato?: null | number;
}
