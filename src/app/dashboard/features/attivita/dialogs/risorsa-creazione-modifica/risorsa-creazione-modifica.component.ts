import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { catchError, combineLatest, of } from 'rxjs';
import { ToastService } from "src/app/services/toast.service";
import { DIALOG_MODE } from "../../models/dialog";
import { TaskService } from "../../services/task.service";
import { TaskDto } from "../../models/task";
import { UtentiAnagrafica } from "src/app/api/modulo-attivita/models";
import { MiscDataService } from "../../services/miscData.service";
import { RisorsaTaskWrap, UpsertLegameParam } from "../../models/risorsa";
import { RisorsaService } from "../../services/risorsa.service";
import { dedupe } from "src/app/utils/array";

@Component({
	selector: 'app-risorsa-creazione-modifica-dialog',
	templateUrl: './risorsa-creazione-modifica.component.html',
    styleUrls: ['./risorsa-creazione-modifica.component.css']
})
export class RisorsaCreazioneModifica {

    @Input("idCommessa") idCommessa!: number;
    @Input("idSottocommessa") idSottocommessa!: number;
    @Input("idTask") idTask!: number;
    @Input("idLegame") idLegame!: number;
    task?: TaskDto;
    legame?: RisorsaTaskWrap;

    DIALOG_MODE = DIALOG_MODE;
    dialogMode!: DIALOG_MODE;
    isLoading = false;

    form!: FormGroup;

    utentiCtrl = new FormControl<UtentiAnagrafica[] | null>(null, [Validators.required]);
    utenti: UtentiAnagrafica[] = [];
    utenteFormatter = (u: UtentiAnagrafica) => u.cognome + ' ' + u.nome;
    utenteFilter = (term: string, u: UtentiAnagrafica) =>
        (u.cognome + ' ' + u.nome).toLowerCase().includes(term.toLowerCase());

    dataInizioCtrl = new FormControl<string | null>(null, [Validators.required]);
    dataFineCtrl = new FormControl<string | null>(null, [Validators.required]);

	constructor(
        public activeModal: NgbActiveModal,
        private toaster: ToastService,
        private risorsaService: RisorsaService,
        private taskService: TaskService,
        private miscData: MiscDataService
    ) { }

    ngOnInit() {

        this.isLoading = true;

        this.dialogMode = this.idLegame
            ? DIALOG_MODE.Update
            : DIALOG_MODE.Create;

        this.utenti = this.miscData.utenti;

        if (this.dialogMode === DIALOG_MODE.Update) {
            combineLatest([
                this.taskService.getTaskById$(this.idTask),
                this.risorsaService.getLegameById$(this.idLegame)
            ])
            .subscribe(([ task, legame ]) => {
                this.legame = legame;
                this.task = task;
                this.initCtrlValues();
                this.isLoading = false;
            });
        }
        else {
            this.taskService
                .getTaskById$(this.idTask)
                .subscribe(task => {
                    this.task = task;
                    this.initCtrlValues();
                    this.isLoading = false;
                });
        }

        this.form = new FormGroup({
            utente: this.utentiCtrl,
            dataInizio: this.dataInizioCtrl,
            dataFine: this.dataFineCtrl
        });
    }

    initCtrlValues() {

        // esempio legame {
        //     "allocazione": null,
        //     "fineAllocazione": null,
        //     "id": 43927,
        //     "idAzienda": 9
        //     "idTask": 4541,
        //     "idUtente": 217,
        //     "inizioAllocazione": null,
        // }

        if (this.dialogMode === DIALOG_MODE.Update) {
            
            if (!this.legame) return;

            this.utentiCtrl.setValue([this.legame.utente]);
            this.dataInizioCtrl.setValue(this.legame.inizioAllocazione && this.legame.inizioAllocazione.slice(0, 10));
            this.dataFineCtrl.setValue(this.legame.fineAllocazione && this.legame.fineAllocazione.slice(0, 10));
        }
    }

