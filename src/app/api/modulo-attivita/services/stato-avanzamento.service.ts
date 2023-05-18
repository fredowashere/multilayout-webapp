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

import { AvanzamentiMensili } from '../models/avanzamenti-mensili';
import { Dettaglio } from '../models/dettaglio';
import { EnumAvanzamento } from '../models/enum-avanzamento';
import { GetSottoCommesseAvanzamentoResponse } from '../models/get-sotto-commesse-avanzamento-response';
import { GetSottoCommessePerReferenteResponse } from '../models/get-sotto-commesse-per-referente-response';
import { GetSottoCommesseResponse } from '../models/get-sotto-commesse-response';

@Injectable({
  providedIn: 'root',
})
export class StatoAvanzamentoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSottoCommessePerReferente
   */
  static readonly GetSottoCommessePerReferentePath = '/stato-avanzamento/azienda/{idAzienda}/commesse-per-referente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSottoCommessePerReferente()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSottoCommessePerReferente$Response(params: {
    idAzienda: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
    anno?: number;
    mese?: number;
    avanzamento?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetSottoCommessePerReferenteResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.GetSottoCommessePerReferentePath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('idReferente', params.idReferente, {});
      rb.query('idBusinessManager', params.idBusinessManager, {});
      rb.query('idCliente', params.idCliente, {});
      rb.query('idCommessa', params.idCommessa, {});
      rb.query('idSottoCommessa', params.idSottoCommessa, {});
      rb.query('anno', params.anno, {});
      rb.query('mese', params.mese, {});
      rb.query('avanzamento', params.avanzamento, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetSottoCommessePerReferenteResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSottoCommessePerReferente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSottoCommessePerReferente(params: {
    idAzienda: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
    anno?: number;
    mese?: number;
    avanzamento?: number;
  },
  context?: HttpContext

): Observable<Array<GetSottoCommessePerReferenteResponse>> {

    return this.getSottoCommessePerReferente$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetSottoCommessePerReferenteResponse>>) => r.body as Array<GetSottoCommessePerReferenteResponse>)
    );
  }

  /**
   * Path part for operation getSottoCommesseAvanzamento
   */
  static readonly GetSottoCommesseAvanzamentoPath = '/stato-avanzamento/azienda/{idAzienda}/get-sotto-commesse-avanzamento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSottoCommesseAvanzamento()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSottoCommesseAvanzamento$Response(params: {
    idAzienda: number;
    dataInizio?: string;
    dataFine?: string;
    stato?: number;
    avanzamento?: EnumAvanzamento;
    mese?: string;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetSottoCommesseAvanzamentoResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.GetSottoCommesseAvanzamentoPath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('dataInizio', params.dataInizio, {});
      rb.query('dataFine', params.dataFine, {});
      rb.query('stato', params.stato, {});
      rb.query('avanzamento', params.avanzamento, {});
      rb.query('mese', params.mese, {});
      rb.query('idReferente', params.idReferente, {});
      rb.query('idBusinessManager', params.idBusinessManager, {});
      rb.query('idCliente', params.idCliente, {});
      rb.query('idCommessa', params.idCommessa, {});
      rb.query('idSottoCommessa', params.idSottoCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetSottoCommesseAvanzamentoResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSottoCommesseAvanzamento$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSottoCommesseAvanzamento(params: {
    idAzienda: number;
    dataInizio?: string;
    dataFine?: string;
    stato?: number;
    avanzamento?: EnumAvanzamento;
    mese?: string;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
  },
  context?: HttpContext

): Observable<Array<GetSottoCommesseAvanzamentoResponse>> {

    return this.getSottoCommesseAvanzamento$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetSottoCommesseAvanzamentoResponse>>) => r.body as Array<GetSottoCommesseAvanzamentoResponse>)
    );
  }

  /**
   * Path part for operation postCommesseAvanzamento
   */
  static readonly PostCommesseAvanzamentoPath = '/stato-avanzamento/azienda/{idAzienda}/{IdAvanzamento}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCommesseAvanzamento()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postCommesseAvanzamento$Response(params: {
    idAzienda: number;
    IdAvanzamento: number;
    body?: AvanzamentiMensili
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.PostCommesseAvanzamentoPath, 'post');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.path('IdAvanzamento', params.IdAvanzamento, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCommesseAvanzamento$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postCommesseAvanzamento(params: {
    idAzienda: number;
    IdAvanzamento: number;
    body?: AvanzamentiMensili
  },
  context?: HttpContext

): Observable<number> {

    return this.postCommesseAvanzamento$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getSottoCommesse
   */
  static readonly GetSottoCommessePath = '/stato-avanzamento/azienda/{idAzienda}/sotto-commesse';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSottoCommesse()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSottoCommesse$Response(params: {
    idAzienda: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetSottoCommesseResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.GetSottoCommessePath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('idReferente', params.idReferente, {});
      rb.query('idBusinessManager', params.idBusinessManager, {});
      rb.query('idCliente', params.idCliente, {});
      rb.query('idCommessa', params.idCommessa, {});
      rb.query('idSottoCommessa', params.idSottoCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetSottoCommesseResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSottoCommesse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSottoCommesse(params: {
    idAzienda: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
  },
  context?: HttpContext

): Observable<Array<GetSottoCommesseResponse>> {

    return this.getSottoCommesse$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetSottoCommesseResponse>>) => r.body as Array<GetSottoCommesseResponse>)
    );
  }

  /**
   * Path part for operation getClienti
   */
  static readonly GetClientiPath = '/stato-avanzamento/azienda/{idAzienda}/clienti';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClienti()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClienti$Response(params: {
    idAzienda: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
    totali?: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Dettaglio>>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.GetClientiPath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('idReferente', params.idReferente, {});
      rb.query('idBusinessManager', params.idBusinessManager, {});
      rb.query('idCliente', params.idCliente, {});
      rb.query('idCommessa', params.idCommessa, {});
      rb.query('idSottoCommessa', params.idSottoCommessa, {});
      rb.query('totali', params.totali, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Dettaglio>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClienti$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClienti(params: {
    idAzienda: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
    totali?: boolean;
  },
  context?: HttpContext

): Observable<Array<Dettaglio>> {

    return this.getClienti$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Dettaglio>>) => r.body as Array<Dettaglio>)
    );
  }

}
