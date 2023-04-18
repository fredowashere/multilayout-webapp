export interface ForzaturaDto {
    id?: number;
    idFornitore: number;
    note?: string;
    commessa: {
        id: number;
        text?: string;
    };
    categoriaForzatura: {
        id: number;
        text?: string;
    };
    inizioPeriodo: string;
    finePeriodo: string;
    idAzienda: number;
    valido: boolean;
    ricavoTotale?: number;
    costoTotale?: string;
    idCliente: number;
    riscontoMensile: boolean;
    riscontoGiornaliero: boolean;
    classificazioneDiCosto?: {
        id: number;
        text?: string;
    };
}

export interface CategoriaForzaturaDto {
    id: number;
	descrizione: string;
	categoriaNew: string;
	codice: string;
}