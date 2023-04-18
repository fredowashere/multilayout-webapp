import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { startWith, Subject } from 'rxjs';
import { EventoCreazioneModifica } from '../../dialogs/evento-creazione-modifica/evento-creazione-modifica.component';
import { EventoDto } from '../../models/opportunita';
import { ForzaturaService } from '../../services/forzatura.service';
import { ForzaturaDto } from '../../models/forzatura';

@Component({
  selector: 'app-forzature',
  templateUrl: './forzature.component.html',
  styleUrls: ['./forzature.component.css']
})
export class ForzatureComponent {

  @Input("idCommessa") idCommessa!: number;
  @Input("categoria") categoria!: "costo" | "ricavo";

  refresh$ = new Subject<void>();

  forzature: ForzaturaDto[] = [];

  constructor(
    private forzatureService: ForzaturaService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    this.refresh$
      .pipe(startWith(null))
      .subscribe(() =>
        this.forzatureService
          .getForzature(this.idCommessa, this.categoria)
          .subscribe(forzature => this.forzature = forzature)
      );
  }

  async create() {

    const modalRef = this.modalService
      .open(
        EventoCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idCommessa = this.idCommessa;

    const result = await modalRef.result;
    this.refresh$.next();
  }

  async update(evento: EventoDto) {

    const modalRef = this.modalService
      .open(
        EventoCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idCommessa = this.idCommessa;
    modalRef.componentInstance.evento = evento;

    await modalRef.result;
    this.refresh$.next();
  }
}
