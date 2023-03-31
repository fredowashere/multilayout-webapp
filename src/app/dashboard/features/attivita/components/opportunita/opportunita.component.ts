import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { startWith, Subject } from 'rxjs';
import { OpportunitaCreazioneModifica } from '../../dialogs/opportunita-creazione-modifica/opportunita-creazione-modifica.component';
import { EventoDto } from '../../models/opportunita';
import { OpportunitaService } from '../../services/opportunita.service';

@Component({
  selector: 'app-opportunita',
  templateUrl: './opportunita.component.html',
  styleUrls: ['./opportunita.component.css']
})
export class OpportunitaComponent {

  @Input("idCommessaPadre") idCommessaPadre!: number;

  refresh$ = new Subject<void>();

  eventi: EventoDto[] = [];

  constructor(
    private opportunitaService: OpportunitaService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    this.refresh$
      .pipe(startWith(null))
      .subscribe(() =>
        this.opportunitaService
          .getAllEventiByCommessaId$(this.idCommessaPadre)
          .subscribe(eventi => this.eventi = eventi)
      );
  }

  async create() {

    const modalRef = this.modalService
      .open(
        OpportunitaCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idCommessaPadre = this.idCommessaPadre;

    const result = await modalRef.result;
    this.refresh$.next();
  }

  async update(evento: EventoDto) {

    const modalRef = this.modalService
      .open(
        OpportunitaCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idCommessaPadre = this.idCommessaPadre;
    modalRef.componentInstance.evento = evento;

    await modalRef.result;
    this.refresh$.next();
  }
}
