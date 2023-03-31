import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Offerta } from '../../models/offerta';
import { OffertaService } from '../../services/offerta.service';

@Component({
  selector: 'app-offerta',
  templateUrl: './offerta.component.html',
  styleUrls: ['./offerta.component.css']
})
export class OffertaComponent {

  @Input("idCommessaPadre") idCommessaPadre!: number;

  offerta?: Offerta;

  tipologiaCtrl = new FormControl();
  tipologie: { text: string, value: any, _id: number }[] = [];

  nrOrdineCtrl = new FormControl();

  codDocumentoCtrl = new FormControl();

  codIdentificativoCtrl = new FormControl();

  dataOffertaCtrl = new FormControl();

  dataAccettazioneCtrl = new FormControl();

  constructor(
    private offertaService: OffertaService
  ) { }

  ngOnInit() {

    this.offertaService
      .getAllTipiOfferta$()
      .subscribe(tipologie => {

        this.tipologie = tipologie
          .map(tipologia => ({
            _id: tipologia.id,
            text: tipologia.descrizione,
            value: tipologia.cod
          }));

        this.tipologiaCtrl.setValue(this.tipologie[0].value);
      });

    this.offertaService
      .getOffertaByIdCommessaPadre$(this.idCommessaPadre)
      .subscribe(offerta => {

        this.offerta = offerta;

        // Init inputs
      });
  }

  upsert() {
    // TODO
  }
}
