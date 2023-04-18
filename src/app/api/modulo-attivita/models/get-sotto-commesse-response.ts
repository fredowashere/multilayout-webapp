/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { UtentiAnagrafica } from './utenti-anagrafica';
export interface GetSottoCommesseResponse {
  businessManager?: UtentiAnagrafica;
  commessa?: Commessa;
  referente?: UtentiAnagrafica;
  sottoCommessa?: Commessa;
}
