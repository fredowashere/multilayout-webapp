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

import { GetGiorniPerUtenteResponse } from '../models/get-giorni-per-utente-response';
import { GetReperibilitaCommesseTotaliResponse } from '../models/get-reperibilita-commesse-totali-response';
import { GetStraordinariTerzePartiTotaliResponse } from '../models/get-straordinari-terze-parti-totali-response';
import { PostGiorniPerUtenteResponse } from '../models/post-giorni-per-utente-response';
import { PostGiorniUtenteRequest } from '../models/post-giorni-utente-request';
import { PostReperibilitaCommesseInput } from '../models/post-reperibilita-commesse-input';
import { PostStraordinariInput } from '../models/post-straordinari-input';

@Injectable({
  providedIn: 'root',
})
export class SegreteriaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getReperibilitaCommesseTotali
   */
  static readonly GetReperibilitaCommesseTotaliPath = '/segreteria/azienda/{idAzienda}/reperibilita/{idSottoCommessa}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReperibilitaCommesseTotali()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReperibilitaCommesseTotali$Response(params: {
    idAzienda: number;
    idSottoCommessa: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetReperibilitaCommesseTotaliResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, SegreteriaService.GetReperibilitaCommesseTotaliPath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.path('idSottoCommessa', params.idSottoCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetReperibilitaCommesseTotaliResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReperibilitaCommesseTotali$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReperibilitaCommesseTotali(params: {
    idAzienda: number;
    idSottoCommessa: number;
  },
  context?: HttpContext

): Observable<Array<GetReperibilitaCommesseTotaliResponse>> {

    return this.getReperibilitaCommesseTotali$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetReperibilitaCommesseTotaliResponse>>) => r.body as Array<GetReperibilitaCommesseTotaliResponse>)
    );
  }

  /**
   * Path part for operation postReperibilitaCommesse
   */
  static readonly PostReperibilitaCommessePath = '/segreteria/azienda/{idAzienda}/reperibilita/{idLegameReperibilita}';

  /**
   * Abilitazione delle reperibilità.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postReperibilitaCommesse()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postReperibilitaCommesse$Response(params: {
    idAzienda: number;
    idLegameReperibilita: number;
    body?: PostReperibilitaCommesseInput
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SegreteriaService.PostReperibilitaCommessePath, 'post');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.path('idLegameReperibilita', params.idLegameReperibilita, {});
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
   * Abilitazione delle reperibilità.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postReperibilitaCommesse$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postReperibilitaCommesse(params: {
    idAzienda: number;
    idLegameReperibilita: number;
    body?: PostReperibilitaCommesseInput
  },
  context?: HttpContext

): Observable<number> {

    return this.postReperibilitaCommesse$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getStraordinariTerzePartiTotali
   */
  static readonly GetStraordinariTerzePartiTotaliPath = '/segreteria/azienda/{idAzienda}/straordinari/{IdSottoCommessa}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStraordinariTerzePartiTotali()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStraordinariTerzePartiTotali$Response(params: {
    idAzienda: number;
    IdSottoCommessa: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetStraordinariTerzePartiTotaliResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, SegreteriaService.GetStraordinariTerzePartiTotaliPath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.path('IdSottoCommessa', params.IdSottoCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetStraordinariTerzePartiTotaliResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStraordinariTerzePartiTotali$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStraordinariTerzePartiTotali(params: {
    idAzienda: number;
    IdSottoCommessa: number;
  },
  context?: HttpContext

): Observable<Array<GetStraordinariTerzePartiTotaliResponse>> {

    return this.getStraordinariTerzePartiTotali$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetStraordinariTerzePartiTotaliResponse>>) => r.body as Array<GetStraordinariTerzePartiTotaliResponse>)
    );
  }

  /**
   * Path part for operation postStraordinariTerzeParti
   */
  static readonly PostStraordinariTerzePartiPath = '/segreteria/azienda/{idAzienda}/straordinari/{idLegameStraordinari}';

  /**
   * Abilitazione straordinari.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postStraordinariTerzeParti()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postStraordinariTerzeParti$Response(params: {
    idAzienda: number;
    idLegameStraordinari: number;
    body?: PostStraordinariInput
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SegreteriaService.PostStraordinariTerzePartiPath, 'post');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.path('idLegameStraordinari', params.idLegameStraordinari, {});
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
   * Abilitazione straordinari.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postStraordinariTerzeParti$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postStraordinariTerzeParti(params: {
    idAzienda: number;
    idLegameStraordinari: number;
    body?: PostStraordinariInput
  },
  context?: HttpContext

): Observable<number> {

    return this.postStraordinariTerzeParti$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getGiorniPerUtente
   */
  static readonly GetGiorniPerUtentePath = '/segreteria/azienda/{idAzienda}/sottocommessa/{idSottoCommessa}/giorni-utente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGiorniPerUtente()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGiorniPerUtente$Response(params: {
    idAzienda: number;
    idSottoCommessa: number;
    idUtente?: number;
    nome?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GetGiorniPerUtenteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SegreteriaService.GetGiorniPerUtentePath, 'get');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.path('idSottoCommessa', params.idSottoCommessa, {});
      rb.query('idUtente', params.idUtente, {});
      rb.query('nome', params.nome, {});
      rb.query('Page', params.Page, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetGiorniPerUtenteResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGiorniPerUtente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGiorniPerUtente(params: {
    idAzienda: number;
    idSottoCommessa: number;
    idUtente?: number;
    nome?: string;
    Page?: number;
    PageSize?: number;
  },
  context?: HttpContext

): Observable<GetGiorniPerUtenteResponse> {

    return this.getGiorniPerUtente$Response(params,context).pipe(
      map((r: StrictHttpResponse<GetGiorniPerUtenteResponse>) => r.body as GetGiorniPerUtenteResponse)
    );
  }

  /**
   * Path part for operation postGiorniPerUtente
   */
  static readonly PostGiorniPerUtentePath = '/segreteria/azienda/{idAzienda}/sottocommessa/{idSottoCommessa}/giorni-utente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postGiorniPerUtente()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postGiorniPerUtente$Response(params: {
    idAzienda: number;
    idSottoCommessa: number;
    body?: PostGiorniUtenteRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostGiorniPerUtenteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SegreteriaService.PostGiorniPerUtentePath, 'post');
    if (params) {
      rb.path('idAzienda', params.idAzienda, {});
      rb.path('idSottoCommessa', params.idSottoCommessa, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostGiorniPerUtenteResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postGiorniPerUtente$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postGiorniPerUtente(params: {
    idAzienda: number;
    idSottoCommessa: number;
    body?: PostGiorniUtenteRequest
  },
  context?: HttpContext

): Observable<PostGiorniPerUtenteResponse> {

    return this.postGiorniPerUtente$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostGiorniPerUtenteResponse>) => r.body as PostGiorniPerUtenteResponse)
    );
  }

}
