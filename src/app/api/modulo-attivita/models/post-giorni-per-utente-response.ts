/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { Dettaglio } from './dettaglio';
export interface PostGiorniPerUtenteResponse {
  commessa?: Commessa;
  idUtente?: number;
  numeroGiornate?: null | number;
  sottoCommessa?: Commessa;
  terzaParte?: Dettaglio;
}
