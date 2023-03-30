import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttivitaCreazioneModifica } from '../../dialogs/attivita-creazione-modifica/attivita-creazione-modifica.component';
import { CommessaDto, CommessaSearchDto } from '../../models/commessa';
import { Offerta } from '../../models/offerta';
import { CommessaService } from '../../services/commessa.service';
import { OffertaService } from '../../services/offerta.service';
import { SottocommessaService } from '../../services/sottocommessa.service';

@Component({
  selector: 'app-attivita-navigation',
  templateUrl: './attivita-navigation.component.html',
  styleUrls: ['./attivita-navigation.component.css']
})
export class AttivitaNavigationComponent {

  	@Input("commessa") commessa!: CommessaSearchDto;
	commessaDetail: CommessaDto | null = null;

  	activeTabId: number | null = null;
	offerta: Offerta | null = null;
	hasSottocommesse = false;

	constructor(
		private commessaService: CommessaService,
		private offertaService: OffertaService,
		private sottocommessaService: SottocommessaService,
		private modalService: NgbModal
	) { }

	ngOnInit() {

		this.commessaService
			.getCommessaById(this.commessa.id)
			.subscribe(commessa => this.commessaDetail = commessa);

		this.offertaService
			.getOffertaByIdCommessaPadre$(this.commessa.id)
			.subscribe(offerta => {

				if (this.commessa.tipoAttivita.id === 2)
					this.activeTabId = 3;
				else if (!offerta.dataAccettazione)
					this.activeTabId = 2;
				else
					this.activeTabId = 3;

				this.offerta = offerta;
			});

		this.sottocommessaService
			.checkExistingSottoCommesseByIdPadre$(this.commessa.id)
			.subscribe(hasSottocommesse =>
				this.hasSottocommesse = hasSottocommesse
			);
	}

	async update() {

		const modalRef = this.modalService
		  .open(
			AttivitaCreazioneModifica,
			{
			  size: 'lg',
			  centered: true,
			  scrollable: true,
			  modalDialogClass: 'app-tall-dialog'
			}
		  );
		modalRef.componentInstance.idCommessaPadre = this.commessa.id;
	
		await modalRef.result;

		this.commessaService
			.getCommessaById(this.commessa.id)
			.subscribe(commessa => this.commessaDetail = commessa);
	  }

}
