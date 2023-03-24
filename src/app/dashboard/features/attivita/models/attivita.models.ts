export interface GetAllCommesseInput {
    idCliente?: number;
    idClienteFinale?: number;
    idFase?: number;
    idBusinessManager?: number;
    idProjectManager?: number;
    idTipoFatturazione?: number;
    dataInizio?: string;
    dataFine?: string;
    codiceCommessa?: string;
    valido?: string;
}

export interface Commessa {
	codice?: string;
	descrizione?: string;
	id?: number;
}

export interface TipoAttivitaDto {
    id: number;
    descrizione: string;
    code: string;
}

export interface CommessaSearchDto {
    id: number;
	idCliente: number;
	codiceCommessa: string;
	descrizione: string;
	idBusinessManager: number;
	idProjectManager: number;
	nomeProjectManager: string;
	cognomeProjectManager: string;
	nomeBusinessManager: string;
	cognomeBusinessManager: string;
	descrizioneCliente: string;
	pm: string;
	bm: string;
	codiceCommessaEsteso: string;
	data: Date;
	valido: boolean;
	tipoAttivita: TipoAttivitaDto;
	visibleSearch: boolean;
	visibileModifica: boolean;
	visibleDelete: boolean;
	visibleCancel: boolean;
	visibleRestore: boolean;
}