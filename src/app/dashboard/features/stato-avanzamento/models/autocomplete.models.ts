export interface GetUtentiParam {
    idAzienda?: number;
    IsPm?: boolean;
    IsBm?: boolean;
    idSottoCommessa?: number;
    idCliente?: number;
    idCommessa?: number;
}

export interface GetSottocommesseParam {
    idAzienda?: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
}

export interface GetClientiParam {
    idAzienda?: number;
    idReferente?: number;
    idSottoCommessa?: number;
    idBusinessManager?: number;
    idCommessa?: number;
    totali?: boolean;
}
