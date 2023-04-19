export interface ForzaturaDto {
    id?: number;
    idAzienda?: number;
    valido?: boolean | number;
    note?: string;
    idFornitore: number;
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
    costoTotale?: string;
    ricavoTotale?: string;
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