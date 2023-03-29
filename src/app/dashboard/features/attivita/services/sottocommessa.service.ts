import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SottocommessaService {

    constructor(
        private http: HttpClient
    ) { }

    checkExistingSottoCommesseByIdPadre$(idCommessaPadre: number) {
        const url = `${environment.attivitaApiRoot}/modulo-attivita-be/commesse/check-exist-sottocommesse/${idCommessaPadre}`;
        return this.http.get<boolean>(url);
    }

}
