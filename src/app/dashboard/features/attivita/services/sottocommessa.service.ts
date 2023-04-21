import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommessaDto, CreateSottocommessaParam } from '../models/commessa';
import { TipoFatturazione } from '../models/fatturazione';
import { TaskService } from './task.service';
import { RisorsaService } from './risorsa.service';

@Injectable({
    providedIn: 'root'
})
export class SottocommessaService {

    constructor(
        private http: HttpClient,
        private taskService: TaskService,
        private risorsaService: RisorsaService,
    ) { }

    checkExistingSottocommesseByIdCommessa$(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/check-exist-sottocommesse/${idCommessa}`;
        return this.http.get<boolean>(url);
    }

    getSottocommesseByIdCommessa$(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/by-padre/id/${idCommessa}`;
        return this.http.get<CommessaDto[]>(url)
            .pipe(
                map(sottocommesse =>
                    sottocommesse.reverse()
                )
            )
    }

    getSottocommessaById$(idSottocommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/id/${idSottocommessa}`;
        return this.http.get<CommessaDto>(url);
    }

    getIniziative$(
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

    getTipiFatturazione$() {
        const url = `${environment.scaiRoot}/scaiportal-common-services/commonservices/tipofatturazione/list`;
        return this.http.get<TipoFatturazione[]>(url);
    }

    createSottocommessa$(input: CreateSottocommessaParam) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/save`;
        return this.http.post<number>(url, input);
    }

    updateSottocommessa$(idSottocommessa: number, sottocommessa: CommessaDto) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/update/id/${idSottocommessa}`;
        return this.http.put<number>(url, sottocommessa);
    }

    deleteSottocommessa$(idSottocommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/commesse/deleteSottocommessa/id/${idSottocommessa}`;
        return this.http.delete(url);
    }

    async duplicateSottocommessa(sottocommessa: CommessaDto) {

        const tasks = await lastValueFrom(
            this.taskService.getTasksByIdSottocommessa$(sottocommessa.id)
        );

        const matriceRisorse = [];
        for (let i = 0; i < tasks.length; i++) {

            const risorse = await lastValueFrom(
                this.risorsaService.getLegamiByIdTask$(tasks[i].id)
            );

            matriceRisorse.push(risorse);
        }

        const idSottocommessa = await lastValueFrom(
            this.createSottocommessa$({
                idCommessaPadre: sottocommessa.idCommessaPadre,
                codiceCommessa: `Copia di ${sottocommessa.codiceCommessa}`,
                descrizione: sottocommessa.descrizione,
                iniziativa: sottocommessa.iniziativa,
                tipoFatturazione: sottocommessa.tipoFatturazione,
                importo: +sottocommessa.importo,
                ribaltabileCliente: sottocommessa.ribaltabileCliente,
                dataInizio: sottocommessa.dataInizio,
                dataFine: sottocommessa.dataFine
            })
        );

        for (let i = 0; i < tasks.length; i++) {

            const idTask = await lastValueFrom(
                this.taskService
                    .createTask$({
                        attivitaObbligatoria: tasks[i].attivitaObbligatoria,
                        codiceTask: tasks[i].codiceTask,
                        dataFine: tasks[i].dataFine,
                        dataInizio: tasks[i].dataInizio,
                        descrizione: tasks[i].descrizione,
                        giorniPrevisti: tasks[i].giorniPrevisti,
                        idCommessa: idSottocommessa,
                        percentualeAvanzamento: tasks[i].percentualeAvanzamento,
                        stimaGiorniAFinire: tasks[i].stimaGiorniAFinire,
                        visualizzataInRapportini: tasks[i].visualizzataInRapportini,
                    })
            );

            for (let j = 0; j < matriceRisorse[i].length; j++) {

                await lastValueFrom(
                    this.risorsaService
                        .createLegame$({
                            inizioAllocazione: matriceRisorse[i][j].inizioAllocazione,
                            fineAllocazione: matriceRisorse[i][j].fineAllocazione,
                            idTask: idTask,
                            idUtente: matriceRisorse[i][j].idUtente,
                        })
                )
            }
        }
    }

}
