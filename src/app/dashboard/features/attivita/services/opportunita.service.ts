import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FaseEventoDto } from '../models/offerta';
import { EventoDto, UpsertEventoParam } from '../models/opportunita';

@Injectable({
    providedIn: 'root'
})
export class OpportunitaService {

    constructor(
        private http: HttpClient
    ) { }

    getAllEventiByIdCommessa$(idCommessa: number){
        const url = `${environment.scaiRoot}/modulo-attivita-be/list/eventi/attivita?idAttivita=${idCommessa}`;
        return this.http.get<EventoDto[]>(url)
            .pipe(
                map(eventi =>
                    eventi.sort((a, b) => b.dataEvento.localeCompare(a.dataEvento))
                )
            );
    }

    getTipiEvento$(){
        const url = `${environment.scaiRoot}/modulo-attivita-be/evento/fasi/list`;
        return this.http.get<FaseEventoDto[]>(url);
    }

    createEvento$(input: UpsertEventoParam){
        const url = `${environment.scaiRoot}/modulo-attivita-be/save/evento`;
        return this.http.post<string>(url, input);
    }

    updateEvento$(idEvento: number, input: UpsertEventoParam){
        const url = `${environment.scaiRoot}/modulo-attivita-be/update/evento?idEvento=${idEvento}`;
        return this.http.put<string>(url, input);
    }

}


