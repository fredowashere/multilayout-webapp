/* tslint:disable */
/* eslint-disable */
import { Commessa } from './commessa';
import { Dettaglio } from './dettaglio';
import { DettaglioAvanzamento } from './dettaglio-avanzamento';
import { SottoCommessa } from './sotto-commessa';
import { UtentiAnagrafica } from './utenti-anagrafica';
export interface GetSottoCommesseAvanzamentoResponse {
  businessManager?: UtentiAnagrafica;
  cliente?: Dettaglio;
  clienteFinale?: Dettaglio;
  commessa?: Commessa;
  dataFine?: null | string;
  dataInizio?: null | string;
  dettaglioAvanzamento?: null | Array<DettaglioAvanzamento>;
  referente?: UtentiAnagrafica;
  sottoCommessa?: SottoCommessa;
  stato?: null | number;
}
