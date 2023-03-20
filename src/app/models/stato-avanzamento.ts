import { Chiusura, Commessa, Dettaglio, GetSottoCommesseAvanzamentoResponse, GetSottoCommesseAvanzamentoResponseDettaglio, UtentiAnagrafica } from "../api/stato-avanzamento/models";

export class SottocommessaAvanzamentoDettaglio {

    dirty = false;
    avanzamentoSommatorio: number;

    avanzamentoTotale: number;
    dataAggiornamento: string;
    dataInserimento: string;
    descrizione: string;
    idAzienda: number;
    idCommessa: number;
    idProjectManager: number;
    idUtenteAggiornamento: number;
    idUtenteInserimento: number;
    idcommessaAvanzamentiMensili: number;
    meseValidazione: string;
    ricavoCompetenza: number;
    sottoCommessa: Commessa;
    statoValidazione: Chiusura;
    valido: number;

    constructor(raw: GetSottoCommesseAvanzamentoResponseDettaglio) {
        
        this.avanzamentoSommatorio = 0;

        this.avanzamentoTotale = raw.avanzamentoTotale!;
        this.dataAggiornamento = raw.dataAggiornamento!;
        this.dataInserimento = raw.dataInserimento!;
        this.descrizione = raw.descrizione!;
        this.idAzienda = raw.idAzienda!;
        this.idCommessa = raw.idCommessa!;
        this.idProjectManager = raw.idProjectManager!;
        this.idUtenteAggiornamento = raw.idUtenteAggiornamento!;
        this.idUtenteInserimento = raw.idUtenteInserimento!;
        this.idcommessaAvanzamentiMensili = raw.idcommessaAvanzamentiMensili!;
        this.meseValidazione = raw.meseValidazione!;
        this.ricavoCompetenza = raw.ricavoCompetenza!;
        this.sottoCommessa = raw.sottoCommessa!;
        this.statoValidazione = raw.statoValidazione!;
        this.valido = raw.valido!;
    }
}

export class SottocommessaAvanzamento {

    percentualeRimanente!: number;

    cliente: Dettaglio;
    clienteFinale: Dettaglio;
    commessa: Commessa;
    dataFine: string;
    dataInizio: string;
    referente: UtentiAnagrafica;
    sottoCommessa: Commessa;
    stato: number;
    dettaglio: Array<SottocommessaAvanzamentoDettaglio>;

    constructor(raw: GetSottoCommesseAvanzamentoResponse) {

        this.cliente = raw.cliente!;
        this.clienteFinale = raw.clienteFinale!;
        this.commessa = raw.commessa!;
        this.dataFine = raw.dataFine!;
        this.dataInizio = raw.dataInizio!;
        this.referente = raw.referente!;
        this.sottoCommessa = raw.sottoCommessa!;
        this.stato = raw.stato!;
        this.dettaglio = raw.dettaglio?.map(d => new SottocommessaAvanzamentoDettaglio(d))!;

        this.aggiorna();
    }

    aggiorna() {

        this.dettaglio.forEach((d, i, a) => {

            const prev = a[i - 1];
            const curr = d;
            if (prev) {
                curr.avanzamentoSommatorio = curr.avanzamentoTotale + prev.avanzamentoSommatorio;
            }
            else {
                curr.avanzamentoSommatorio = curr.avanzamentoTotale;
            }
        });

        this.percentualeRimanente = 1 - this.dettaglio.map(d => d.avanzamentoTotale).reduce((a, b) => a + b, 0);
    }
}