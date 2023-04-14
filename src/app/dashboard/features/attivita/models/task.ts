export interface TaskDto {
    id: number;
	codiceTask: string;
	descrizione: string;
	visualizzataInRapportini: boolean;
	attivitaObbligatoria: boolean;
	dataInizio: string;
	dataFine: string;
	idCommessa: number;
	idTerzaParte: number;
	valido: boolean;
	percentualeAvanzamento: number;
	stimaGiorniAFinire: number;
	giorniPrevisti: number;
}