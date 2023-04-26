import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest } from 'rxjs';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/modulo-attivita/models';
import { CommessaCreazioneModifica } from '../../dialogs/commessa-creazione-modifica/commessa-creazione-modifica.component';
import { CommessaDto } from '../../models/commessa';
import { Offerta } from '../../models/offerta';
import { CommessaService } from '../../services/commessa.service';
import { OffertaService } from '../../services/offerta.service';
import { SottocommessaService } from '../../services/sottocommessa.service';
import { MiscDataService } from '../../services/miscData.service';

@Component({
  selector: 'app-attivita-navigation',
  templateUrl: './attivita-navigation.component.html',
  styleUrls: ['./attivita-navigation.component.css']
})
export class AttivitaNavigationComponent {

  	@Input("idCommessa") idCommessa!: number;
	@Output("commessaUpdate") commessaUpdateEmitter = new EventEmitter<CommessaDto>();
	commessa?: CommessaDto;

  	activeTabId?: number;
	offerta?: Offerta;
	hasSottocommesse = false;

	clienteDiretto?: Dettaglio;
	clienteFinale?: Dettaglio;

	pm?: UtentiAnagrafica;
	bm?: UtentiAnagrafica;

	constructor(
		private miscDataService: MiscDataService,
		private commessaService: CommessaService,
		private offertaService: OffertaService,
		private sottocommessaService: SottocommessaService,
		private modalService: NgbModal
	) { }

	ngOnInit() {

		combineLatest([
			this.commessaService.getCommessaById(this.idCommessa),
			this.offertaService.getOffertaByIdCommessa$(this.idCommessa),
			this.sottocommessaService.checkExistingSottocommesseByIdCommessa$(this.idCommessa)
		])
		.subscribe(([commessa, offerta, hasSottocommesse]) => {

			this.commessa = commessa;

			this.clienteDiretto = this.miscDataService.idClienteCliente[commessa?.idCliente];
			this.clienteFinale = this.miscDataService.idClienteCliente[commessa?.idClienteFinale];
			
			this.pm = this.miscDataService.idUtenteUtente[commessa?.idProjectManager];
			this.bm = this.miscDataService.idUtenteUtente[commessa?.idBusinessManager];
			
			this.offerta = offerta;

			this.hasSottocommesse = hasSottocommesse;

			if (this.commessa.tipoAttivita.id === 2)
				this.activeTabId = 3;
			else if (!offerta.dataAccettazione)
				this.activeTabId = 2;
			else
				this.activeTabId = 3;
		});
	}

	async update() {

		const modalRef = this.modalService
		  .open(
			CommessaCreazioneModifica,
			{
			  size: 'lg',
			  centered: true,
			  scrollable: true
			}
		  );
		modalRef.componentInstance.idCommessa = this.idCommessa;
	
		await modalRef.result;

		this.commessaService
			.getCommessaById(this.idCommessa)
			.subscribe(commessa => {

				this.commessa = commessa;

				this.clienteDiretto = this.miscDataService.idClienteCliente[commessa?.idCliente];
				this.clienteFinale = this.miscDataService.idClienteCliente[commessa?.idClienteFinale];

				this.pm = this.miscDataService.idUtenteUtente[commessa?.idProjectManager];
				this.bm = this.miscDataService.idUtenteUtente[commessa?.idBusinessManager];

				this.commessaUpdateEmitter.emit(commessa);
			});
	}

	onOffertaUpsert(offerta: Offerta) {

		const prevDataAccettazione = this.offerta?.dataAccettazione;

		this.offerta = offerta;

		// If there was no data accettazione previously but now there is, then navigate to sottocommesse
		if (!prevDataAccettazione && offerta.dataAccettazione)
			setTimeout(() => this.activeTabId = 3, 200);
	}

}
