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
import { GetCommessePerReferenteResponse } from '../models/get-commesse-per-referente-response';
import { GetCommesseResponse } from '../models/get-commesse-response';
import { GetSottoCommesseAvanzamentoResponse } from '../models/get-sotto-commesse-avanzamento-response';

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
   * Path part for operation getCommessePerReferente
   */
  static readonly GetCommessePerReferentePath = '/stato-avanzamento/azienda/{idAzienda}/commesse-per-referente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommessePerReferente()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommessePerReferente$Response(params: {
    idAzienda: number;
    idReferente?: number;
    idCommessa?: number;
    anno?: number;
    mese?: number;
    avanzamento?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetCommessePerReferenteResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.GetCommessePerReferentePath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('idReferente', params.idReferente, {});
      rb.query('idCommessa', params.idCommessa, {});
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
        return r as StrictHttpResponse<Array<GetCommessePerReferenteResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommessePerReferente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommessePerReferente(params: {
    idAzienda: number;
    idReferente?: number;
    idCommessa?: number;
    anno?: number;
    mese?: number;
    avanzamento?: number;
  },
  context?: HttpContext

): Observable<Array<GetCommessePerReferenteResponse>> {

    return this.getCommessePerReferente$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetCommessePerReferenteResponse>>) => r.body as Array<GetCommessePerReferenteResponse>)
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
    idReferente?: number;
    anno?: number;
    mese?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetSottoCommesseAvanzamentoResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.GetSottoCommesseAvanzamentoPath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('idReferente', params.idReferente, {});
      rb.query('anno', params.anno, {});
      rb.query('mese', params.mese, {});
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
    idReferente?: number;
    anno?: number;
    mese?: number;
  },
  context?: HttpContext

): Observable<Array<GetSottoCommesseAvanzamentoResponse>> {

    return this.getSottoCommesseAvanzamento$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetSottoCommesseAvanzamentoResponse>>) => r.body as Array<GetSottoCommesseAvanzamentoResponse>)
    );
  }

  /**
   * Path part for operation popstCommesseAvanzamento
   */
  static readonly PopstCommesseAvanzamentoPath = '/stato-avanzamento/azienda/{idAzienda}/{IdAvanzamento}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `popstCommesseAvanzamento()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  popstCommesseAvanzamento$Response(params: {
    idAzienda: number;
    IdAvanzamento: number;
    body?: AvanzamentiMensili
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.PopstCommesseAvanzamentoPath, 'post');
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
   * To access the full response (for headers, for example), `popstCommesseAvanzamento$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  popstCommesseAvanzamento(params: {
    idAzienda: number;
    IdAvanzamento: number;
    body?: AvanzamentiMensili
  },
  context?: HttpContext

): Observable<number> {

    return this.popstCommesseAvanzamento$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getCommesse
   */
  static readonly GetCommessePath = '/stato-avanzamento/azienda/{idAzienda}/commesse';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommesse()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommesse$Response(params: {
    idAzienda: number;
    nomeCommessa?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetCommesseResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, StatoAvanzamentoService.GetCommessePath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.query('nomeCommessa', params.nomeCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetCommesseResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommesse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommesse(params: {
    idAzienda: number;
    nomeCommessa?: string;
  },
  context?: HttpContext

): Observable<Array<GetCommesseResponse>> {

    return this.getCommesse$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetCommesseResponse>>) => r.body as Array<GetCommesseResponse>)
    );
  }

}
