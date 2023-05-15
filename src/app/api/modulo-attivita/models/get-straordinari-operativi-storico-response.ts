/* tslint:disable */
/* eslint-disable */
import { TerzePartiStraordinari } from './terze-parti-straordinari';
import { TipoTrasferta } from './tipo-trasferta';
export interface GetStraordinariOperativiStoricoResponse {
  idDatoOperativo?: number;
  idUtentiDatiOperativiStorico?: number;
  massimali?: null | number;
  note?: null | string;
  terzePartiStraordinari?: TerzePartiStraordinari;
  tipoIndennita?: null | string;
  tipoTrasferta?: TipoTrasferta;
  trasfertaOnTop?: boolean;
}
