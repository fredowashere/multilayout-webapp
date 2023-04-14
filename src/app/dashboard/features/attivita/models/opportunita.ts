export interface FaseEventoDto {
    id: number;
    cod: string;
    descrizione: string;
}

export interface EventoDto {
    idOpportunita?: number;
    id: number;
    descrizione: string;
    faseEvento: FaseEventoDto;
    dataEvento: string;
}

export interface UpsertEventoParam {
    idOpportunita: number;
    dataEvento: string;
    faseEvento: {
        id: number;
    }
    descrizione: string;
}