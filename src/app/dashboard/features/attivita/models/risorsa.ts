import { UtentiAnagrafica } from "src/app/api/modulo-attivita/models";

export interface RisorsaTaskDto {
    id: number;
	idTask: number;
	idUtente: number;
	inizioAllocazione: string;
	fineAllocazione: string;
	allocazione: number;
	idAzienda: number;
}

export interface RisorsaTaskWrap extends RisorsaTaskDto {
    utente: UtentiAnagrafica
}

export interface UpsertLegameParam {
	id?: number;
	allocazione?: number;
	idAzienda?: number;
	inizioAllocazione: string;
	fineAllocazione: string;
	idTask: number;
	idUtente: number;
}