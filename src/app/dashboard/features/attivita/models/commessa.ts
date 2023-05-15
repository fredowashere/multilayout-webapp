//  _____   _                                     _     _                       _           _   _                   _ _       _     _        _                   
// |_   _| | |                                   (_)   | |                     | |         | | ( )                 | | |     | |   | |      | |                  
//   | |   | |__   __ ___   _____   _ __   ___    _  __| | ___  __ _  __      _| |__   __ _| |_|/ ___   _ __  _   _| | | __ _| |__ | | ___  | |__   ___ _ __ ___ 
//   | |   | '_ \ / _` \ \ / / _ \ | '_ \ / _ \  | |/ _` |/ _ \/ _` | \ \ /\ / / '_ \ / _` | __| / __| | '_ \| | | | | |/ _` | '_ \| |/ _ \ | '_ \ / _ \ '__/ _ \
//  _| |_  | | | | (_| |\ V /  __/ | | | | (_) | | | (_| |  __/ (_| |  \ V  V /| | | | (_| | |_  \__ \ | | | | |_| | | | (_| | |_) | |  __/ | | | |  __/ | |  __/
//  \___/  |_| |_|\__,_| \_/ \___| |_| |_|\___/  |_|\__,_|\___|\__,_|   \_/\_/ |_| |_|\__,_|\__| |___/ |_| |_|\__,_|_|_|\__,_|_.__/|_|\___| |_| |_|\___|_|  \___|

export interface GetAllCommesseParam {
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

export interface SimpleDto {
	id: number;
	text: string;
}

export interface Commessa {
	id?: number;
	codice?: string;
	descrizione?: string;
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
	data: string;
	valido: boolean;
	tipoAttivita: {
		id: number;
		code: string;
		descrizione: string;
	};
	visibleSearch: boolean;
	visibileModifica: boolean;
	visibleDelete: boolean;
	visibleCancel: boolean;
	visibleRestore: boolean;
}

export interface CommessaDto {
    id: number;
    idCommessaPadre: number;
	codiceCommessa: string;
	descrizione: string;
	idCliente: number;
    idClienteFinale: number;
    idBusinessManager: number;
    idProjectManager: number;
	giorniPrevisti: number;
	decorrenzaAttivita: string;
	dataInserimento: string;
	dataInizio: string;
    dataFine: string;
	statoCommessa: string;
	ribaltabileCliente: boolean;
    importo: string;
    percentualeAvanzamento: number;
    iniziativa: string;
    valido: boolean;
    superamentoSoglia: boolean;
    stimaGiorniAFinire: number;
    tipoAttivita: SimpleDto;
    tipoFatturazione: SimpleDto;
	idCommessaCollegata?: number;
	idCommessaFatturazione?: number;
    tag: string | null;
}

export interface UpdateCommessaParam {
	id: number;
	codiceCommessa: string;
	idCliente: number;
	idClienteFinale: number,
	idBusinessManager: number,
	idProjectManager: number,
	descrizione: string,
	tag: string | null
}

export interface CreateCommessaParam {
	idAzienda?: number;
	idUtenteInserimento?: number;
    idCliente: number;
	idClienteFinale: number;
	idBusinessManager: number;
	idProjectManager: number;
	idTipoAttivita: number;
	dataDecorrenza: string | null;
	protocollo: string | null;
	descrizione: string;
	tag: string | null;
}

export interface OpportunitaDto {
	id: number;
    idCliente: number;
	idClienteFinale: number;
	idBusinessManager: number;
	idProjectManager: number;
	descrizione: string;
	iniziativa: string;
	dataOfferta: string;
	idUtenteInserimento: number;
	idAzienda: number;
	idTipoAttivita: number;
	protocollo: string;
}

export interface CreateSottocommessaParam {
	idCommessaPadre: number;
	codiceCommessa: string;
	idCommessaCollegata?: number | null;
	idCommessaFatturazione?: number | null;
	descrizione: string;
	iniziativa: string | null;
	tipoFatturazione: SimpleDto;
	importo: number;
	ribaltabileCliente: boolean;
	dataInizio: string;
	dataFine: string;
}