    dataInizioCtrlMin() {

        const inception = "1970-01-01";

        if (!this.task)
            return inception;

        return this.task.dataInizio;
    }

    dataInizioCtrlMax() {

        const endOfWorld = "2239-01-01"; // According to the Talmud

        if (!this.task)
            return endOfWorld;

        const dataFineTask = this.task.dataFine || endOfWorld;

        if (!this.dataFineCtrl.value)
            return dataFineTask;

        if (this.dataFineCtrl.value.localeCompare(dataFineTask) <= 0)
            return this.dataFineCtrl.value;
        
        return dataFineTask;
    }

    dataFineCtrlMin() {

        const inception = "1970-01-01";

        if (!this.task)
            return inception;

        const dataInizioTask = this.task.dataInizio || inception;

        if (!this.dataInizioCtrl.value)
            return dataInizioTask;

        if (this.dataInizioCtrl.value.localeCompare(dataInizioTask) >= 0)
            return this.dataInizioCtrl.value;
        
        return dataInizioTask;
    }

    dataFineCtrlMax() {

        const endOfWorld = "2239-01-01"; // According to the Talmud

        if (!this.task)
            return endOfWorld;

        return this.task.dataFine;
    }

    save() {
        if (this.dialogMode === DIALOG_MODE.Create)
            this.create();
        else
            this.update();
    }

    create() {

        // esempio di payload {
        //     "allocazione": 100,
        //     "fineAllocazione": "2015-06-29T22:00:00.000Z",
        //     "id": null,
        //     "idAzienda": 9
        //     "idTask": 4541,
        //     "idUtente": 5352,
        //     "inizioAllocazione": "2013-12-31T23:00:00.000Z",
        // }

        if (this.form.invalid || (!this.utentiCtrl.value || this.utentiCtrl.value.length === 0)) return;
        
        const utenti = dedupe(this.utentiCtrl.value, "idUtente");

        const requests = utenti.map(u => {

            const legameTaskRisorsa: UpsertLegameParam = {
                idTask: this.idTask,
                idUtente: u.idUtente,
                inizioAllocazione: this.dataInizioCtrl.value as string,
                fineAllocazione: this.dataFineCtrl.value as string
            };

            return this.risorsaService
                .createLegame$(legameTaskRisorsa)
                .pipe(
                    catchError(() => {

                        const txt = `Non è stato possibile creare il Legame per ${u.cognome} ${u.nome}. Contattare il supporto tecnico.`;
                        this.toaster.show(txt, { classname: 'bg-danger text-white' });

                        return of(-1);
                    })
                );
        });

        combineLatest(requests)
            .subscribe(responses => {

                const txt = "Operazione terminata!";
                this.toaster.show(txt, { classname: 'bg-success text-white' });

                this.activeModal
                    .close({
                        dialogMode: this.dialogMode,
                        // idLegame
                    });
            });
    }

    update() {

        // {
        //     "allocazione": 1,
        //     "fineAllocazione": "2015-06-29T22:00:00.000Z",
        //     "id": 43923,
        //     "idAzienda": 9
        //     "idTask": 4541,
        //     "idUtente": 208,
        //     "inizioAllocazione": "2015-05-31T22:00:00.000Z",
        // }

        if (!this.legame || this.form.invalid) return;

        const legameTaskRisorsa: UpsertLegameParam = {
            idTask: this.idTask,
            idUtente: this.legame.idUtente,
            inizioAllocazione: this.dataInizioCtrl.value as string,
            fineAllocazione: this.dataFineCtrl.value as string
        };

        this.risorsaService
            .updateLegame$(this.idLegame, legameTaskRisorsa)
            .subscribe(
                () => {
                    const txt = "Legame modificato con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close({
                        dialogMode: this.dialogMode,
                        item: legameTaskRisorsa
                    });
                },
                () => {
                    const txt = "Non è stato possibile modificare il Legame. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }
}