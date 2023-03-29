export interface FaseEventoDto {
    id: number;
    cod: string;
    descrizione: string;
}

export interface Offerta {
    id: number;
    idAttivita: number;
	idTipoOfferta: number;
	dataOfferta: string;
	numeroOrdine: string;
	codiceDocumento: string;
	codiceIdentificativo: string;
	dataAccettazione?: string;
}