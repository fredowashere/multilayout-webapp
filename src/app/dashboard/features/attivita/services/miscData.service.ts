import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/modulo-attivita/models';
import { lookmap, singlifyLookmap } from 'src/app/utils/object';
import { StatoAvanzamentoWrapService } from '../../stato-avanzamento/services/stato-avanzamento-wrap.service';

const idAziendaAzienda: Record<string, any> = {
    "1": { "acronimo": "S", "descrizione": "SCAI SPA", "idAzienda": 1 },
    "4": { "acronimo": "SS", "descrizione": "SCAI Solutions", "idAzienda": 4 },
    "5": { "acronimo": "T", "descrizione": "Telvox", "idAzienda": 5 },
    "6": { "acronimo": "HT", "descrizione": "Hi-Tech Sistemi Informatici", "idAzienda": 6 },
    "7": { "acronimo": "CFS", "descrizione": "CFS Consulting", "idAzienda": 7 },
    "8": { "acronimo": "D", "descrizione": "DIANOS", "idAzienda": 8 },
    "9": { "acronimo": "ITEC", "descrizione": "SCAI ITEC SRL", "idAzienda": 9 },
    "10": { "acronimo": "SP", "descrizione": "SCAI Polska", "idAzienda": 10 },
    "11": { "acronimo": "SC", "descrizione": "SCAI CONNECT SRL", "idAzienda": 11 },
    "12": { "acronimo": "SL", "descrizione": "SCAI LAB SRL", "idAzienda": 12 },
    "13": { "acronimo": "TS", "descrizione": "SCAI TECNO S.P.A.", "idAzienda": 13 },
    "14": { "acronimo": "SCNS", "descrizione": "SCAI CONSULTING SRL", "idAzienda": 14 },
    "15": { "acronimo": "SFNC", "descrizione": "SCAI FINANCE SRL", "idAzienda": 15 },
    "16": { "acronimo": "FA_SCAI", "descrizione": "Finanza agevolata", "idAzienda": 16 },
    "17": { "acronimo": "SFNC", "descrizione": "Scai Finance divisione DW", "idAzienda": 17 },
    "18": { "acronimo": "SIN", "descrizione": "SCAI Innovation", "idAzienda": 18 },
    "19": { "acronimo": "KEN", "descrizione": "Keenergy Srl", "idAzienda": 19 },
    "20": { "acronimo": "Ux", "descrizione": "Ux-Men", "idAzienda": 20 },
    "21": { "acronimo": "SD", "descrizione": "SCAI DOOH.IT SRL", "idAzienda": 21 },
    "22": { "acronimo": "SC4UK", "descrizione": "SCAI4UK", "idAzienda": 22 },
    "23": { "acronimo": "FAST", "descrizione": "SCAI FAST S.R.L.", "idAzienda": 23 },
    "24": { "acronimo": "AXOT", "descrizione": "SCAI Axot Srl", "idAzienda": 24 },
    "25": { "acronimo": "SLDB", "descrizione": "Scai Lab divisione Bari", "idAzienda": 25 },
    "26": { "acronimo": "SPT", "descrizione": "SCAI PUNTOIT S.R.L.", "idAzienda": 26 },
    "27": { "acronimo": "ETT", "descrizione": "ETT S.P.A.", "idAzienda": 27 },
    "28": { "acronimo": "490", "descrizione": "490 STUDIO S.R.L.", "idAzienda": 28 },
    "29": { "acronimo": "XED", "descrizione": "XEDUM S.R.L.", "idAzienda": 29 },
    "30": { "acronimo": "SPACE", "descrizione": "SPACE S.P.A.", "idAzienda": 30 },
    "31": { "acronimo": "SCPNR", "descrizione": "SCAI PARTNERS S.R.L.", "idAzienda": 31 },
    "32": { "acronimo": "CRP", "descrizione": "COREPIXX SRL", "idAzienda": 32 },
    "33": { "acronimo": "META", "descrizione": "M.E.T.A. S.R.L.", "idAzienda": 33 }
};

@Injectable({
    providedIn: 'root'
})
export class MiscDataService {

    // Lists plus lookmaps
    clienti!: Dettaglio[];
    idClienteCliente!: { [key: number]: Dettaglio };

    utenti!: UtentiAnagrafica[];
    idUtenteUtente!: { [key: number]: UtentiAnagrafica }; 

    pmList!: UtentiAnagrafica[];
    idPmPm!: { [key: number]: UtentiAnagrafica };

    bmList!: UtentiAnagrafica[];
    idBmBm!: { [key: number]: UtentiAnagrafica };

    idAziendaAzienda = idAziendaAzienda;

    constructor(
        private statoAvanzamentoWrap: StatoAvanzamentoWrapService
    ) {

        statoAvanzamentoWrap
            .getClienti$({ totali: true })
            .pipe(
                tap(clienti => {
                    this.clienti = clienti;
                    this.idClienteCliente = singlifyLookmap(lookmap("id", clienti));
                })
            )
            .subscribe();

        statoAvanzamentoWrap
            .getUtenti$()
            .pipe(
                tap(utenti => {
                    this.utenti = utenti;
                    this.idUtenteUtente = singlifyLookmap(lookmap("idUtente", utenti));
                })
            )
            .subscribe();

        statoAvanzamentoWrap
            .getUtenti$({ IsPm: true, IsBm: false })
            .pipe(
                tap(pmList => {
                    this.pmList = pmList;
                    this.idPmPm = singlifyLookmap(lookmap("idUtente", pmList));
                })
            )
            .subscribe();

        statoAvanzamentoWrap
            .getUtenti$({ IsPm: false, IsBm: true })
            .pipe(
                tap(bmList => {
                    this.bmList = bmList;
                    this.idBmBm = singlifyLookmap(lookmap("idUtente", bmList));
                })
            )
            .subscribe();
    }

}

