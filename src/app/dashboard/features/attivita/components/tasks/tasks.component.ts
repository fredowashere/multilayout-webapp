import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dettaglio, UtentiAnagrafica } from 'src/app/api/stato-avanzamento/models';
import { delayedScrollTo } from 'src/app/utils/dom';
import { SottocommessaCreazioneModifica } from '../../dialogs/sottocommessa-creazione-modifica/sottocommessa-creazione-modifica.component';
import { CommessaDto } from '../../models/commessa';
import { TaskDto } from '../../models/task';
import { MiscDataService } from '../../services/miscData.service';
import { SottocommessaService } from '../../services/sottocommessa.service';
import { TaskService } from '../../services/task.service';

interface Tab {
  id: number;
  codiceTask: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input("idCommessa") idCommessa!: number;
  @Input("idSottocommessa") idSottocommessa!: number;
  @Output("sottocommessaUpdate") sottocommessaUpdateEmitter = new EventEmitter<CommessaDto>();
  sottocommessa?: CommessaDto;

	pm?: UtentiAnagrafica;

  activeTabId!: number;
  tabs: Tab[] = [];

  tasks: TaskDto[] = [];

  constructor(
    private sottocommessaService: SottocommessaService,
    private miscDataService: MiscDataService,
    private taskService: TaskService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {

    this.sottocommessaService
      .getSottocommessaById$(this.idSottocommessa)
      .subscribe(sottocommessa => {
        this.sottocommessa = sottocommessa;
        this.pm = this.miscDataService.idUtenteUtente[sottocommessa?.idProjectManager];
      });

    this.taskService
      .getTasksByIdSottocommessa$(this.idSottocommessa)
      .subscribe(tasks => this.tasks = tasks);
  }

  addTab(id: number, codiceTask: string) {

    const tabAlreadyExist = this.tabs.find(t => t.id === id);
    if (tabAlreadyExist) {
      this.activeTabId = id;
      delayedScrollTo("#task-" + id);
      return;
    }

    this.activeTabId = id;

    this.tabs.push({
      id,
      codiceTask
    });

    delayedScrollTo("#task-" + id);
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

  create() {}

  update(item?: any) {}

  delete(item: any) {}
}
