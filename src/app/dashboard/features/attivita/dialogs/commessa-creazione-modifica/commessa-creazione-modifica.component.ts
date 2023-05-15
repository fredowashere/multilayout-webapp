import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { startWith } from "rxjs";
import { Dettaglio, UtentiAnagrafica } from "src/app/api/modulo-attivita/models";
import { ToastService } from "src/app/services/toast.service";
import { jsonCopy } from "src/app/utils/json";
import { CommessaDto, CreateCommessaParam, SimpleDto, UpdateCommessaParam } from "../../models/commessa";
import { DIALOG_MODE } from "../../models/dialog";
import { CommessaService } from "../../services/commessa.service";
import { MiscDataService } from "../../services/miscData.service";
import { SEGRETERIA } from "src/app/models/user";

@Component({
	selector: 'app-commessa-creazione-modifica-dialog',
	templateUrl: './commessa-creazione-modifica.component.html',
    styleUrls: ['./commessa-creazione-modifica.component.css']
})
export class CommessaCreazioneModifica {

    @Input("idCommessa") idCommessa!: number;
    
    SEGRETERIA = SEGRETERIA;
    DIALOG_MODE = DIALOG_MODE;
    dialogMode!: DIALOG_MODE;
    isLoading = false;

    commessa?: CommessaDto;

    clienteDirettoCtrl = new FormControl<Dettaglio | null>(null, [Validators.required]);
    get idClienteDiretto() {
        return this.clienteDirettoCtrl.value?.id;
    }
    clientiDiretti: Dettaglio[] = [];
    clienteFormatter = (c: Dettaglio) => c.descrizione;

    clienteFinaleCtrl = new FormControl<Dettaglio | null>(null, [Validators.required]);
    get idClienteFinale() {
        return this.clienteFinaleCtrl.value?.id;
    }
    clientiFinali: Dettaglio[] = [];

    pmCtrl = new FormControl<UtentiAnagrafica | null>(null, [Validators.required]);
    get idPm() {
        return this.pmCtrl.value?.idUtente;
    }
    pmList: UtentiAnagrafica[] = [];
    pmFormatter = (pm: UtentiAnagrafica) => pm.cognome + ' ' + pm.nome;
    
    bmCtrl = new FormControl<UtentiAnagrafica | null>(null, [Validators.required]);
    get idBm() {
        return this.bmCtrl.value?.idUtente;
    }
    bmList: UtentiAnagrafica[] = [];

    tipoAttivitaCtrl = new FormControl<number>(1);
    get tipoAttivita() {
        return this.tipoAttivitaCtrl.value;
    }
    tipiAttivita = [
        { text: 'Opportunità', _descr: "optn", value: 1 },
        { text: 'Commessa interna', _descr: "cmint", value: 2 }
    ];

    codiceCommessaCtrl = new FormControl<string | null>(null);
    descrizioneCtrl = new FormControl<string | null>(null, [Validators.required]);
    tagCtrl = new FormControl<string | null>(null, [Validators.maxLength(5)]);
    dataCreazioneCtrl = new FormControl(new Date().toISOString().slice(0, 10));
    dataDecorrenzaCtrl = new FormControl();

    form = new FormGroup({
        cliente: this.clienteDirettoCtrl,
        clienteFinale: this.clienteFinaleCtrl,
        pm: this.pmCtrl,
        bm: this.bmCtrl,
        tipoAttivita: this.tipoAttivitaCtrl,
        codiceCommessa: this.codiceCommessaCtrl,
        descrizione: this.descrizioneCtrl,
        tag: this.tagCtrl,
        dataCreazione: this.dataCreazioneCtrl,
        dataDecorrenza: this.dataDecorrenzaCtrl
    });

	constructor(
        public activeModal: NgbActiveModal,
        private toaster: ToastService,
        private commessaService: CommessaService,
        private miscDataService: MiscDataService
    ) { }

