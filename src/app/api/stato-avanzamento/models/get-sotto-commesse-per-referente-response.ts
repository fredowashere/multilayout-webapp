/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { UtentiAnagrafica } from './utenti-anagrafica';
export interface GetSottoCommessePerReferenteResponse {
  avanzamentoTotale?: null | number;
  businessManager?: UtentiAnagrafica;
  commessa?: Commessa;
  referente?: UtentiAnagrafica;
  sottoCommessa?: Commessa;
}
