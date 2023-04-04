import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RisorsaTaskDto, RisorsaTaskWrap } from '../models/risorsa';
import { MiscDataService } from './miscData.service';

@Injectable({
    providedIn: 'root'
})
export class RisorsaService {

    constructor(
        private http: HttpClient,
        private miscDataService: MiscDataService
    ) { }

    enrichLegame(legame: RisorsaTaskDto) {
        const utente = this.miscDataService.idUtenteUtente[legame.idUtente];
        console.log(this.miscDataService.idUtenteUtente);
        return { ...legame, utente };
    }

    enrichLegami(legami: RisorsaTaskDto[]) {
        return legami.map(this.enrichLegame.bind(this));
    }

    getLegamiByIdTask$(idTask: number): Observable<RisorsaTaskWrap[]> {
        const url = `${environment.scaiRoot}/modulo-attivita-be/legami-tasks-utenti/by-task/id/${idTask}`;
        return this.http.get<RisorsaTaskDto[]>(url)
            .pipe(map(this.enrichLegami.bind(this)));
    }
    
    getLegameById$(idLegame: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/legami-tasks-utenti/id/${idLegame}`;
        return this.http.get<RisorsaTaskDto>(url)
            .pipe(map(this.enrichLegame.bind(this)));
    }
    
    getLegamiByIdTaskAndIdUtente$(idTask : number, idUtente: number){
        const url = `${environment.scaiRoot}/modulo-attivita-be/legami-tasks-utenti/casual/id-task/${idTask}/id-utente/${idUtente}`;
        return this.http.get<RisorsaTaskDto[]>(url)
            .pipe(map(this.enrichLegami.bind(this)));
    }
    
    createLegame$(legameTaskRisorsa: RisorsaTaskDto) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/legami-tasks-utenti/save`;
        return this.http.post<number>(url, legameTaskRisorsa);
    }
    
    updateLegame$(idLegame: number, legame: RisorsaTaskDto) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/legami-tasks-utenti/update/id/${idLegame}`;
        return this.http.put(url, legame);
    }
    
    deleteLegame$(idLegame: number, idUtente: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/legami-tasks-utenti/delete/id/${idLegame}/id-utente/${idUtente}`;
        return this.http.delete(url);
    }
    
    checkRangeTask(legame: RisorsaTaskDto) {
        return this.http.post<number>(`${environment.scaiRoot}/modulo-attivita-be/legami-tasks-utenti/check/range/task`, legame);
    }

}