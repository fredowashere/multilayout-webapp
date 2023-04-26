/* tslint:disable */
/* eslint-disable */
import { GetAttoreResponseUtente } from './get-attore-response-utente';
import { ProfiloDto } from './profilo-dto';
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
  profili?: null | Array<ProfiloDto>;
  utente?: GetAttoreResponseUtente;
}
