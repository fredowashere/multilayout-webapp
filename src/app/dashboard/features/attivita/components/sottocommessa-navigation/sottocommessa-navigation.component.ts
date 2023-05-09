import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommessaDto } from '../../models/commessa';
import { SottocommessaService } from '../../services/sottocommessa.service';
import { MiscDataService } from '../../services/miscData.service';
import { TaskService } from '../../services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast.service';
import { SottocommessaCreazioneModifica } from '../../dialogs/sottocommessa-creazione-modifica/sottocommessa-creazione-modifica.component';
import { UtentiAnagrafica } from 'src/app/api/modulo-attivita/models';

@Component({
  selector: 'app-sottocommessa-navigation',
  templateUrl: './sottocommessa-navigation.component.html',
  styleUrls: ['./sottocommessa-navigation.component.css']
})
export class SottocommessaNavigationComponent {

  @Input("idCommessa") idCommessa!: number;
  @Input("idSottocommessa") idSottocommessa!: number;
  @Output("sottocommessaUpdate") sottocommessaUpdateEmitter = new EventEmitter<CommessaDto>();
  sottocommessa?: CommessaDto;

  pm?: UtentiAnagrafica;

  activeTabId?: number;

  constructor(
    private sottocommessaService: SottocommessaService,
    private miscDataService: MiscDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.sottocommessaService
      .getSottocommessaById$(this.idSottocommessa)
      .subscribe(sottocommessa => {
        this.sottocommessa = sottocommessa;
        this.pm = this.miscDataService.idUtenteUtente[sottocommessa?.idProjectManager];
      });
  }

  async updateSottocommessa() {

		const modalRef = this.modalService
		  .open(
        SottocommessaCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
		  );
		modalRef.componentInstance.idCommessa = this.idCommessa;
		modalRef.componentInstance.idSottocommessa = this.idSottocommessa;
	
		await modalRef.result;

		this.sottocommessaService
			.getSottocommessaById$(this.idSottocommessa)
			.subscribe(sottocommessa => {
				this.sottocommessa = sottocommessa;
        this.pm = this.miscDataService.idUtenteUtente[sottocommessa?.idProjectManager];
        this.sottocommessaUpdateEmitter.emit(sottocommessa);
			});
	}

}
