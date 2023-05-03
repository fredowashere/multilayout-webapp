/* tslint:disable */
/* eslint-disable */
import { Items } from './items';
export interface GetGiorniPerUtenteResponse {
  giornateSottoCommessaAssegnate?: number;
  giornateSottoCommessaConsuntivate?: number;
  giornateSottoCommessaTotale?: null | number;
  items?: null | Array<Items>;
  page?: number;
  pageSize?: number;
  pages?: number;
  totalItems?: number;
}
