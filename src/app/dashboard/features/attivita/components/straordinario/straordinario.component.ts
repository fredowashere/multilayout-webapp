import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, startWith } from 'rxjs';
import { StraordinariCreazioneComponent } from '../../dialogs/straordinari-creazione/straordinari-creazione.component';
import { AuthService } from 'src/app/services/auth.service';
import { SegreteriaService } from 'src/app/api/modulo-attivita/services';
import { GetStraordinariTerzePartiTotaliResponse } from 'src/app/api/modulo-attivita/models';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-straordinario',
  templateUrl: './straordinario.component.html',
  styleUrls: ['./straordinario.component.css']
})
export class StraordinarioComponent {

  @Input("idCommessa") idCommessa!: number;
  @Input("idSottocommessa") idSottocommessa!: number;

  refresh$ = new Subject<void>();

  straordinari: GetStraordinariTerzePartiTotaliResponse[] = []

  constructor(
    private authService: AuthService,
    private segreteriaService: SegreteriaService,
    private modalService: NgbModal,
    private toaster: ToastService
  ) { }

  ngOnInit() {
    this.refresh$
      .pipe(startWith(null))
      .subscribe(() =>
        this.segreteriaService
          .getStraordinariTerzePartiTotali({
            idAzienda: this.authService.user.idAzienda!,
            IdSottoCommessa: this.idSottocommessa
          })
          .subscribe(straordinari => this.straordinari = straordinari)
      );
  }

  async create() {

    const modalRef = this.modalService
      .open(
        StraordinariCreazioneComponent,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idSottocommessa = this.idSottocommessa;

    const result = await modalRef.result;
    this.refresh$.next();
  }

  async delete(straordinario: GetStraordinariTerzePartiTotaliResponse) {
    this.segreteriaService
      .postStraordinariTerzeParti({
        idAzienda: this.authService.user.idAzienda!,
        idLegameStraordinari: straordinario.idLegameStraordinari!,
        body: {
          attivo: false
        }
      })
      .subscribe(
        () => {
          const txt = "Straordinario eliminato con successo!";
          this.toaster.show(txt, { classname: 'bg-success text-white' });
          this.refresh$.next();
        },
        () => {
          const txt = "Non è stato possibile eliminare lo straordinario. Contattare il supporto tecnico.";
          this.toaster.show(txt, { classname: 'bg-danger text-white' });
        }
      )
  }
}
