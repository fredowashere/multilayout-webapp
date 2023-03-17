/* tslint:disable */
/* eslint-disable */
import { Chiusura } from './chiusura';
import { Commessa } from './commessa';
export interface GetSottoCommesseAvanzamentoResponseDettaglio {
  avanzamentoTotale?: number;
  dataAggiornamento?: null | string;
  dataInserimento?: string;
  descrizione?: null | string;
  idAzienda?: null | number;
  idCommessa?: number;
  idProjectManager?: number;
  idUtenteAggiornamento?: null | number;
  idUtenteInserimento?: number;
  idcommessaAvanzamentiMensili?: number;
  meseValidazione?: string;
  ricavoCompetenza?: null | number;
  sottoCommessa?: Commessa;
  statoValidazione?: Chiusura;
  valido?: number;
}
