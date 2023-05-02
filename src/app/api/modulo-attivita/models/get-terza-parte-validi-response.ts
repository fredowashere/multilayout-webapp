/* tslint:disable */
/* eslint-disable */
import { AziendaGruppoDto } from './azienda-gruppo-dto';
import { BusinessUnit } from './business-unit';
import { Dettaglio } from './dettaglio';
import { RagioneSociale } from './ragione-sociale';
import { TipoTerzaParte } from './tipo-terza-parte';
export interface GetTerzaParteValidiResponse {
  aziendaGruppoAssoluta?: AziendaGruppoDto;
  aziendaGruppoCorrispondente?: AziendaGruppoDto;
  businessUnit?: BusinessUnit;
  codiceFiscale?: null | string;
  dataInvalidazione?: null | string;
  descrizione?: null | string;
  descrizioneSintetica?: null | string;
  id?: number;
  partitaIva?: null | string;
  ragioneSociale?: RagioneSociale;
  settoreMerceologico?: Dettaglio;
  tipoTerzaParte?: TipoTerzaParte;
}
