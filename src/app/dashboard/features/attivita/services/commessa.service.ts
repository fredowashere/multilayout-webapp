import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import {
  Commessa,
  CommessaDto,
  CommessaSearchDto,
  CreateCommessaParam,
  GetAllCommesseParam,
  OpportunitaDto,
  UpdateCommessaParam
} from '../models/commessa';

@Injectable({
  providedIn: 'root'
})
export class CommessaService {

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  checkAziendaPropria$(idCliente: number) { 
    const url = `${environment.scaiRoot}/commonservices/terzaparte/checkAziendaPropria?idAzienda=${this.authService.user.idAzienda}&idCliente=${idCliente}`;
    return this.http.get<boolean>(url);
  }

  getAllCommesse$(input?: GetAllCommesseParam) {
    input = input || {};
    const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/all-padre/id-azienda/${this.authService.user.idAzienda}`;
    return this.http.post<CommessaSearchDto[]>(url, input)
      .pipe(
        map(commesse =>
          commesse.sort((a, b) =>
            (b.data || "1970-01-01").localeCompare(a.data || "1970-01-01")
          )
        )
      );
  }

  getCommesseAutocomplete$(input?: GetAllCommesseParam): Observable<Commessa[]> {
    return this.getAllCommesse$(input)
      .pipe(
        map(commesse =>
          commesse.map(({ id, codiceCommessa: codice, descrizione }) =>
            ({ id, codice, descrizione })
          )
        )
      );
  }

  getCommessaById(idCommessa: number) {
    const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/id/${idCommessa}/id-azienda/${this.authService.user.idAzienda}`;
    return this.http.get<CommessaDto>(url);
  }

  createCommessa$(input: CreateCommessaParam) {
    input.idAzienda = this.authService.user.idAzienda;
    input.idUtenteInserimento = this.authService.user.idUtente;
    const url = `${environment.scaiRoot}/modulo-attivita-be/save/opportunita`;
    return this.http.post<OpportunitaDto>(url, input);
  }

  updateCommessa$(commessa: UpdateCommessaParam) {
    const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/update/id/${commessa.id}`;
    return this.http.put<number>(url, commessa);
  }

  deleteCommessaInterna$(idCommessa: number) {
    const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/deleteCommessaPadre/id/${idCommessa}`;
    return this.http.delete(url);
  }

  cancelOpportunita$(idCommessa: number) {
    const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/invalidaCommessaPadre/id/${idCommessa}`;
    return this.http.post<any>(url, {});
  }

  restoreOpportunita(idCommessa: number) {
    const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/ripristinaCommessa/id/${idCommessa}`;
    return this.http.post<any>(url, {});
  }

}
