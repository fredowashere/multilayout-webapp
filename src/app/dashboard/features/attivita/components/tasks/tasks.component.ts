import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtentiAnagrafica } from 'src/app/api/modulo-attivita/models';
import { delayedScrollTo } from 'src/app/utils/dom';
import { SottocommessaCreazioneModifica } from '../../dialogs/sottocommessa-creazione-modifica/sottocommessa-creazione-modifica.component';
import { CommessaDto } from '../../models/commessa';
import { TaskDto } from '../../models/task';
import { MiscDataService } from '../../services/miscData.service';
import { SottocommessaService } from '../../services/sottocommessa.service';
import { TaskService } from '../../services/task.service';
import { EliminazioneDialog } from '../../dialogs/eliminazione.dialog';
import { ToastService } from 'src/app/services/toast.service';
import { Subject, startWith, switchMap } from 'rxjs';
import { TaskCreazioneModifica } from '../../dialogs/task-creazione-modifica/task-creazione-modifica.component';

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

  refresh$ = new Subject<void>();

	pm?: UtentiAnagrafica;

  activeTabId!: number;
  tabs: Tab[] = [];

  tasks: TaskDto[] = [];

  constructor(
    private sottocommessaService: SottocommessaService,
    private miscDataService: MiscDataService,
    private taskService: TaskService,
    private modalService: NgbModal,
    private toaster: ToastService
  ) {}

  ngOnInit() {

    this.sottocommessaService
      .getSottocommessaById$(this.idSottocommessa)
      .subscribe(sottocommessa => {
        this.sottocommessa = sottocommessa;
        this.pm = this.miscDataService.idUtenteUtente[sottocommessa?.idProjectManager];
      });

      this.refresh$
        .pipe(
          startWith(null),
          switchMap(() =>
            this.taskService
              .getTasksByIdSottocommessa$(this.idSottocommessa)
          )
        )
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

  async create() {

    const modalRef = this.modalService
      .open(
        TaskCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idCommessa = this.idCommessa;
    modalRef.componentInstance.idSottocommessa = this.idSottocommessa;

    const result = await modalRef.result;
    this.addTab(result.idTask, result.codiceTask);
    this.refresh$.next();
  }

  async update(task: TaskDto) {

    const modalRef = this.modalService
      .open(
        TaskCreazioneModifica,
        {
          size: 'lg',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.idCommessa = this.idCommessa;
    modalRef.componentInstance.idSottocommessa = this.idSottocommessa;
    modalRef.componentInstance.idTask = task.id;

    await modalRef.result;
    this.refresh$.next();
  }

  async delete(task: TaskDto) {

    const modalRef = this.modalService
      .open(
        EliminazioneDialog,
        {
          size: 'md',
          centered: true,
          scrollable: true
        }
      );
    modalRef.componentInstance.name = task.codiceTask;
    modalRef.componentInstance.message = "Stai eliminando definitivamente un task."

    await modalRef.result;

    this.taskService
      .deleteTask$(task.id)
      .subscribe(
        () => {

          const txt = "Task eliminato con successo!";
          this.toaster.show(txt, { classname: 'bg-success text-white' });

          this.closeTab(task.id);

          this.refresh$.next();
        },
        (ex) => {
          this.toaster.show(ex.error, { classname: 'bg-danger text-white' });
        }
      );
  }
}
