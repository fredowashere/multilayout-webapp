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

  reperibilita: any[] = [
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2024-01-28T00:00:00",
      "idLegameReperibilita": 2,
      "descrizione": " reperibilità ricerca",
      "idSottocommessa": 2152,
      "descrizioneSottocommessa": "Area Tecnica - Ricerca e sperimentazione\r\n",
      "idcommessa": 27120,
      "descrizionecommessa": "Area Tecnica - Ricerca e sperimentazione\r\n",
      "descrizioneTerzaParte": "SCAI ITEC SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-06-30T00:00:00",
      "idLegameReperibilita": 7,
      "descrizione": "Reperibilità Afast ",
      "idSottocommessa": 49728,
      "descrizioneSottocommessa": "Consulenza informatica 2023_AB",
      "idcommessa": 49727,
      "descrizionecommessa": "Consulenza informatica 2023_AB",
      "descrizioneTerzaParte": "Accenture Finance and Accounting Services SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "0001-01-01T00:00:00",
      "fine": null,
      "idLegameReperibilita": 8,
      "descrizione": "test",
      "idSottocommessa": 47208,
      "descrizioneSottocommessa": "Modulo Rendicontazione",
      "idcommessa": 47207,
      "descrizionecommessa": "Modulo Rendicontazione",
      "descrizioneTerzaParte": "SCAI SPA",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "0001-01-01T00:00:00",
      "fine": null,
      "idLegameReperibilita": 9,
      "descrizione": "Reperibilità a gettone ",
      "idSottocommessa": 49859,
      "descrizioneSottocommessa": "Residui 2022 e Lavorato 2023 (gestione ambienti)",
      "idcommessa": 49858,
      "descrizionecommessa": "Residui 2022 e Lavorato 2023",
      "descrizioneTerzaParte": "INTESA SANPAOLO S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 10,
      "descrizione": "Reperibilità Intesa AM PNA - TAGETIK",
      "idSottocommessa": 49863,
      "descrizioneSottocommessa": "Residui 2022 e Lavorato 2023 AM PNA TAGETIK ",
      "idcommessa": 49862,
      "descrizionecommessa": "Residui 2022 e Lavorato 2023 AM PNA TAGETIK ",
      "descrizioneTerzaParte": "INTESA SANPAOLO S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 11,
      "descrizione": "Reperibilità Governance GBS",
      "idSottocommessa": 50668,
      "descrizioneSottocommessa": "SM Governance DB_2023",
      "idcommessa": 50667,
      "descrizionecommessa": "Governance Progetti",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 12,
      "descrizione": "Reperibilità Fast Data 2023",
      "idSottocommessa": 49770,
      "descrizioneSottocommessa": "Fast Data 2023",
      "idcommessa": 49769,
      "descrizionecommessa": "Fast Data 2023",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 13,
      "descrizione": "Reperibilità GBS Macrocontratto 2023",
      "idSottocommessa": 49776,
      "descrizioneSottocommessa": "GBS Macrocontratto 2023",
      "idcommessa": 49774,
      "descrizionecommessa": "GBS Macrocontratto 2023",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 14,
      "descrizione": "Reperibilibità (AM MAS reperibilità)",
      "idSottocommessa": 49884,
      "descrizioneSottocommessa": "SOLO Reperibilità MAS 2023",
      "idcommessa": 49519,
      "descrizionecommessa": "AM MAS reperibilità",
      "descrizioneTerzaParte": "NEXI PAYMENT S.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 16,
      "descrizione": "Reperibilità Accenture per evolutive GBS ",
      "idSottocommessa": 49857,
      "descrizioneSottocommessa": "Supporto Accenture GBS/Oracle 2023",
      "idcommessa": 49856,
      "descrizionecommessa": "Supporto Accenture GBS/Oracle 2023\n",
      "descrizioneTerzaParte": "ACCENTURE S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 17,
      "descrizione": "Reperibilità GOSP Macrocontratto ",
      "idSottocommessa": 49845,
      "descrizioneSottocommessa": "GOSP Macrocontratto 2023",
      "idcommessa": 49844,
      "descrizionecommessa": "GOSP Macrocontratto 2023",
      "descrizioneTerzaParte": "GOSP - GENERALI OPERATIONS SERVICE PLATFORM S.R.L.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 18,
      "descrizione": "Reperibilità Servizio Scheduling & Monitoring 2023",
      "idSottocommessa": 49853,
      "descrizioneSottocommessa": "Servizio Scheduling & Monitoring 2023",
      "idcommessa": 49852,
      "descrizionecommessa": "Servizio Scheduling & Monitoring 2023",
      "descrizioneTerzaParte": "ACCENTURE S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 19,
      "descrizione": "Reperibilità ISP Price ",
      "idSottocommessa": 50884,
      "descrizioneSottocommessa": "Service Reperibilità ISP Price_2023",
      "idcommessa": 49282,
      "descrizionecommessa": "Service Reperibilità ISP Price",
      "descrizioneTerzaParte": "REACTIVE SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 20,
      "descrizione": "reperibilità CP",
      "idSottocommessa": 49822,
      "descrizioneSottocommessa": "Attività CP Almaviva 2023",
      "idcommessa": 49821,
      "descrizionecommessa": "Attività CP Almaviva 2023",
      "descrizioneTerzaParte": "REACTIVE SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 21,
      "descrizione": "Reperibilità Sasp Evo e Funz 2023 ",
      "idSottocommessa": 49768,
      "descrizioneSottocommessa": "Sasp Evo e Funz 2023",
      "idcommessa": 49767,
      "descrizionecommessa": "Sasp Evo e Funz 2023",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 22,
      "descrizione": "Reperibilità estensione servizio Big Data Hadoop",
      "idSottocommessa": 49749,
      "descrizioneSottocommessa": "Estensione Servizio Supporto Sistemistico Big Data Hadoop",
      "idcommessa": 49748,
      "descrizionecommessa": "Estensione Servizio Supporto Sistemistico Big Data Hadoop",
      "descrizioneTerzaParte": "BANCO BPM S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 23,
      "descrizione": "Reperibilità ",
      "idSottocommessa": 50581,
      "descrizioneSottocommessa": "Supporto DB – Piattaforma CUS 2021-2022",
      "idcommessa": 50580,
      "descrizionecommessa": "Supporto DB – Piattaforma CUS 2021-2022",
      "descrizioneTerzaParte": "BETA 80 GROUP S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 24,
      "descrizione": "Reperibilità ",
      "idSottocommessa": 50518,
      "descrizioneSottocommessa": "SM Governance DB_2023",
      "idcommessa": 50517,
      "descrizionecommessa": "SM Governance DB_2023\n",
      "descrizioneTerzaParte": "ACCENTURE S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 25,
      "descrizione": "Reperibilità Riserva VideoComm 2023 (Riserva VideoComm 2023)",
      "idSottocommessa": 50594,
      "descrizioneSottocommessa": "Riserva VideoComm 2023",
      "idcommessa": 50593,
      "descrizionecommessa": "Riserva VideoComm 2023",
      "descrizioneTerzaParte": "GOSP - GENERALI OPERATIONS SERVICE PLATFORM S.R.L.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 26,
      "descrizione": "Reperibilità OGM ",
      "idSottocommessa": 49760,
      "descrizioneSottocommessa": "OGM Correttiva/Funzionamento 2023",
      "idcommessa": 49759,
      "descrizionecommessa": "OGM Correttiva/Funzionamento 2023",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 27,
      "descrizione": "Reperibilità OGM Evolutiva",
      "idSottocommessa": 49763,
      "descrizioneSottocommessa": "OGM Evolutiva 2023",
      "idcommessa": 49761,
      "descrizionecommessa": "OGM Evolutiva 2023",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 28,
      "descrizione": "Reperibilità Fast Data 2023 (Fast Data 2023)",
      "idSottocommessa": 49770,
      "descrizioneSottocommessa": "Fast Data 2023",
      "idcommessa": 49769,
      "descrizionecommessa": "Fast Data 2023",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 29,
      "descrizione": "Reperibilità Platform Team DB Open Oracle Cloud (Platform Team DB Open Oracle Cloud)",
      "idSottocommessa": 49772,
      "descrizioneSottocommessa": "Platform Team DB Open Oracle Cloud",
      "idcommessa": 49771,
      "descrizionecommessa": "Platform Team DB Open Oracle Cloud",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 30,
      "descrizione": "Reperibilità  Accmc23_000002   ",
      "idSottocommessa": 49857,
      "descrizioneSottocommessa": "Supporto Accenture GBS/Oracle 2023",
      "idcommessa": 49856,
      "descrizionecommessa": "Supporto Accenture GBS/Oracle 2023\n",
      "descrizioneTerzaParte": "ACCENTURE S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 31,
      "descrizione": "Reperibilità",
      "idSottocommessa": 49772,
      "descrizioneSottocommessa": "Platform Team DB Open Oracle Cloud",
      "idcommessa": 49771,
      "descrizionecommessa": "Platform Team DB Open Oracle Cloud",
      "descrizioneTerzaParte": "GENERALI BUSINESS SOLUTIONS S.C.p.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 32,
      "descrizione": "Reperibilità",
      "idSottocommessa": 50627,
      "descrizioneSottocommessa": "INTESA, Supporto all’ottimizzazione gestione incident",
      "idcommessa": 50626,
      "descrizionecommessa": "INTESA, Project Management, Supporto all’ottimizzazione e gestione",
      "descrizioneTerzaParte": "INTESA SANPAOLO S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-02-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 33,
      "descrizione": "reperibilità",
      "idSottocommessa": 50656,
      "descrizioneSottocommessa": "INTESA, Consulenza Oracle migrazione e manutenzione",
      "idcommessa": 50655,
      "descrizionecommessa": "INTESA, Consulenza Oracle migrazione e manutenzione",
      "descrizioneTerzaParte": "INTESA SANPAOLO S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-01-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 34,
      "descrizione": "reperibilità",
      "idSottocommessa": 49718,
      "descrizioneSottocommessa": "Consulenza informatica 2023",
      "idcommessa": 49717,
      "descrizionecommessa": "Consulenza informatica 2023",
      "descrizioneTerzaParte": "CAPGEMINI ITALIA S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-03-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 35,
      "descrizione": "Reperibilità",
      "idSottocommessa": 49826,
      "descrizioneSottocommessa": "Attività FA Almaviva 2023",
      "idcommessa": 49824,
      "descrizionecommessa": "Attività Almaviva 2023",
      "descrizioneTerzaParte": "REACTIVE SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-03-01T00:00:00",
      "fine": "2023-04-02T00:00:00",
      "idLegameReperibilita": 36,
      "descrizione": "reperibiltà",
      "idSottocommessa": 49808,
      "descrizioneSottocommessa": "Attività MC Almaviva 2023",
      "idcommessa": 49807,
      "descrizionecommessa": "Attività MC Almaviva 2023",
      "descrizioneTerzaParte": "REACTIVE SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-04-01T00:00:00",
      "fine": "2023-12-31T00:00:00",
      "idLegameReperibilita": 38,
      "descrizione": "Reperibilità Scai Tecno",
      "idSottocommessa": 52085,
      "descrizioneSottocommessa": "Service e Consulenza in ambito DB",
      "idcommessa": 52084,
      "descrizionecommessa": "Service e Consulenza in ambito DB\n",
      "descrizioneTerzaParte": "SCAI TECNO S.P.A.",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-05-01T00:00:00",
      "fine": "2023-05-03T00:00:00",
      "idLegameReperibilita": 41,
      "descrizione": "AAA",
      "idSottocommessa": 4108,
      "descrizioneSottocommessa": "Direzione\r\n",
      "idcommessa": 28443,
      "descrizionecommessa": "Direzione\r\n",
      "descrizioneTerzaParte": "SCAI ITEC SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-05-01T00:00:00",
      "fine": "2023-05-03T00:00:00",
      "idLegameReperibilita": 42,
      "descrizione": "AAA",
      "idSottocommessa": 4108,
      "descrizioneSottocommessa": "Direzione\r\n",
      "idcommessa": 28443,
      "descrizionecommessa": "Direzione\r\n",
      "descrizioneTerzaParte": "SCAI ITEC SRL",
      "reperibilitaSenzaAvviso": 0,
      "note": null,
      "attivo": true
    },
    {
      "inizio": "2023-04-01T00:00:00",
      "fine": "2023-05-31T00:00:00",
      "idLegameReperibilita": 43,
      "descrizione": "sabato",
      "idSottocommessa": 52214,
      "descrizioneSottocommessa": "Consulenza informatica Q2 2023 AD",
      "idcommessa": 52193,
      "descrizionecommessa": "Consulenza informatica Q2 2023",
      "descrizioneTerzaParte": "CAPGEMINI ITALIA S.P.A.",
      "reperibilitaSenzaAvviso": 1,
      "note": null,
      "attivo": true
    }
  ];

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

  async delete(reperibilita: any) { }
}
