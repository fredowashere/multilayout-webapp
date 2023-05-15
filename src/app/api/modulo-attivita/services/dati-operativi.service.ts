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

import { GetDiariaUtenteResponse } from '../models/get-diaria-utente-response';
import { GetReperibilitaOperativiStoricoResponse } from '../models/get-reperibilita-operativi-storico-response';
import { GetStraordinariOperativiStoricoResponse } from '../models/get-straordinari-operativi-storico-response';
import { PostDiarieUtentiBody } from '../models/post-diarie-utenti-body';
import { PostDiarieUtentiResponse } from '../models/post-diarie-utenti-response';
import { PostReperibilitaOperativiStoricoBody } from '../models/post-reperibilita-operativi-storico-body';
import { PostReperibilitaOperativiStoricoResponse } from '../models/post-reperibilita-operativi-storico-response';
import { PostStraordinariOperativiStoricoBody } from '../models/post-straordinari-operativi-storico-body';
import { PostStraordinariOperativiStoricoResponse } from '../models/post-straordinari-operativi-storico-response';

@Injectable({
  providedIn: 'root',
})
export class DatiOperativiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getReperibilitaOperativiStorico
   */
  static readonly GetReperibilitaOperativiStoricoPath = '/dati-operativi/utente/{idUtente}/dato-operativo-storico/reperibilita/{idSottoCommessa}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReperibilitaOperativiStorico()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReperibilitaOperativiStorico$Response(params: {
    idUtente: number;
    idSottoCommessa: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetReperibilitaOperativiStoricoResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, DatiOperativiService.GetReperibilitaOperativiStoricoPath, 'get');
    if (params) {
      rb.path('idUtente', params.idUtente, {});
      rb.path('idSottoCommessa', params.idSottoCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetReperibilitaOperativiStoricoResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReperibilitaOperativiStorico$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReperibilitaOperativiStorico(params: {
    idUtente: number;
    idSottoCommessa: number;
  },
  context?: HttpContext

): Observable<Array<GetReperibilitaOperativiStoricoResponse>> {

    return this.getReperibilitaOperativiStorico$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetReperibilitaOperativiStoricoResponse>>) => r.body as Array<GetReperibilitaOperativiStoricoResponse>)
    );
  }

  /**
   * Path part for operation postReperibilitaOperativiStorico
   */
  static readonly PostReperibilitaOperativiStoricoPath = '/dati-operativi/utente/{idUtente}/dato-operativo-storico/reperibilita/{idSottoCommessa}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postReperibilitaOperativiStorico()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postReperibilitaOperativiStorico$Response(params: {
    idUtente: number;
    idSottoCommessa: number;
    body?: PostReperibilitaOperativiStoricoBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostReperibilitaOperativiStoricoResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DatiOperativiService.PostReperibilitaOperativiStoricoPath, 'post');
    if (params) {
      rb.path('idUtente', params.idUtente, {});
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
        return r as StrictHttpResponse<PostReperibilitaOperativiStoricoResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postReperibilitaOperativiStorico$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postReperibilitaOperativiStorico(params: {
    idUtente: number;
    idSottoCommessa: number;
    body?: PostReperibilitaOperativiStoricoBody
  },
  context?: HttpContext

): Observable<PostReperibilitaOperativiStoricoResponse> {

    return this.postReperibilitaOperativiStorico$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostReperibilitaOperativiStoricoResponse>) => r.body as PostReperibilitaOperativiStoricoResponse)
    );
  }

  /**
   * Path part for operation getStraordinariOperativiStorico
   */
  static readonly GetStraordinariOperativiStoricoPath = '/dati-operativi/utente/{idUtente}/dato-operativo-storico/straordinari/{idSottoCommessa}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStraordinariOperativiStorico()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStraordinariOperativiStorico$Response(params: {
    idUtente: number;
    idSottoCommessa: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetStraordinariOperativiStoricoResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, DatiOperativiService.GetStraordinariOperativiStoricoPath, 'get');
    if (params) {
      rb.path('idUtente', params.idUtente, {});
      rb.path('idSottoCommessa', params.idSottoCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetStraordinariOperativiStoricoResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStraordinariOperativiStorico$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStraordinariOperativiStorico(params: {
    idUtente: number;
    idSottoCommessa: number;
  },
  context?: HttpContext

): Observable<Array<GetStraordinariOperativiStoricoResponse>> {

    return this.getStraordinariOperativiStorico$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetStraordinariOperativiStoricoResponse>>) => r.body as Array<GetStraordinariOperativiStoricoResponse>)
    );
  }

  /**
   * Path part for operation postStraordinariOperativiStorico
   */
  static readonly PostStraordinariOperativiStoricoPath = '/dati-operativi/utente/{idUtente}/dato-operativo-storico/straordinari/{idSottoCommessa}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postStraordinariOperativiStorico()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postStraordinariOperativiStorico$Response(params: {
    idUtente: number;
    idSottoCommessa: number;
    body?: PostStraordinariOperativiStoricoBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostStraordinariOperativiStoricoResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DatiOperativiService.PostStraordinariOperativiStoricoPath, 'post');
    if (params) {
      rb.path('idUtente', params.idUtente, {});
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
        return r as StrictHttpResponse<PostStraordinariOperativiStoricoResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postStraordinariOperativiStorico$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postStraordinariOperativiStorico(params: {
    idUtente: number;
    idSottoCommessa: number;
    body?: PostStraordinariOperativiStoricoBody
  },
  context?: HttpContext

): Observable<PostStraordinariOperativiStoricoResponse> {

    return this.postStraordinariOperativiStorico$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostStraordinariOperativiStoricoResponse>) => r.body as PostStraordinariOperativiStoricoResponse)
    );
  }

  /**
   * Path part for operation getDiariaUtente
   */
  static readonly GetDiariaUtentePath = '/dati-operativi/utente/{idUtente}/diaria-persona/attivita/{idAttivita}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDiariaUtente()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDiariaUtente$Response(params: {
    idUtente: number;
    idAttivita: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetDiariaUtenteResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, DatiOperativiService.GetDiariaUtentePath, 'get');
    if (params) {
      rb.path('idUtente', params.idUtente, {});
      rb.path('idAttivita', params.idAttivita, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetDiariaUtenteResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDiariaUtente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDiariaUtente(params: {
    idUtente: number;
    idAttivita: number;
  },
  context?: HttpContext

): Observable<Array<GetDiariaUtenteResponse>> {

    return this.getDiariaUtente$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetDiariaUtenteResponse>>) => r.body as Array<GetDiariaUtenteResponse>)
    );
  }

  /**
   * Path part for operation postDiarieUtenti
   */
  static readonly PostDiarieUtentiPath = '/dati-operativi/utente/{idUtente}/diaria-persona/attivita/{idAttivita}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDiarieUtenti()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDiarieUtenti$Response(params: {
    idUtente: number;
    idAttivita: number;
    body?: PostDiarieUtentiBody
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PostDiarieUtentiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DatiOperativiService.PostDiarieUtentiPath, 'post');
    if (params) {
      rb.path('idUtente', params.idUtente, {});
      rb.path('idAttivita', params.idAttivita, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostDiarieUtentiResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postDiarieUtenti$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDiarieUtenti(params: {
    idUtente: number;
    idAttivita: number;
    body?: PostDiarieUtentiBody
  },
  context?: HttpContext

): Observable<PostDiarieUtentiResponse> {

    return this.postDiarieUtenti$Response(params,context).pipe(
      map((r: StrictHttpResponse<PostDiarieUtentiResponse>) => r.body as PostDiarieUtentiResponse)
    );
  }

}
