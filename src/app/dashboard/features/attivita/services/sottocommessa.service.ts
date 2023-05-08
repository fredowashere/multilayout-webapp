import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommessaDto, CreateSottocommessaParam } from '../models/commessa';
import { TipoFatturazione } from '../models/fatturazione';
import { TaskService } from './task.service';
import { RisorsaService } from './risorsa.service';
import { TaskDto } from '../models/task';

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

        const tasks = await lastValueFrom(
            this.taskService.getTasksByIdSottocommessa$(sottocommessa.id)
        );

        for (let i = 0; i < tasks.length; i++) {
            this.duplicateTask(idSottocommessa, tasks[i])
        }
    }

    async duplicateTask(idSottocommessa: number, task: TaskDto) {

        const risorse = await lastValueFrom(
            this.risorsaService.getLegamiByIdTask$(task.id)
        );

        const idTask = await lastValueFrom(
            this.taskService
                .createTask$({
                    attivitaObbligatoria: task.attivitaObbligatoria,
                    codiceTask: `Copia di ${task.codiceTask || "task senza codice"}`,
                    dataFine: task.dataFine,
                    dataInizio: task.dataInizio,
                    descrizione: task.descrizione,
                    giorniPrevisti: task.giorniPrevisti,
                    idCommessa: idSottocommessa,
                    percentualeAvanzamento: task.percentualeAvanzamento,
                    stimaGiorniAFinire: task.stimaGiorniAFinire,
                    visualizzataInRapportini: task.visualizzataInRapportini,
                })
        );

        for (let j = 0; j < risorse.length; j++) {

            await lastValueFrom(
                this.risorsaService
                    .createLegame$({
                        inizioAllocazione: risorse[j].inizioAllocazione,
                        fineAllocazione: risorse[j].fineAllocazione,
                        idTask: idTask,
                        idUtente: risorse[j].idUtente,
                    })
            )
        }
    }

}
