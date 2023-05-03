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

import { GetTerzaParteValidiResponse } from '../models/get-terza-parte-validi-response';
import { GetTipoFatturazioneResponse } from '../models/get-tipo-fatturazione-response';
import { TerzaParteValidiByAziendaDto } from '../models/terza-parte-validi-by-azienda-dto';

@Injectable({
  providedIn: 'root',
})
export class CommonsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTipoFatturazione
   */
  static readonly GetTipoFatturazionePath = '/commonservices/tipofatturazione/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTipoFatturazione()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTipoFatturazione$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetTipoFatturazioneResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CommonsService.GetTipoFatturazionePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetTipoFatturazioneResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTipoFatturazione$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTipoFatturazione(params?: {
  },
  context?: HttpContext

): Observable<Array<GetTipoFatturazioneResponse>> {

    return this.getTipoFatturazione$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetTipoFatturazioneResponse>>) => r.body as Array<GetTipoFatturazioneResponse>)
    );
  }

  /**
   * Path part for operation getTerzaParteValidi
   */
  static readonly GetTerzaParteValidiPath = '/commonservices/terzaparte/validi/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTerzaParteValidi()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteValidi$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetTerzaParteValidiResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, CommonsService.GetTerzaParteValidiPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetTerzaParteValidiResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTerzaParteValidi$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteValidi(params?: {
  },
  context?: HttpContext

): Observable<Array<GetTerzaParteValidiResponse>> {

    return this.getTerzaParteValidi$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetTerzaParteValidiResponse>>) => r.body as Array<GetTerzaParteValidiResponse>)
    );
  }

  /**
   * Path part for operation getTerzaParteValidiAziendaGruppo
   */
  static readonly GetTerzaParteValidiAziendaGruppoPath = '/commonservices/terzaparte/validi/aziendagruppo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTerzaParteValidiAziendaGruppo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteValidiAziendaGruppo$Response(params?: {
    idAzienda?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TerzaParteValidiByAziendaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommonsService.GetTerzaParteValidiAziendaGruppoPath, 'get');
    if (params) {
      rb.query('idAzienda', params.idAzienda, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TerzaParteValidiByAziendaDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTerzaParteValidiAziendaGruppo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteValidiAziendaGruppo(params?: {
    idAzienda?: number;
  },
  context?: HttpContext

): Observable<Array<TerzaParteValidiByAziendaDto>> {

    return this.getTerzaParteValidiAziendaGruppo$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TerzaParteValidiByAziendaDto>>) => r.body as Array<TerzaParteValidiByAziendaDto>)
    );
  }

  /**
   * Path part for operation getTerzaParteAutocomplete
   */
  static readonly GetTerzaParteAutocompletePath = '/commonservices/terzaparte/autocomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTerzaParteAutocomplete()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteAutocomplete$Response(params?: {
    idAzienda?: number;
    snippet?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TerzaParteValidiByAziendaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CommonsService.GetTerzaParteAutocompletePath, 'get');
    if (params) {
      rb.query('idAzienda', params.idAzienda, {});
      rb.query('snippet', params.snippet, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TerzaParteValidiByAziendaDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTerzaParteAutocomplete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteAutocomplete(params?: {
    idAzienda?: number;
    snippet?: string;
  },
  context?: HttpContext

): Observable<Array<TerzaParteValidiByAziendaDto>> {

    return this.getTerzaParteAutocomplete$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TerzaParteValidiByAziendaDto>>) => r.body as Array<TerzaParteValidiByAziendaDto>)
    );
  }

  /**
   * Path part for operation getTerzaParteCheckAziendaPropria
   */
  static readonly GetTerzaParteCheckAziendaPropriaPath = '/commonservices/terzaparte/checkAziendaPropria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTerzaParteCheckAziendaPropria()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteCheckAziendaPropria$Response(params?: {
    idCliente?: number;
    idAzienda?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, CommonsService.GetTerzaParteCheckAziendaPropriaPath, 'get');
    if (params) {
      rb.query('idCliente', params.idCliente, {});
      rb.query('idAzienda', params.idAzienda, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTerzaParteCheckAziendaPropria$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTerzaParteCheckAziendaPropria(params?: {
    idCliente?: number;
    idAzienda?: number;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.getTerzaParteCheckAziendaPropria$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
