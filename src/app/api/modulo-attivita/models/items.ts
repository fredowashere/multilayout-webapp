/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { Dettaglio } from './dettaglio';
import { UtentiAnagrafica } from './utenti-anagrafica';
export interface Items {
  commessa?: Commessa;
  massimoGiornate?: null | number;
  minimoGiornate?: number;
  numeroGiornate?: number;
  sottoCommessa?: Commessa;
  terzaParte?: Dettaglio;
  utente?: UtentiAnagrafica;
}
