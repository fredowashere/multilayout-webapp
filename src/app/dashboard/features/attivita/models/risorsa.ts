import { UtentiAnagrafica } from "src/app/api/stato-avanzamento/models";

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
    utente?: UtentiAnagrafica
}