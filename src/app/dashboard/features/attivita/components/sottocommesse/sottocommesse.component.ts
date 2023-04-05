import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delayedScrollTo } from 'src/app/utils/dom';
import { SottocommessaCreazioneModifica } from '../../dialogs/sottocommessa-creazione-modifica/sottocommessa-creazione-modifica.component';
import { CommessaDto } from '../../models/commessa';
import { SottocommessaService } from '../../services/sottocommessa.service';

interface Tab {
  id: number;
  codiceCommessa: string;
}

@Component({
  selector: 'app-sottocommesse',
  templateUrl: './sottocommesse.component.html',
  styleUrls: ['./sottocommesse.component.css']
})
export class SottocommesseComponent {

  @Input("idCommessa") idCommessa!: number;

  activeTabId!: number;
  tabs: Tab[] = [];

  sottocommesse: CommessaDto[] = [];

  constructor(
    private sottocommessaService: SottocommessaService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {

    this.sottocommessaService
      .getSottocommesseByIdCommessa$(this.idCommessa)
      .subscribe(sottocommesse => this.sottocommesse = sottocommesse);
  }

  addTab(id: number, codiceCommessa: string) {

    const tabAlreadyExist = this.tabs.find(t => t.id === id);
    if (tabAlreadyExist) {
      this.activeTabId = id;
      delayedScrollTo("#sottocommessa-" + id);
      return;
    }

    this.activeTabId = id;

    this.tabs.push({
      id,
      codiceCommessa
    });

    delayedScrollTo("#sottocommessa-" + id);
  }

  closeTab(toRemove: number, evt?: MouseEvent) {

    // Open the tab to the left
    const tabToRemoveIndex = this.tabs.findIndex(tab => tab.id === toRemove);
    if (this.activeTabId === toRemove)
      if (tabToRemoveIndex === 0)
        this.activeTabId = this.tabs[tabToRemoveIndex + 1]?.id; // right
      else
        this.activeTabId = this.tabs[tabToRemoveIndex - 1]?.id; // left

    // Remove tab from the array
		this.tabs = this.tabs.filter((tab) => tab.id !== toRemove);

    if (evt) {
      evt.preventDefault();
      evt.stopImmediatePropagation();
    }
	}

  async create() {

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

    const result = await modalRef.result;
    this.addTab(result.idSottocommessa, result.codiceCommessa);
    // this.refresh$.next();
  }

  async update(sottocommessa: CommessaDto) {

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
    modalRef.componentInstance.idSottocommessa = sottocommessa.id;

    await modalRef.result;
    // this.refresh$.next();
  }

  async delete(sottocommessa: CommessaDto) {

    // const modalRef = this.modalService
    //   .open(
    //     EliminazioneDialog,
    //     {
    //       size: 'md',
    //       centered: true,
    //       scrollable: true
    //     }
    //   );
    // modalRef.componentInstance.name = commessa.codiceCommessa;
    // modalRef.componentInstance.message = "Stai eliminando definitivamente una commessa interna."

    // await modalRef.result;

    // this.commessaService
    //   .deleteCommessaInterna$(commessa.id)
    //   .subscribe(
    //     () => {

    //       const txt = "Commessa interna eliminata con successo!";
    //       this.toaster.show(txt, { classname: 'bg-success text-white' });

    //       this.closeTab(commessa.id);

    //       this.refresh$.next();
    //     },
    //     (ex) => {
    //       this.toaster.show(ex.error, { classname: 'bg-danger text-white' });
    //     }
    //   );
  }
}
