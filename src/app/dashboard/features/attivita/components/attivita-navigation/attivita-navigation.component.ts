import { Component, Input } from '@angular/core';
import { CommessaSearchDto } from '../../models/commessa';
import { Offerta } from '../../models/offerta';
import { OffertaService } from '../../services/offerta.service';
import { SottocommessaService } from '../../services/sottocommessa.service';

@Component({
  selector: 'app-attivita-navigation',
  templateUrl: './attivita-navigation.component.html',
  styleUrls: ['./attivita-navigation.component.css']
})
export class AttivitaNavigationComponent {

  	@Input("commessa") commessa!: CommessaSearchDto;

  	activeTabId: number | null = null;
	offerta: Offerta | null = null;
	hasSottocommesse = false;

	constructor(
		private offertaService: OffertaService,
		private sottocommessaService: SottocommessaService
	) { }

	ngOnInit() {

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

}
