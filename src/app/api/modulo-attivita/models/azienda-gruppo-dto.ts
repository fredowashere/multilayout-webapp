/* tslint:disable */
/* eslint-disable */
import { Dettaglio } from './dettaglio';
import { ValoreTicketDto } from './valore-ticket-dto';
export interface AziendaGruppoDto {
  acronimo?: null | string;
  bloccaConsuntivazione?: null | boolean;
  codiceReteTicket?: null | string;
  codiceSocieta?: null | string;
  dataInvalidazione?: null | string;
  descrizione?: null | string;
  fittizia?: null | boolean;
  id?: number;
  pIva?: null | string;
  ragioneSociale?: Dettaglio;
  settoreMerceologico?: Dettaglio;
  straordinarioFestivo?: null | boolean;
  straordinarioFestivoSabato?: null | boolean;
  tipologiaContratto?: Dettaglio;
  valoreTicket?: ValoreTicketDto;
  visibile?: boolean;
}
