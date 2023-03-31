import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest } from 'rxjs';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { AttivitaCreazioneModifica } from '../../dialogs/attivita-creazione-modifica/attivita-creazione-modifica.component';
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

  	@Input("idCommessaPadre") idCommessaPadre!: number;
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
			this.commessaService.getCommessaById(this.idCommessaPadre),
			this.offertaService.getOffertaByIdCommessaPadre$(this.idCommessaPadre),
			this.sottocommessaService.checkExistingSottoCommesseByIdPadre$(this.idCommessaPadre)
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
			AttivitaCreazioneModifica,
			{
			  size: 'lg',
			  centered: true,
			  scrollable: true
			}
		  );
		modalRef.componentInstance.idCommessaPadre = this.idCommessaPadre;
	
		await modalRef.result;

		this.commessaService
			.getCommessaById(this.idCommessaPadre)
			.subscribe(commessa => {
				this.commessa = commessa;
				this.clienteDiretto = this.miscDataService.idClienteCliente[commessa?.idCliente];
				this.clienteFinale = this.miscDataService.idClienteCliente[commessa?.idClienteFinale];
				this.pm = this.miscDataService.idUtenteUtente[commessa?.idProjectManager];
				this.bm = this.miscDataService.idUtenteUtente[commessa?.idBusinessManager];
			});
	}

}
