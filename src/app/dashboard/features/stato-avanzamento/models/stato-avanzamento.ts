import { format } from "date-fns";
import { jsonCopy } from "src/app/utils/json";
import { guid } from "src/app/utils/uuid";
import { Chiusura, Commessa, Dettaglio, EnumStatiChiusura, GetSottoCommesseAvanzamentoResponse, GetSottoCommesseAvanzamentoResponseDettaglio, UtentiAnagrafica } from "../../../../api/stato-avanzamento/models";

export class SottocommessaAvanzamentoDettaglio {

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
    valido: number;
    statoValidazione: Chiusura;
    updStatoValidazione: Chiusura;

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
        this.valido = raw.valido!;
        this.statoValidazione = raw.statoValidazione!;
        this.updStatoValidazione = jsonCopy(raw.statoValidazione!);
    }
}

export class SottocommessaAvanzamento {

    _id = guid();
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

        this.aggiungiRigaImplicita();
        this.aggiornaAvanzamento();
    }

    aggiungiRigaImplicita() {

        const contieneMeseCorrente = this.dettaglio
            .some(d => 
                new Date(d.meseValidazione).getFullYear() === new Date().getFullYear()
                && new Date(d.meseValidazione).getMonth() === new Date().getMonth()
            );

        const oggi = format(new Date(), 'yyyy-MM-dd');

        if (!contieneMeseCorrente)
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

    aggiornaAvanzamento() {

        this.dettaglio.forEach((d, i, a) => {
            const prev = a[i - 1];
            const curr = d;
            if (prev)
                curr.avanzamentoSommatorio = curr.avanzamentoTotale + prev.avanzamentoSommatorio;
            else
                curr.avanzamentoSommatorio = curr.avanzamentoTotale;
        });

        this.percentualeRimanente = 1 - this.dettaglio.map(d => d.avanzamentoTotale).reduce((a, b) => a + b, 0);
    }
}