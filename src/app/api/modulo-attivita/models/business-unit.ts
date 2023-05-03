/* tslint:disable */
/* eslint-disable */
import { AziendaGruppoDto } from './azienda-gruppo-dto';
export interface BusinessUnit {
  aziendaGruppo?: AziendaGruppoDto;
  dataInvalidazione?: null | string;
  descrizione?: null | string;
  id?: number;
  idUtente?: null | number;
}
