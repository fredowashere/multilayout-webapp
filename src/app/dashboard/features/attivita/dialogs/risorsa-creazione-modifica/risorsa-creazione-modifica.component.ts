import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/services/toast.service";
import { DIALOG_MODE } from "../../models/dialog";
import { TaskService } from "../../services/task.service";
import { CreateTaskParam, TaskDto } from "../../models/task";
import { jsonCopy } from "src/app/utils/json";
import { UtentiAnagrafica } from "src/app/api/stato-avanzamento/models";
import { MiscDataService } from "../../services/miscData.service";
import { RisorsaTaskWrap, UpsertLegameParam } from "../../models/risorsa";
import { RisorsaService } from "../../services/risorsa.service";

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
    legame?: RisorsaTaskWrap;

    DIALOG_MODE = DIALOG_MODE;
    dialogMode!: DIALOG_MODE;
    isLoading = false;

    task?: TaskDto;

    form!: FormGroup;

    utenteCtrl = new FormControl<UtentiAnagrafica | null>(null, [Validators.required]);
    get idUtenteFromCtrl() {
        return this.utenteCtrl.value?.idUtente;
    }
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
        private miscData: MiscDataService
    ) { }

    ngOnInit() {

        this.isLoading = true;

        this.dialogMode = this.idLegame
            ? DIALOG_MODE.Update
            : DIALOG_MODE.Create;

        this.utenti = this.miscData.utenti;

        if (this.dialogMode === DIALOG_MODE.Update) {
            
            this.risorsaService.getLegameById$(this.idLegame)
                .subscribe(async legame => {
                    this.legame = legame;
                    this.initCtrlValues();
                    this.isLoading = false;
                });
        }
        else {
            this.isLoading = false;
        }

        this.form = new FormGroup({
            utente: this.utenteCtrl,
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

            this.utenteCtrl.setValue(this.legame.utente);
            this.dataInizioCtrl.setValue(this.legame.inizioAllocazione && this.legame.inizioAllocazione.slice(0, 10));
            this.dataFineCtrl.setValue(this.legame.fineAllocazione && this.legame.fineAllocazione.slice(0, 10));
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
        //     "allocazione": 100,
        //     "fineAllocazione": "2015-06-29T22:00:00.000Z",
        //     "id": null,
        //     "idAzienda": 9
        //     "idTask": 4541,
        //     "idUtente": 5352,
        //     "inizioAllocazione": "2013-12-31T23:00:00.000Z",
        // }

        if (this.form.invalid) return;

        const legameTaskRisorsa: UpsertLegameParam = {
            idTask: this.idTask,
            idUtente: this.idUtenteFromCtrl as number,
            inizioAllocazione: this.dataInizioCtrl.value as string,
            fineAllocazione: this.dataFineCtrl.value as string
        };

        this.risorsaService
            .createLegame$(legameTaskRisorsa)
            .subscribe(
                (idLegame) => {

                    const txt = "Legame creato con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });

                    // Close the modal with the id from the result to open the tab automatically
                    this.activeModal
                        .close({
                            dialogMode: this.dialogMode,
                            idLegame
                        });
                },
                () => {
                    const txt = "Non è stato possibile creare il Legame. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
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