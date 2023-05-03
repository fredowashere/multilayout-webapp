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

import { GetDiarieResponse } from '../models/get-diarie-response';
import { GetTipiTrasfertaResponse } from '../models/get-tipi-trasferta-response';
import { PatchTipiTrasferta } from '../models/patch-tipi-trasferta';
import { PostDiaria } from '../models/post-diaria';
import { PostDiarieResponse } from '../models/post-diarie-response';
import { PostTipiTrasferta } from '../models/post-tipi-trasferta';
import { PostTipiTrasfertaResponse } from '../models/post-tipi-trasferta-response';

@Injectable({
  providedIn: 'root',
})
export class TipiTrasfertaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTipiTrasferta
   */
  static readonly GetTipiTrasfertaPath = '/attivita/tipi_trasferta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTipiTrasferta()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTipiTrasferta$Response(params?: {
    id?: number;
    codice?: string;
    descrizione?: string;
    data?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetTipiTrasfertaResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, TipiTrasfertaService.GetTipiTrasfertaPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('codice', params.codice, {});
      rb.query('descrizione', params.descrizione, {});
      rb.query('data', params.data, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetTipiTrasfertaResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTipiTrasferta$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTipiTrasferta(params?: {
    id?: number;
    codice?: string;
    descrizione?: string;
    data?: string;
  },
  context?: HttpContext

): Observable<Array<GetTipiTrasfertaResponse>> {

    return this.getTipiTrasferta$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetTipiTrasfertaResponse>>) => r.body as Array<GetTipiTrasfertaResponse>)
    );
  }

  /**
   * Path part for operation postTipiTrasferta
   */
  static readonly PostTipiTrasfertaPath = '/attivita/tipi_trasferta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTipiTrasferta()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTipiTrasferta$Response(params?: {
    body?: PostTipiTrasferta
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostTipiTrasfertaResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipiTrasfertaService.PostTipiTrasfertaPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostTipiTrasfertaResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postTipiTrasferta$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTipiTrasferta(params?: {
    body?: PostTipiTrasferta
  },
  context?: HttpContext

): Observable<PostTipiTrasfertaResponse> {

    return this.postTipiTrasferta$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostTipiTrasfertaResponse>) => r.body as PostTipiTrasfertaResponse)
    );
  }

  /**
   * Path part for operation deleteTipiTrasferta
   */
  static readonly DeleteTipiTrasfertaPath = '/attivita/tipi_trasferta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTipiTrasferta()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTipiTrasferta$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TipiTrasfertaService.DeleteTipiTrasfertaPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `deleteTipiTrasferta$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTipiTrasferta(params: {
    id: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.deleteTipiTrasferta$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation patchTipiTrasferta
   */
  static readonly PatchTipiTrasfertaPath = '/attivita/tipi_trasferta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchTipiTrasferta()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patchTipiTrasferta$Response(params: {
    id: number;
    body?: PatchTipiTrasferta
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TipiTrasfertaService.PatchTipiTrasfertaPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `patchTipiTrasferta$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patchTipiTrasferta(params: {
    id: number;
    body?: PatchTipiTrasferta
  },
  context?: HttpContext

): Observable<number> {

    return this.patchTipiTrasferta$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getDiarie
   */
  static readonly GetDiariePath = '/attivita/diarie';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDiarie()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDiarie$Response(params?: {
    IdDiaria?: number;
    IdAzienda?: number;
    IdTipoTrasferta?: number;
    Valido?: boolean;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetDiarieResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, TipiTrasfertaService.GetDiariePath, 'get');
    if (params) {
      rb.query('IdDiaria', params.IdDiaria, {});
      rb.query('IdAzienda', params.IdAzienda, {});
      rb.query('IdTipoTrasferta', params.IdTipoTrasferta, {});
      rb.query('Valido', params.Valido, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetDiarieResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDiarie$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDiarie(params?: {
    IdDiaria?: number;
    IdAzienda?: number;
    IdTipoTrasferta?: number;
    Valido?: boolean;
  },
  context?: HttpContext

): Observable<Array<GetDiarieResponse>> {

    return this.getDiarie$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetDiarieResponse>>) => r.body as Array<GetDiarieResponse>)
    );
  }

  /**
   * Path part for operation postDiarie
   */
  static readonly PostDiariePath = '/attivita/diarie';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDiarie()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDiarie$Response(params?: {
    body?: PostDiaria
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostDiarieResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipiTrasfertaService.PostDiariePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostDiarieResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postDiarie$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDiarie(params?: {
    body?: PostDiaria
  },
  context?: HttpContext

): Observable<PostDiarieResponse> {

    return this.postDiarie$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostDiarieResponse>) => r.body as PostDiarieResponse)
    );
  }

  /**
   * Path part for operation deleteDiarie
   */
  static readonly DeleteDiariePath = '/attivita/diarie/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDiarie()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDiarie$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TipiTrasfertaService.DeleteDiariePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `deleteDiarie$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDiarie(params: {
    id: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.deleteDiarie$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
