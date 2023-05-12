import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';
import { Offerta } from '../../models/offerta';
import { OffertaService } from '../../services/offerta.service';

@Component({
  selector: 'app-offerta',
  templateUrl: './offerta.component.html',
  styleUrls: ['./offerta.component.css']
})
export class OffertaComponent {

  @Input("idCommessa") idCommessa!: number;
  @Output("offertaUpsert") offertaUpsertEmitter = new EventEmitter<Offerta>();

  offerta?: Offerta;

  tipologiaCtrl = new FormControl<number>(1);
  tipologie: { text: string, value: number }[] = [];

  dataOffertaCtrl = new FormControl<string | null>(null, [Validators.required]);
  dataAccettazioneCtrl = new FormControl<string | null>(null);

  nrOrdineCtrl = new FormControl<string | null>(null);
  
  codDocumentoCtrl = new FormControl<string | null>(null);
  codIdentificativoCtrl = new FormControl<string | null>(null);

  constructor(
    private offertaService: OffertaService,
    private toaster: ToastService
  ) { }

  ngOnInit() {

    combineLatest([
      this.offertaService.getAllTipiOfferta$(),
      this.offertaService.getOffertaByIdCommessa$(this.idCommessa)
    ])
    .subscribe(([ tipologie, offerta ]) => {

      this.tipologie = tipologie
        .map(tipologia => ({
          text: tipologia.descrizione,
          value: tipologia.id
        }));

      this.offerta = offerta;

      if(!offerta) return;

      // Only update idTipoOfferta if present in offerta response, otherwise keep control default
      if (offerta.idTipoOfferta)
        this.tipologiaCtrl.setValue(offerta.idTipoOfferta);
      
      this.nrOrdineCtrl.setValue(offerta.numeroOrdine);
      this.codDocumentoCtrl.setValue(offerta.codiceDocumento);
      this.codIdentificativoCtrl.setValue(offerta.codiceIdentificativo);
      this.dataOffertaCtrl.setValue(offerta.dataOfferta);
      this.dataAccettazioneCtrl.setValue(offerta.dataAccettazione!);
    });
  }

  upsert() {
    this.offertaService
      .upsertOfferta$({
        idAttivita: this.idCommessa,
        idTipoOfferta: this.tipologiaCtrl.value!,
        dataOfferta: this.dataOffertaCtrl.value!,
        numeroOrdine: this.nrOrdineCtrl.value!,
        dataAccettazione: this.dataAccettazioneCtrl.value!,
      })
      .subscribe(
        (offerta) => {
          const txt = "Offerta inserita/modificata con successo!";
          this.toaster.show(txt, { classname: 'bg-success text-white' });
          this.offertaUpsertEmitter.emit(offerta);
        },
        () => {
            const txt = "Non è stato possibile inserire/modificare l'offerta. Contattare il supporto tecnico.";
            this.toaster.show(txt, { classname: 'bg-danger text-white' });
        }
      )
  }
}
