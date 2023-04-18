/* tslint:disable */
/* eslint-disable */
import { EnumStatiChiusura } from './enum-stati-chiusura';
export interface AvanzamentiMensili {
  avanzamento?: null | number;
  dataAggiornamento?: null | string;
  descrizione?: null | string;
  idAzienda?: null | number;
  idProjectManager?: number;
  idSottoCommessa?: number;
  meseValidazione?: null | string;
  ricavoCompetenza?: null | number;
  statoValidazione?: EnumStatiChiusura;
  valido?: boolean;
}
