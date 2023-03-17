/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GetAttoreResponse } from '../models/get-attore-response';
import { UtentiAnagrafica } from '../models/utenti-anagrafica';

@Injectable({
  providedIn: 'root',
})
export class UtentiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUtenti
   */
  static readonly GetUtentiPath = '/utenti/azienda/{idAzienda}/utenti';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUtenti()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtenti$Response(params: {
    idAzienda: number;
    IdUtente?: number;
    Cognome?: string;
    Nome?: string;
    Profilo?: string;
    IsPm?: boolean;
    IsBm?: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtentiAnagrafica>>> {

    const rb = new RequestBuilder(this.rootUrl, UtentiService.GetUtentiPath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('IdUtente', params.IdUtente, {});
      rb.query('Cognome', params.Cognome, {});
      rb.query('Nome', params.Nome, {});
      rb.query('Profilo', params.Profilo, {});
      rb.query('IsPm', params.IsPm, {});
      rb.query('IsBm', params.IsBm, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtentiAnagrafica>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUtenti$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtenti(params: {
    idAzienda: number;
    IdUtente?: number;
    Cognome?: string;
    Nome?: string;
    Profilo?: string;
    IsPm?: boolean;
    IsBm?: boolean;
  },
  context?: HttpContext

): Observable<Array<UtentiAnagrafica>> {

    return this.getUtenti$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtentiAnagrafica>>) => r.body as Array<UtentiAnagrafica>)
    );
  }

  /**
   * Path part for operation getAttore
   */
  static readonly GetAttorePath = '/utenti/azienda/{idAzienda}/attore';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAttore()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttore$Response(params: {
    idAzienda: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GetAttoreResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtentiService.GetAttorePath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetAttoreResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAttore$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttore(params: {
    idAzienda: number;
  },
  context?: HttpContext

): Observable<GetAttoreResponse> {

    return this.getAttore$Response(params,context).pipe(
      map((r: StrictHttpResponse<GetAttoreResponse>) => r.body as GetAttoreResponse)
    );
  }

  /**
   * Path part for operation getPm
   */
  static readonly GetPmPath = '/utenti/azienda/{idAzienda}/pm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPm()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPm$Response(params: {
    idAzienda: number;
    IdUtente?: number;
    Cognome?: string;
    Nome?: string;
    Profilo?: string;
    IsPm?: boolean;
    IsBm?: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtentiAnagrafica>>> {

    const rb = new RequestBuilder(this.rootUrl, UtentiService.GetPmPath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('IdUtente', params.IdUtente, {});
      rb.query('Cognome', params.Cognome, {});
      rb.query('Nome', params.Nome, {});
      rb.query('Profilo', params.Profilo, {});
      rb.query('IsPm', params.IsPm, {});
      rb.query('IsBm', params.IsBm, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtentiAnagrafica>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPm(params: {
    idAzienda: number;
    IdUtente?: number;
    Cognome?: string;
    Nome?: string;
    Profilo?: string;
    IsPm?: boolean;
    IsBm?: boolean;
  },
  context?: HttpContext

): Observable<Array<UtentiAnagrafica>> {

    return this.getPm$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtentiAnagrafica>>) => r.body as Array<UtentiAnagrafica>)
    );
  }

  /**
   * Path part for operation getUtentiPerReferente
   */
  static readonly GetUtentiPerReferentePath = '/utenti/azienda/{idAzienda}/utenti-per-referente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUtentiPerReferente()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtentiPerReferente$Response(params: {
    idAzienda: number;
    idReferente?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtentiAnagrafica>>> {

    const rb = new RequestBuilder(this.rootUrl, UtentiService.GetUtentiPerReferentePath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('idReferente', params.idReferente, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtentiAnagrafica>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUtentiPerReferente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtentiPerReferente(params: {
    idAzienda: number;
    idReferente?: number;
  },
  context?: HttpContext

): Observable<Array<UtentiAnagrafica>> {

    return this.getUtentiPerReferente$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtentiAnagrafica>>) => r.body as Array<UtentiAnagrafica>)
    );
  }

}
