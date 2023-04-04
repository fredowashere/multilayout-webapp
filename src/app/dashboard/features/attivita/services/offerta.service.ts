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
        const url = `${environment.scaiRoot}/modulo-attivita-be/template/list`;
        return this.http.get<FaseEventoDto[]>(url);
    }

    getOffertaByIdCommessa$(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/offerta/id/${idCommessa}`;
        return this.http.get<Offerta>(url);
    }

    upsertOfferta$(input: UpsertOffertaParam) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/save/offerta`;
        return this.http.post<Offerta>(url, input);
    }

}


