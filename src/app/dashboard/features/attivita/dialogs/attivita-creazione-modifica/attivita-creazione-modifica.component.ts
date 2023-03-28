import { Component, Input, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { combineLatest, startWith } from "rxjs";
import { Dettaglio, UtentiAnagrafica } from "src/app/api/stato-avanzamento/models";
import { ToastService } from "src/app/services/toast.service";
import { InputComponent } from "src/app/shared/components/input/input.component";
import { jsonCopy } from "src/app/utils/json";
import { StatoAvanzamentoWrapService } from "../../../stato-avanzamento/services/stato-avanzamento-wrap.service";
import { CommessaDto, CreateCommessaParam, SimpleDto, UpdateCommessaParam } from "../../models/commessa.models";
import { DIALOG_MODE } from "../../models/dialog";
import { AttivitaService } from "../../services/attivita.service";

@Component({
	selector: 'app-attivita-creazione-modifica-dialog',
	templateUrl: './attivita-creazione-modifica.component.html',
    styleUrls: ['./attivita-creazione-modifica.component.css']
})
export class AttivitaCreazioneModifica {

    @ViewChild("clienteDirettoInput") clienteDirettoInput!: InputComponent;
    @ViewChild("clienteFinaleInput") clienteFinaleInput!: InputComponent;
    @ViewChild("pmInput") pmInput!: InputComponent;
    @ViewChild("bmInput") bmInput!: InputComponent;

    @Input("idCommessaPadre") idCommessaPadre!: number;

    DIALOG_MODE = DIALOG_MODE;
    dialogMode!: DIALOG_MODE;
    isLoading = false;

    commessa?: CommessaDto;

    form!: FormGroup;

    clienteDirettoCtrl = new FormControl<Dettaglio | null>(null, [Validators.required]);
    get idClienteDiretto() {
        return this.clienteDirettoCtrl.value?.id;
    }
    clientiDiretti: Dettaglio[] = [];
    clienteFormatter = (c: Dettaglio) => c.descrizione;
    clienteFilter = (term: string, c: Dettaglio) =>
        (c.descrizione as string).toLowerCase().includes(term.toLowerCase());
    
    clienteFinaleCtrl = new FormControl<Dettaglio | null>(null, [Validators.required]);
    get idClienteFinale() {
        return this.clienteFinaleCtrl.value?.id;
    }
    clientiFinali: Dettaglio[] = [];

    clientiOriginal: Dettaglio[] = [];

    pmCtrl = new FormControl<UtentiAnagrafica | null>(null, [Validators.required]);
    get idPm() {
        return this.pmCtrl.value?.idUtente;
    }
    pmList: UtentiAnagrafica[] = [];
    pmFormatter = (pm: UtentiAnagrafica) => pm.cognome + ' ' + pm.nome;
    pmFilter = (term: string, pm: UtentiAnagrafica) =>
        (pm.cognome + ' ' + pm.nome).toLowerCase().includes(term.toLowerCase());
    
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

	constructor(
        public activeModal: NgbActiveModal,
        private toaster: ToastService,
        private statoAvanzamentoWrap: StatoAvanzamentoWrapService,
        private attivitaService: AttivitaService
    ) { }

    ngOnInit() {

        this.dialogMode = this.idCommessaPadre
            ? DIALOG_MODE.Update
            : DIALOG_MODE.Create;

        if (this.dialogMode === DIALOG_MODE.Update) {
            this.isLoading = true;
            this.attivitaService
                .getCommessaById(this.idCommessaPadre)
                .subscribe(commessa => {
                    this.commessa = commessa;
                    this.initializeAutocompleteValues();
                });
        }
        else {
            this.initializeAutocompleteValues();
        }

        this.form = new FormGroup({
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

        // Dynamic validators
        this.tipoAttivitaCtrl.valueChanges
            .pipe(
                startWith(() => this.tipoAttivitaCtrl.value)
            )
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

    initializeAutocompleteValues() {

        combineLatest([
            this.statoAvanzamentoWrap
                .getUtenti$({ IsPm: true, IsBm: false }),
            this.statoAvanzamentoWrap
                .getUtenti$({ IsPm: false, IsBm: true }),
            this.statoAvanzamentoWrap
                .getClienti$({ totali: true })
        ])
        .subscribe(([pmList, bmList, clienti]) => {

            this.isLoading = false;

            this.pmList = pmList;
            this.bmList = bmList;
            this.clientiOriginal = clienti;
            this.clientiDiretti = jsonCopy(clienti);
            this.clientiFinali = jsonCopy(clienti);

            if (this.dialogMode === DIALOG_MODE.Update) {
                console.log("Modificando la commessa", this.commessa);

                const clienteDiretto = this.clientiOriginal
                    .find(c => c.id === this.commessa?.idCliente);
                this.clienteDirettoCtrl.setValue(clienteDiretto as Dettaglio);

                const clienteFinale = this.clientiOriginal
                    .find(c => c.id === this.commessa?.idClienteFinale);
                this.clienteFinaleCtrl.setValue(clienteFinale as Dettaglio);

                this.codiceCommessaCtrl.setValue(this.commessa?.codiceCommessa as string);
                this.descrizioneCtrl.setValue(this.commessa?.descrizione as string);
                this.tagCtrl.setValue(this.commessa?.tag as string);

                const pm = this.pmList
                    .find(pm => pm.idUtente === this.commessa?.idProjectManager);
                this.pmCtrl.setValue(pm as UtentiAnagrafica);

                const bm = this.bmList
                    .find(bm => bm.idUtente === this.commessa?.idBusinessManager);
                this.bmCtrl.setValue(bm as UtentiAnagrafica);

                const tipoAttivita = this.commessa?.tipoAttivita as SimpleDto;
                this.tipoAttivitaCtrl.setValue(tipoAttivita.id);

                this.dataCreazioneCtrl.setValue(
                    this.commessa?.dataInserimento?.slice(0, 10) as string
                );

                this.dataDecorrenzaCtrl.setValue(
                    this.commessa?.decorrenzaAttivita?.slice(0, 10) as string
                );
            }
        });
    }

    save() {
        if (this.dialogMode === DIALOG_MODE.Create)
            this.create();
        else
            this.update();
    }

    create() {

        const createObj: CreateCommessaParam = {
            idCliente: this.idClienteDiretto as number,
            idClienteFinale: this.idClienteFinale as number,
            idProjectManager: this.idPm as number,
            idBusinessManager: this.idBm as number,
            idTipoAttivita: this.tipoAttivitaCtrl.value as number,
            dataDecorrenza: this.dataDecorrenzaCtrl.value,
            protocollo: this.codiceCommessaCtrl.value as string,
            descrizione: this.descrizioneCtrl.value as string,
            tag: this.tagCtrl.value,
        };
        
        this.attivitaService
            .createCommessa$(createObj)
            .subscribe(
                () => {
                    const txt = "Commessa creata con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close({ dialogMode: this.dialogMode });
                },
                () => {
                    const txt = "Non è stato possibile creare la commessa. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }

    update() {

        const updateObj: UpdateCommessaParam = {
            id: this.commessa?.id as number,
            idCliente: this.idClienteDiretto as number,
            idClienteFinale: this.idClienteFinale as number,
            idProjectManager: this.idPm as number,
            idBusinessManager: this.idBm as number,
            codiceCommessa: this.codiceCommessaCtrl.value as string,
            descrizione: this.descrizioneCtrl.value as string,
            tag: this.tagCtrl.value,
        };

        this.attivitaService
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