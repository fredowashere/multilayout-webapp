import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Commessa, CommessaSearchDto, GetAllCommesseInput } from '../models/attivita.models';

@Injectable({
  providedIn: 'root'
})
export class CommessaService {

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  getAllCommesse$(input?: GetAllCommesseInput) {
    input = input || {};
    const url = `${environment.attivitaApiRoot}/modulo-attivita-be/commesse/all-padre/id-azienda/${this.authService.user.idAzienda}`;
    return this.http.post<CommessaSearchDto[]>(url, input);
  }

  getCommesseAutocomplete$(input?: GetAllCommesseInput): Observable<Commessa[]> {
    input = input || {};
    const url = `${environment.attivitaApiRoot}/modulo-attivita-be/commesse/all-padre/id-azienda/${this.authService.user.idAzienda}`;
    return this.http.post<CommessaSearchDto[]>(url, input)
      .pipe(
        map(commesse =>
          commesse.map(({ id, codiceCommessa: codice, descrizione }) =>
            ({ id, codice, descrizione })
          )
        )
      );
  }
  
}
