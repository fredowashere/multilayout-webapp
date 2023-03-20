import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { StatoAvanzamentoService, UtentiService } from 'src/app/api/stato-avanzamento/services';
import { AuthService } from 'src/app/services/auth.service';
import { SottocommessaAvanzamento } from '../../../../models/stato-avanzamento';

@Injectable({
  providedIn: 'root'
})
export class StatoAvanzamentoWrapService {

  constructor(
    private authService: AuthService,
    private statoAvanzamentoService: StatoAvanzamentoService,
    private utentiService: UtentiService
  ) { }

  getUtenti$(
    IsPm = true,
    IsBm = true,
    idSottoCommessa?: number,
    idCliente?: number
  ) {
    return this.utentiService.getUtenti({
      idAzienda: this.authService.user.idAzienda as number,
      IsPm,
      IsBm,
      idSottoCommessa,
      idCliente
    });
  }

  getSottoCommesse$(idReferente?: number, idCliente?: number) {
    return this.statoAvanzamentoService
      .getSottoCommesse({
        idAzienda: this.authService.user.idAzienda as number,
        idReferente,
        idCliente
      });
  }

  getClienti$(idReferente?: number, idSottoCommessa?: number) {
    return this.statoAvanzamentoService.getClienti({
      idAzienda: this.authService.user.idAzienda as number,
      idReferente,
      idSottoCommessa
    });
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
}
