import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/services/toast.service";
import { DIALOG_MODE } from "../../models/dialog";
import { EventoDto } from "../../models/evento";
import { EventoService } from "../../services/evento.service";

@Component({
	selector: 'app-evento-creazione-modifica-dialog',
	templateUrl: './evento-creazione-modifica.component.html',
    styleUrls: ['./evento-creazione-modifica.component.css']
})
export class EventoCreazioneModifica {

    @Input("idCommessa") idCommessa!: number;
    @Input("evento") evento!: EventoDto;

    DIALOG_MODE = DIALOG_MODE;
    dialogMode!: DIALOG_MODE;

    tipoEventoCtrl = new FormControl(1);
    tipiEvento: { text: string, value: number }[] = [];

    dataCtrl = new FormControl<string | null>(null, [Validators.required]);
    descrizioneCtrl = new FormControl<string | null>(null, [Validators.required]);

    form = new FormGroup({
        data: this.dataCtrl,
        tipoEvento: this.tipoEventoCtrl,
        descrizione: this.descrizioneCtrl
    });

	constructor(
        public activeModal: NgbActiveModal,
        private eventoService: EventoService,
        private toaster: ToastService
    ) { }

    ngOnInit() {

        this.dialogMode = this.evento
            ? DIALOG_MODE.Update
            : DIALOG_MODE.Create;

        this.eventoService
            .getTipiEvento$()
            .subscribe(tipiEvento =>
                this.tipiEvento = tipiEvento
                    .map(te => ({ text: te.descrizione, value: te.id }))
            );

        if (this.dialogMode === DIALOG_MODE.Update) {
            this.tipoEventoCtrl.setValue(this.evento.faseEvento.id);
            this.dataCtrl.setValue(this.evento.dataEvento.slice(0, 10));
            this.descrizioneCtrl.setValue(this.evento.descrizione);
        }
    }

    save() {
        if (this.dialogMode === DIALOG_MODE.Create)
            this.create();
        else
            this.update();
    }

    create() {

        this.eventoService
            .createEvento$({
                idOpportunita: this.idCommessa,
                dataEvento: this.dataCtrl.value as string,
                descrizione: this.descrizioneCtrl.value as string,
                faseEvento: {
                    id: this.tipoEventoCtrl.value as number
                }
            })
            .subscribe(
                () => {
                    const txt = "Evento creato con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close();
                },
                () => {
                    const txt = "Non è stato possibile creare l'evento. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }

    update() {

        this.eventoService
            .updateEvento$(
                this.evento.id,
                {
                    idOpportunita: this.idCommessa,
                    dataEvento: this.dataCtrl.value as string,
                    descrizione: this.descrizioneCtrl.value as string,
                    faseEvento: {
                        id: this.tipoEventoCtrl.value as number
                    }
                }
            )
            .subscribe(
                () => {
                    const txt = "Evento modificato con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close();
                },
                () => {
                    const txt = "Non è stato possibile modificare l'evento. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }
}