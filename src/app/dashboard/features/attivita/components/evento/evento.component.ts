import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { startWith, Subject } from 'rxjs';
import { EventoCreazioneModifica } from '../../dialogs/evento-creazione-modifica/evento-creazione-modifica.component';
import { EventoDto } from '../../models/evento';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  @Input("idCommessa") idCommessa!: number;

  refresh$ = new Subject<void>();

  eventi: EventoDto[] = [];

  constructor(
    private eventoService: EventoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.refresh$
      .pipe(startWith(null))
      .subscribe(() =>
        this.eventoService
          .getAllEventiByIdCommessa$(this.idCommessa)
          .subscribe(eventi => this.eventi = eventi)
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
