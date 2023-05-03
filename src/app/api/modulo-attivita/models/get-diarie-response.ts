/* tslint:disable */
/* eslint-disable */
import { Azienda } from './azienda';
import { TipoTrasferta } from './tipo-trasferta';
export interface GetDiarieResponse {
  azienda?: Azienda;
  diaria?: null | number;
  id?: number;
  tipoTrasferta?: TipoTrasferta;
  valido?: boolean;
}
