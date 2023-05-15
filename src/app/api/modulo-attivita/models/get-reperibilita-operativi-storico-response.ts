/* tslint:disable */
/* eslint-disable */
import { ReperibilitaTerzeParti } from './reperibilita-terze-parti';
import { TipoTrasferta } from './tipo-trasferta';
export interface GetReperibilitaOperativiStoricoResponse {
  idDatoOperativo?: number;
  idUtentiDatiOperativiStorico?: number;
  massimali?: null | number;
  note?: null | string;
  reperibilitaTerzeParti?: ReperibilitaTerzeParti;
  tipoIndennita?: null | string;
  tipoTrasferta?: TipoTrasferta;
  trasfertaOnTop?: boolean;
}
