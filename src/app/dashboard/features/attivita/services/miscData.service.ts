import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/modulo-attivita/models';
import { lookmap, singlifyLookmap } from 'src/app/utils/object';
import { StatoAvanzamentoWrapService } from '../../stato-avanzamento/services/stato-avanzamento-wrap.service';

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

