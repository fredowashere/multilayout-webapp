import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/services/toast.service";
import { DIALOG_MODE } from "../../models/dialog";
import { TaskService } from "../../services/task.service";
import { CreateTaskParam, TaskDto } from "../../models/task";
import { jsonCopy } from "src/app/utils/json";

@Component({
	selector: 'app-task-creazione-modifica-dialog',
	templateUrl: './task-creazione-modifica.component.html',
    styleUrls: ['./task-creazione-modifica.component.css']
})
export class TaskCreazioneModifica {

    @Input("idCommessa") idCommessa!: number;
    @Input("idSottocommessa") idSottocommessa!: number;
    @Input("idTask") idTask!: number;
    task?: TaskDto;

    DIALOG_MODE = DIALOG_MODE;
    dialogMode!: DIALOG_MODE;
    isLoading = false;

    form!: FormGroup;

    codiceTaskCtrl = new FormControl<string | null>(null, [Validators.required]);
    giorniPrevistiCtrl = new FormControl<number>(0, [Validators.required]);
    descrizioneCtrl = new FormControl<string | null>(null, [Validators.required]);
    dataInizioCtrl = new FormControl<string | null>(null, [Validators.required]);
    dataFineCtrl = new FormControl<string | null>(null, [Validators.required]);
    attivitaObbligatoriaCtrl = new FormControl<boolean>(false);

	constructor(
        public activeModal: NgbActiveModal,
        private toaster: ToastService,
        private taskService: TaskService
    ) { }

    ngOnInit() {

        this.isLoading = true;

        this.dialogMode = this.idTask
            ? DIALOG_MODE.Update
            : DIALOG_MODE.Create;

        if (this.dialogMode === DIALOG_MODE.Update) {

            this.taskService.getTaskById$(this.idTask)
                .subscribe(async task => {
                    this.task = task;
                    this.initCtrlValues();
                    this.isLoading = false;
                });
        }
        else {
            this.isLoading = false;
        }

        this.form = new FormGroup({
            codiceTask: this.codiceTaskCtrl,
            descrizione: this.descrizioneCtrl,
            dataInizio: this.dataInizioCtrl,
            dataFine: this.dataFineCtrl,
            giorniPrevisti: this.giorniPrevistiCtrl,
            attivitaObbligatoria: this.attivitaObbligatoriaCtrl
        });
    }

    initCtrlValues() {

        // esempio di task {
        //     "attivitaObbligatoria": false,
        //     "codiceTask": "ProProPro",
        //     "dataFine": "2015-06-30",
        //     "dataInizio": "2014-01-01",
        //     "descrizione": "PD_ASIA_001_Attività ordinaria",
        //     "giorniPrevisti": 0.0
        //     "id": 4534,
        //     "idCommessa": 2192,
        //     "idTerzaParte": 740,
        //     "percentualeAvanzamento": 0,
        //     "stimaGiorniAFinire": 0,
        //     "visualizzataInRapportini": false,
        // }

        if (this.dialogMode === DIALOG_MODE.Update) {

            if (!this.task) return;

            this.codiceTaskCtrl.setValue(this.task.codiceTask);
            this.giorniPrevistiCtrl.setValue(this.task.giorniPrevisti);
            this.descrizioneCtrl.setValue(this.task.descrizione);
            this.dataFineCtrl.setValue(this.task.dataFine);
            this.dataInizioCtrl.setValue(this.task.dataInizio);
            this.attivitaObbligatoriaCtrl.setValue(this.task.attivitaObbligatoria);
        }
    }

    save() {
        if (this.dialogMode === DIALOG_MODE.Create)
            this.create();
        else
            this.update();
    }

    create() {

        // esempio di payload {
        //     "attivitaObbligatoria": false,
        //     "codiceTask": "Askabandilibulidili",
        //     "dataFine": "2023-04-14",
        //     "dataInizio": "2023-04-14",
        //     "descrizione": "Questo è un task di potenza esemplare",
        //     "giorniPrevisti": 1000,
        //     "idCommessa": 2192,
        //     "percentualeAvanzamento": 100,
        //     "stimaGiorniAFinire": 10000
        //     "visualizzataInRapportini": true,
        // }

        if (this.form.invalid) return;

        const createObj: CreateTaskParam = {
            attivitaObbligatoria: this.attivitaObbligatoriaCtrl.value as boolean,
            codiceTask: this.codiceTaskCtrl.value as string,
            dataFine: this.dataFineCtrl.value as string,
            dataInizio: this.dataInizioCtrl.value as string,
            descrizione: this.descrizioneCtrl.value as string,
            giorniPrevisti: this.giorniPrevistiCtrl.value as number,
            idCommessa: this.idSottocommessa,
            percentualeAvanzamento: 0,
            stimaGiorniAFinire: 0,
            visualizzataInRapportini: true,
        };

        this.taskService
            .createTask$(createObj)
            .subscribe(
                (idTask) => {

                    const txt = "Task creato con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });

                    // Close the modal with the id from the result to open the tab automatically
                    this.activeModal
                        .close({
                            dialogMode: this.dialogMode,
                            idTask,
                            codiceTask: this.codiceTaskCtrl.value
                        });
                },
                () => {
                    const txt = "Non è stato possibile creare il Task. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }

    update() {

        // esempio di payload {
        //     "attivitaObbligatoria": false,
        //     "codiceTask": "ProProPro",
        //     "dataFine": "2015-06-30",
        //     "dataInizio": "2014-01-01",
        //     "descrizione": "PD_ASIA_001_Attività ordinaria",
        //     "giorniPrevisti": 0,
        //     "id": 4534,
        //     "idCommessa": 2192,
        //     "idTerzaParte": 740
        //     "percentualeAvanzamento": 0,
        //     "stimaGiorniAFinire": 0,
        //     "visualizzataInRapportini": false,
        // }

        if (!this.task || this.form.invalid) return;

        const copyOfTask: TaskDto = jsonCopy(this.task);

        copyOfTask.attivitaObbligatoria = this.attivitaObbligatoriaCtrl.value as boolean;
        copyOfTask.codiceTask = this.codiceTaskCtrl.value as string;
        copyOfTask.dataFine = this.dataFineCtrl.value as string;
        copyOfTask.dataInizio = this.dataInizioCtrl.value as string;
        copyOfTask.descrizione = this.descrizioneCtrl.value as string;
        copyOfTask.giorniPrevisti = this.giorniPrevistiCtrl.value as number;

        this.taskService
            .updateTask$(this.idTask, copyOfTask)
            .subscribe(
                () => {
                    const txt = "Task modificato con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close({
                        dialogMode: this.dialogMode,
                        item: copyOfTask
                    });
                },
                () => {
                    const txt = "Non è stato possibile modificare il Task. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }
}