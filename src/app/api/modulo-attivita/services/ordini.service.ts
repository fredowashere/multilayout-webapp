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

import { GetOrdiniByCommessaResponse } from '../models/get-ordini-by-commessa-response';

@Injectable({
  providedIn: 'root',
})
export class OrdiniService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOrdiniByCommessa
   */
  static readonly GetOrdiniByCommessaPath = '/ordini/by-commessa/id/{idCommessa}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrdiniByCommessa()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrdiniByCommessa$Response(params: {
    idCommessa: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GetOrdiniByCommessaResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdiniService.GetOrdiniByCommessaPath, 'get');
    if (params) {
      rb.path('idCommessa', params.idCommessa, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GetOrdiniByCommessaResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrdiniByCommessa$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrdiniByCommessa(params: {
    idCommessa: number;
  },
  context?: HttpContext

): Observable<Array<GetOrdiniByCommessaResponse>> {

    return this.getOrdiniByCommessa$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GetOrdiniByCommessaResponse>>) => r.body as Array<GetOrdiniByCommessaResponse>)
    );
  }

}
