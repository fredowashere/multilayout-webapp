import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, startWith } from 'rxjs';
import { ReperibilitaCreazioneComponent } from '../../dialogs/reperibilita-creazione/reperibilita-creazione.component';
import { SegreteriaService } from 'src/app/api/modulo-attivita/services';
import { AuthService } from 'src/app/services/auth.service';
import { GetReperibilitaCommesseTotaliResponse } from 'src/app/api/modulo-attivita/models';

@Component({
  selector: 'app-reperibilita',
  templateUrl: './reperibilita.component.html',
  styleUrls: ['./reperibilita.component.css']
})
export class ReperibilitaComponent {

  @Input("idCommessa") idCommessa!: number;
  @Input("idSottocommessa") idSottocommessa!: number;

  refresh$ = new Subject<void>();

  reperibilita: GetReperibilitaCommesseTotaliResponse[] = [];

  constructor(
    private authService: AuthService,
    private segreteriaService: SegreteriaService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.refresh$
      .pipe(startWith(null))
      .subscribe(() =>
        this.segreteriaService
          .getReperibilitaCommesseTotali({
            idAzienda: this.authService.user.idAzienda as number,
            IdSottoCommessa: this.idSottocommessa
          })
          .subscribe(reperibilita => this.reperibilita = reperibilita)
      );
  }

  async create() {

    const modalRef = this.modalService
      .open(
        ReperibilitaCreazioneComponent,
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

  async delete(reperibilita: any) { }
}