    ngOnInit() {

        this.dialogMode = this.idCommessa
            ? DIALOG_MODE.Update
            : DIALOG_MODE.Create;

        if (this.dialogMode === DIALOG_MODE.Update) {
            this.isLoading = true;
            this.commessaService
                .getCommessaById(this.idCommessa)
                .subscribe(commessa => {
                    this.commessa = commessa;
                    this.initCtrlValues();
                    this.isLoading = false;
                });
        }
        else {
            this.initCtrlValues();
        }

        // Dynamic validators
        this.tipoAttivitaCtrl.valueChanges
            .pipe(startWith(null))
            .subscribe(() => {

                const ta = this.tipoAttivitaCtrl.value;

                this.codiceCommessaCtrl
                    .setValidators(ta == 2 ? [Validators.required] : null);
                this.codiceCommessaCtrl.updateValueAndValidity();

                this.dataDecorrenzaCtrl
                    .setValidators(ta == 1 ? [Validators.required] : null);
                this.dataDecorrenzaCtrl.updateValueAndValidity();

                this.form.updateValueAndValidity();
            });
    }

    initCtrlValues() {

        this.pmList = this.miscDataService.pmList;
        this.bmList = this.miscDataService.bmList;

        this.clientiDiretti = jsonCopy(this.miscDataService.clienti);
        this.clientiFinali = jsonCopy(this.miscDataService.clienti);

        if (this.dialogMode === DIALOG_MODE.Update) {

            const clienteDiretto = this.miscDataService.idClienteCliente[this.commessa?.idCliente!];
            this.clienteDirettoCtrl.setValue(clienteDiretto);

            const clienteFinale = this.miscDataService.idClienteCliente[this.commessa?.idClienteFinale!];
            this.clienteFinaleCtrl.setValue(clienteFinale);

            this.codiceCommessaCtrl.setValue(this.commessa?.codiceCommessa!);
            this.descrizioneCtrl.setValue(this.commessa?.descrizione!);
            this.tagCtrl.setValue(this.commessa?.tag!);

            const pm = this.miscDataService.idPmPm[this.commessa?.idProjectManager!];
            this.pmCtrl.setValue(pm);

            const bm = this.miscDataService.idUtenteUtente[this.commessa?.idBusinessManager!];
            this.bmCtrl.setValue(bm);

            const tipoAttivita = this.commessa?.tipoAttivita!;
            this.tipoAttivitaCtrl.setValue(tipoAttivita.id);

            this.dataCreazioneCtrl.setValue(
                this.commessa?.dataInserimento?.slice(0, 10)!
            );

            this.dataDecorrenzaCtrl.setValue(
                this.commessa?.decorrenzaAttivita?.slice(0, 10)!
            );
        }
    }

    save() {
        if (this.dialogMode === DIALOG_MODE.Create)
            this.create();
        else
            this.update();
    }

    create() {

        const createObj: CreateCommessaParam = {
            idCliente: this.idClienteDiretto!,
            idClienteFinale: this.idClienteFinale!,
            idProjectManager: this.idPm!,
            idBusinessManager: this.idBm!,
            idTipoAttivita: this.tipoAttivitaCtrl.value!,
            dataDecorrenza: this.dataDecorrenzaCtrl.value,
            protocollo: this.codiceCommessaCtrl.value,
            descrizione: this.descrizioneCtrl.value!,
            tag: this.tagCtrl.value,
        };
        
        this.commessaService
            .createCommessa$(createObj)
            .subscribe(
                (result) => {

                    const txt = "Commessa creata con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });

                    // Close the modal with the id from the result to open the tab automatically
                    this.activeModal
                        .close({
                            dialogMode: this.dialogMode,
                            idCommessa: result.id,
                            codiceCommessa: result.protocollo
                        });
                },
                () => {
                    const txt = "Non è stato possibile creare la commessa. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }

    update() {

        const updateObj: UpdateCommessaParam = {
            id: this.commessa?.id!,
            idCliente: this.idClienteDiretto!,
            idClienteFinale: this.idClienteFinale!,
            idProjectManager: this.idPm!,
            idBusinessManager: this.idBm!,
            codiceCommessa: this.codiceCommessaCtrl.value!,
            descrizione: this.descrizioneCtrl.value!,
            tag: this.tagCtrl.value,
        };

        this.commessaService
            .updateCommessa$(updateObj)
            .subscribe(
                () => {
                    const txt = "Commessa modificata con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close({ dialogMode: this.dialogMode, item: this.commessa });
                },
                () => {
                    const txt = "Non è stato possibile modificare la commessa. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }
}