import { Component, Input } from '@angular/core';
import { DocumentoFiscaleService } from '../../services/documentoFiscale';
import { ToastService } from 'src/app/services/toast.service';
import { Subject, catchError, of, startWith } from 'rxjs';
import { Ordine } from '../../models/ordine';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent {

  @Input("idCommessa") idCommessa!: number;

  refresh$ = new Subject<void>();

  ordini: Ordine[] = [];

  constructor(
    private docFiscaleService: DocumentoFiscaleService,
    private toaster: ToastService
  ) { }

  ngOnInit() {
    this.refresh$
      .pipe(startWith(null))
      .subscribe(() =>
        this.docFiscaleService
          .getOrdiniByIdCommessa(this.idCommessa)
          .pipe(
            catchError((ex) => {
              this.toaster.show(ex.error, { classname: 'bg-danger text-white' });
              return of([])
            })
          )
          .subscribe((ordini: any) => this.ordini = ordini)
      );
  }

  downloadExcel() {
    this.docFiscaleService.downloadExcel(this.idCommessa);
  }
}
