import { format } from "date-fns";
import { jsonCopy } from "src/app/utils/json";
import { guid } from "src/app/utils/uuid";
import {
    Chiusura,
    Commessa,
    Dettaglio,
    EnumStatiChiusura,
    GetSottoCommesseAvanzamentoResponse,
    GetSottoCommesseAvanzamentoResponseDettaglio,
    UtentiAnagrafica
} from "../../../../api/stato-avanzamento/models";

export interface GetAvanzamentoParam {
    idAzienda?: number;
    idReferente?: number;
    idBusinessManager?: number;
    idCliente?: number;
    idCommessa?: number;
    idSottoCommessa?: number;
    dataInizio?: string;
    dataFine?: string;
    stato?: number;
}

export class SottocommessaAvanzamentoDettaglio {

    raw: GetSottoCommesseAvanzamentoResponseDettaglio;

    _id = guid();
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

        this.raw = jsonCopy(raw);
        
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

    raw: GetSottoCommesseAvanzamentoResponse;

    _id = guid();
    avanzamentoTotale!: number;

    cliente: Dettaglio;
    clienteFinale: Dettaglio;
    dettaglio: Array<SottocommessaAvanzamentoDettaglio>;
    commessa: Commessa;
    dataFine: string;
    dataInizio: string;
    referente: UtentiAnagrafica;
    sottoCommessa: Commessa;
    stato: number;

    constructor(raw: GetSottoCommesseAvanzamentoResponse) {

        this.raw = jsonCopy(raw);

        this.cliente = raw.cliente!;
        this.clienteFinale = raw.clienteFinale!;
        this.commessa = raw.commessa!;
        this.dettaglio = raw.dettaglio?.map(d => new SottocommessaAvanzamentoDettaglio(d))!;
        this.dataFine = raw.dataFine!;
        this.dataInizio = raw.dataInizio!;
        this.referente = raw.referente!;
        this.sottoCommessa = raw.sottoCommessa!;
        this.stato = raw.stato!;

        this.aggiornaAvanzamento();
        this.aggiungiRigaImplicita();
    }

    aggiungiRigaImplicita() {

        const oggi = format(new Date(), 'yyyy-MM-dd');

        const contieneMeseCorrente = this.dettaglio
            .some(d => 
                new Date(d.meseValidazione).getFullYear() === new Date().getFullYear()
                && new Date(d.meseValidazione).getMonth() === new Date().getMonth()
            );

        const tutteChiuse = this.dettaglio
            .every(d =>
                d.statoValidazione.id === EnumStatiChiusura.Chiuso
            );

        const chiusoECompletato = tutteChiuse && this.avanzamentoTotale === 1;
        
        if (!contieneMeseCorrente && !chiusoECompletato) {
            this.dettaglio.push(
                new SottocommessaAvanzamentoDettaglio({
                    avanzamentoTotale: 0,
                    dataAggiornamento: oggi,
                    dataInserimento: oggi,
                    descrizione: 'Riga autogenerata',
                    idAzienda: 0,
                    idCommessa: this.commessa.id,
                    idProjectManager: this.referente.idUtente,
                    idUtenteAggiornamento: 0,
                    idUtenteInserimento: 0,
                    idcommessaAvanzamentiMensili: 0,
                    meseValidazione: oggi,
                    ricavoCompetenza: 0,
                    sottoCommessa: this.sottoCommessa,
                    statoValidazione: {
                        id: EnumStatiChiusura.Aperto,
                        descrizione: 'Aperto'
                    },
                    valido: 1,
                })
            );
        }
    }

    aggiornaAvanzamento() {

        this.dettaglio
            .forEach((d, i, a) => {
                const prev = a[i - 1];
                const curr = d;
                if (prev)
                    curr.avanzamentoSommatorio = curr.avanzamentoTotale + prev.avanzamentoSommatorio;
                else
                    curr.avanzamentoSommatorio = curr.avanzamentoTotale;
            });

        this.avanzamentoTotale = this.dettaglio
            .map(d => d.avanzamentoTotale)
            .reduce((a, b) => a + b, 0);
    }

    calcPercRimanente(dettaglio: SottocommessaAvanzamentoDettaglio) {

        const percRimanente = this.dettaglio
            .reduce((acc, d) => {
                if (d === dettaglio)
                    return acc;
                return acc + d.avanzamentoTotale;
            }, 0);
        
        const rounded = Math.round((1 - percRimanente) * 100) / 100;
        return Math.max(0, Math.min(1, rounded));
    }
}