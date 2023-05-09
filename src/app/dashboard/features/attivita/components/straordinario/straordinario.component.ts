import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-straordinario',
  templateUrl: './straordinario.component.html',
  styleUrls: ['./straordinario.component.css']
})
export class StraordinarioComponent {

  @Input("idCommessa") idCommessa!: number;

  refresh$ = new Subject<void>();

  straordinari: any[] = [
    {
      "inizio": "2023-01-01",
      "fine": "2023-01-31",
      "idLegameStraordinari": 1,
      "descrizione": "straordinario",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 2761,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "ETT S.P.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-06-30",
      "idLegameStraordinari": 7,
      "descrizione": "Straordinario Afast",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 4931,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "Accenture Finance and Accounting Services SRL"
    },
    {
      "inizio": "0001-01-01",
      "fine": null,
      "idLegameStraordinari": 8,
      "descrizione": "Straordinari ",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 867,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "INTESA SANPAOLO S.P.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 9,
      "descrizione": "Straordinari GBS",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 1533,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "GENERALI BUSINESS SOLUTIONS S.C.p.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 10,
      "descrizione": "Consulenza Oracle Cloud (GDP)",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 1533,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "GENERALI BUSINESS SOLUTIONS S.C.p.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 11,
      "descrizione": "Accenture per evolutive GBS ",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 806,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "ACCENTURE S.P.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 13,
      "descrizione": "Macrocontratto GOSP",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 1532,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "GOSP - GENERALI OPERATIONS SERVICE PLATFORM S.R.L."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 15,
      "descrizione": "Straordinari Reactive",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 5521,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "REACTIVE SRL"
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 16,
      "descrizione": "Straordinari Banco BPM",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 1791,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "BANCO BPM S.P.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 17,
      "descrizione": "Straordinari Beta 80",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 2171,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "BETA 80 GROUP S.P.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 18,
      "descrizione": "Straordinari SKILL",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 3815,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "SKILL SRL"
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 20,
      "descrizione": "Straordinario",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 867,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "INTESA SANPAOLO S.P.A."
    },
    {
      "inizio": "2023-01-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 21,
      "descrizione": "Straordinari",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 1582,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "CAPGEMINI ITALIA S.P.A."
    },
    {
      "inizio": "2023-03-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 22,
      "descrizione": "straordinario",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 662,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "SCAI ITEC SRL"
    },
    {
      "inizio": "2023-04-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 24,
      "descrizione": "straordinario SCAI TECNO",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 775,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "SCAI TECNO S.P.A."
    },
    {
      "inizio": "2023-04-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 26,
      "descrizione": "Straordinari SOC",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 1523,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "SCAI SPA"
    },
    {
      "inizio": "2023-04-01",
      "fine": "2023-12-31",
      "idLegameStraordinari": 33,
      "descrizione": "Straordinario",
      "autorizzazioneCliente": 0,
      "idTerzeParti": 1948,
      "note": null,
      "attivo": true,
      "descrizioneTerzePArti": "SEVEN S.P.A."
    }
  ];

  constructor(
    // private straordinarioService: StraordinarioService
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    // this.refresh$
    //   .pipe(startWith(null))
    //   .subscribe(() =>
    //     this.straordinarioService
    //       .getStraordinariByIdCommessa$(this.idCommessa)
    //       .subscribe(straordinari => this.straordinari = straordinari)
    //   );
  }

  async create() {

    // const modalRef = this.modalService
    //   .open(
    //     StraordinarioCreazione,
    //     {
    //       size: 'lg',
    //       centered: true,
    //       scrollable: true
    //     }
    //   );
    // modalRef.componentInstance.idCommessa = this.idCommessa;

    // const result = await modalRef.result;
    // this.refresh$.next();
  }

  async delete(straordinario: any) { }
}
