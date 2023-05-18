/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { StatoValidazione } from './stato-validazione';
export interface DettaglioAvanzamento {
  avanzamentoTotale?: number;
  costoCompetenza?: number;
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
  statoValidazione?: StatoValidazione;
  valido?: number;
}
