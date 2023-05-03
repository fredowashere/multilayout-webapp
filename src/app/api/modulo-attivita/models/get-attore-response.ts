/* tslint:disable */
/* eslint-disable */
import { Profili } from './profili';
import { UtentiAnagrafica } from './utenti-anagrafica';
export interface GetAttoreResponse {
  codiceLogin?: null | string;
  email?: null | string;
  idAzienda?: number;
  idSessione?: null | string;
  isAmministratore?: boolean;
  isBusinessManager?: boolean;
  isController?: boolean;
  isHRManager?: boolean;
  isProjectManager?: boolean;
  isResponsabileCommerciale?: boolean;
  isSegreteria?: boolean;
  isUtenteBase?: boolean;
  isUtenteBaseOnly?: boolean;
  master?: boolean;
  profili?: null | Array<Profili>;
  utente?: UtentiAnagrafica;
}
