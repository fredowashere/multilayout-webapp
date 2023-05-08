import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, startWith } from 'rxjs';

@Component({
  selector: 'app-reperibilita',
  templateUrl: './reperibilita.component.html',
  styleUrls: ['./reperibilita.component.css']
})
export class ReperibilitaComponent {

  @Input("idCommessa") idCommessa!: number;
  @Input("idSottocommessa") idSottocommessa!: number;

  refresh$ = new Subject<void>();

  reperibilita: any[] = [];

  constructor(
    // private reperibilitaService: ReperibilitaService
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    // this.refresh$
    //   .pipe(startWith(null))
    //   .subscribe(() =>
    //     this.reperibilitaService
    //       .getReperibilitaByIdSottocommessa$(this.idSottocommessa)
    //       .subscribe(reperibilita => this.reperibilita = reperibilita)
    //   );
  }

  async create() {

    // const modalRef = this.modalService
    //   .open(
    //     ReperibilitaCreazioneModifica,
    //     {
    //       size: 'lg',
    //       centered: true,
    //       scrollable: true
    //     }
    //   );
    // modalRef.componentInstance.idSottocommessa = this.idSottocommessa;

    // const result = await modalRef.result;
    // this.refresh$.next();
  }

  async update(reperibilita: any) {

    // const modalRef = this.modalService
    //   .open(
    //     ReperibilitaCreazioneModifica,
    //     {
    //       size: 'lg',
    //       centered: true,
    //       scrollable: true
    //     }
    //   );
    // modalRef.componentInstance.idSottocommessa = this.idSottocommessa;
    // modalRef.componentInstance.reperibilita = reperibilita;

    // await modalRef.result;
    // this.refresh$.next();
  }
}
