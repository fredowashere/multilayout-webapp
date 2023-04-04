import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommessaDto } from '../models/commessa';

@Injectable({
    providedIn: 'root'
})
export class SottocommessaService {

    constructor(
        private http: HttpClient
    ) { }

    checkExistingSottocommesseByIdCommessa$(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/check-exist-sottocommesse/${idCommessa}`;
        return this.http.get<boolean>(url);
    }

    getSottocommesseByIdCommessa$(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/by-padre/id/${idCommessa}`;
        return this.http.get<CommessaDto[]>(url)
    }

    getSottocommessaById$(idSottocommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/id/${idSottocommessa}`;
        return this.http.get<CommessaDto>(url);
    }

    getIniziativa$(
        clienteDiretto: number,
        clienteFinale: number,
        idBm: number
    ) {
        const url = `${environment.scaiRoot}/common-core-service/findIniziativa`;
        return this.http.post<string[]>(url, {
            terzaParteDiretta: clienteDiretto,
            terzaParteFinale: clienteFinale,
            idBusinessManager: idBm
        });
    }

    createSottocommessa$(sottocomessa: CommessaDto) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/save`;
        return this.http.post<number>(url, sottocomessa);
    }

    updateSottocommessa$(idSottocommessa: number, sottocommessa: CommessaDto) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/update/id/${idSottocommessa}`;
        return this.http.put<number>(url, sottocommessa);
    }

    deleteSottocommessa$(idSottocommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/deleteSottocommessa/id/${idSottocommessa}`;
        return this.http.delete(url);
    }

}
