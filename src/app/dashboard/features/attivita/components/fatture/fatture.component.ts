import { Component, Input } from '@angular/core';
import { Fattura } from '../../models/fattura';
import { DocumentoFiscaleService } from '../../services/documentoFiscale';
import { ToastService } from 'src/app/services/toast.service';
import { Subject, catchError, of, startWith } from 'rxjs';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent {

  @Input("idCommessa") idCommessa!: number;

  refresh$ = new Subject<void>();

  fatture: Fattura[] = [];

  constructor(
    private docFiscaleService: DocumentoFiscaleService,
    private toaster: ToastService
  ) { }

  ngOnInit() {
    this.refresh$
      .pipe(startWith(null))
      .subscribe(() =>
        this.docFiscaleService
          .getFattureByIdCommessa(this.idCommessa)
          .pipe(
            catchError((ex) => {
              this.toaster.show(ex.error, { classname: 'bg-danger text-white' });
              return of([])
            })
          )
          .subscribe(fatture => this.fatture = fatture)
      );
  }

  downloadExcel() {
    this.docFiscaleService.downloadExcel(this.idCommessa);
  }

}
