import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FaseEventoDto, Offerta, UpsertOffertaParam } from '../models/offerta';

@Injectable({
    providedIn: 'root'
})
export class OffertaService {

    constructor(
        private http: HttpClient
    ) { }

    getAllTipiOfferta$() {
        const url = `${environment.attivitaApiRoot}/modulo-attivita-be/template/list`;
        return this.http.get<FaseEventoDto[]>(url);
    }

    getOffertaByIdCommessaPadre$(idCommessaPadre: number) {
        const url = `${environment.attivitaApiRoot}/modulo-attivita-be/offerta/id/${idCommessaPadre}`;
        return this.http.get<Offerta>(url);
    }

    upsertOfferta$(input: UpsertOffertaParam) {
        const url = `${environment.attivitaApiRoot}/modulo-attivita-be/save/offerta`;
        return this.http.post<Offerta>(url, input);
    }

}


