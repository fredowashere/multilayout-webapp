import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { StatoAvanzamentoService, UtentiService } from 'src/app/api/stato-avanzamento/services';
import { AuthService } from 'src/app/services/auth.service';
import { GetClientiParam, GetSottocommesseParam, GetUtentiParam } from '../models/autocomplete.models';
import { SottocommessaAvanzamento, SottocommessaAvanzamentoDettaglio } from '../models/stato-avanzamento.models';

@Injectable({
  providedIn: 'root'
})
export class StatoAvanzamentoWrapService {

  constructor(
    private authService: AuthService,
    private statoAvanzamentoService: StatoAvanzamentoService,
    private utentiService: UtentiService
  ) { }

  getUtenti$(input?: GetUtentiParam) {
    input = input || { IsPm: true, IsBm: true }; // all users by default
    input.idAzienda = this.authService.user.idAzienda as number;
    return this.utentiService
      .getUtenti(input as any);
  }

  getSottocommesse$(input?: GetSottocommesseParam) {
    input = input || {};
    input.idAzienda = this.authService.user.idAzienda as number;
    return this.statoAvanzamentoService
      .getSottoCommesse(input as any);
  }

  getClienti$(input?: GetClientiParam) {
    input = input || {};
    input.idAzienda = this.authService.user.idAzienda as number;
    return this.statoAvanzamentoService
      .getClienti(input as any);
  }

  getAvanzamento$(
    idReferente: number,
    idSottoCommessa?: number,
    idCliente?: number,
    stato?: number
  ) {
    return this.statoAvanzamentoService
      .getSottoCommesseAvanzamento({
        idAzienda: this.authService.user.idAzienda as number,
        idReferente,
        idSottoCommessa,
        idCliente,
        stato
      })
      .pipe(
        map(res =>
          res.map(sc => new SottocommessaAvanzamento(sc))
        )
      );
  }

  postAvanzamento$(dettaglio: SottocommessaAvanzamentoDettaglio) {

    return this.statoAvanzamentoService
      .postCommesseAvanzamento({
        idAzienda: this.authService.user.idAzienda as number,
        IdAvanzamento: dettaglio.idcommessaAvanzamentiMensili,
        body: {
          idSottoCommessa: dettaglio.sottoCommessa.id,
          avanzamento: dettaglio.avanzamentoTotale,
          descrizione: "What's that?",
          statoValidazione: dettaglio.statoValidazione.id,
          idAzienda: this.authService.user.idAzienda as number,
          idProjectManager: dettaglio.idProjectManager,
          ricavoCompetenza: dettaglio.ricavoCompetenza,
          dataAggiornamento: dettaglio.dataAggiornamento,
          meseValidazione: dettaglio.meseValidazione,
          valido: !!dettaglio.valido
        }
      });
  }
}
