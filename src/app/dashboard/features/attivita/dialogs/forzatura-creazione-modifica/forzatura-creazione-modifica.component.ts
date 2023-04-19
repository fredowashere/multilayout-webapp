import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { combineLatest, lastValueFrom } from "rxjs";
import { ToastService } from "src/app/services/toast.service";
import { jsonCopy } from "src/app/utils/json";
import { euroMask, euroMask2numStr, numStr2euroMask } from "src/app/utils/mask";
import { CommessaDto } from "../../models/commessa";
import { DIALOG_MODE } from "../../models/dialog";
import { CommessaService } from "../../services/commessa.service";
import { SottocommessaService } from "../../services/sottocommessa.service";
import { Dettaglio } from "src/app/api/modulo-attivita/models";
import { MonthpickerStruct } from "src/app/shared/components/monthpicker/monthpicker.component";
import { ForzaturaService } from "../../services/forzatura.service";
import { MiscDataService } from "../../services/miscData.service";
import { ForzaturaDto } from "../../models/forzatura";

@Component({
	selector: 'app-forzatura-creazione-modifica-dialog',
	templateUrl: './forzatura-creazione-modifica.component.html',
    styleUrls: ['./forzatura-creazione-modifica.component.css']
})
export class ForzaturaCreazioneModifica {

    @Input("idCommessa") idCommessa!: number;
    @Input("idForzatura") idForzatura?: number;
    @Input("categoria") categoria!: "costo" | "ricavo";

    DIALOG_MODE = DIALOG_MODE;
    dialogMode!: DIALOG_MODE;
    isLoading = false;

    commessa!: CommessaDto;
    forzatura?: ForzaturaDto;

    form!: FormGroup;

    euroMask = euroMask;

    // Common controls (both "costo" and "ricavo")
    sottocommessaCtrl = new FormControl<CommessaDto | null>(null, [Validators.required]);
    get idSottocommessa() {
        return this.sottocommessaCtrl.value?.id;
    }
    sottocommesse: CommessaDto[] = [];
    sottocommessaFormatter = (sc: CommessaDto) => sc?.codiceCommessa + ' ' + sc?.descrizione;
    sottocommessaFilter = (term: string, sc: CommessaDto) =>
        (sc?.codiceCommessa + ' ' + sc?.descrizione).toLowerCase().includes(term.toLowerCase());

    fornitoreCtrl = new FormControl<Dettaglio | null>(null, [Validators.required]);
    get idFornitore() {
        return this.fornitoreCtrl.value?.id;
    }
    fornitori: Dettaglio[] = [];
    fornitoreFormatter = (c: Dettaglio) => c.descrizione;
    fornitoreFilter = (term: string, c: Dettaglio) =>
        (c.descrizione as string).toLowerCase().includes(term.toLowerCase());

    categoriaForzaturaCtrl = new FormControl<number>(1);
    get categoriaForzatura() {
        return this.categoriaForzaturaCtrl.value;
    }
    categorieForzatura: { text: string, value: any }[] = [];

    riscontoCtrl = new FormControl<number>(0);
    get risconto() {
        return this.riscontoCtrl.value;
    }
    risconti = [
        { text: "Nessuno", value: 0 },
        { text: "Mensile", value: 1 },
        { text: "Giornaliero", value: 2 },
    ];

    inizioCompetenzaCtrl = new FormControl<MonthpickerStruct | null>(null, [Validators.required]);
    get inizioCompetenza() {

        if (!this.inizioCompetenzaCtrl.value)
            return "1970-01-01";
        
        const date = "01";
        const month = (this.inizioCompetenzaCtrl.value.month + "")
            .padStart(2, "0");
        const year = this.inizioCompetenzaCtrl.value.year;

        return year + "-" + month + "-" + date;
    }
    set inizioCompetenza(val: string) {
        if (val) {
            const d = new Date(val);
            this.inizioCompetenzaCtrl
                .setValue({
                    year: d.getFullYear(),
                    month: d.getMonth() + 1
                });
        }
    }
    get previewInizioCompetenza() {
        if (!this.inizioCompetenzaCtrl.value) {
            return "Inizio del mese selezionato";
        }
        const { year, month } = this.inizioCompetenzaCtrl.value;
        return `${year}-${month}-1`;
    }
    get maxInizioCompetenza(): MonthpickerStruct {
        if (!this.fineCompetenzaCtrl.value) {
            return { year: 2030, month: 12 };
        }
        return this.fineCompetenzaCtrl.value;
    }

    fineCompetenzaCtrl = new FormControl<MonthpickerStruct | null>(null, [Validators.required]);
    get fineCompetenza() {

        if (!this.fineCompetenzaCtrl.value)
            return "2239-01-01";
        
        const date = "01";
        const month = (this.fineCompetenzaCtrl.value.month + "")
            .padStart(2, "0");
        const year = this.fineCompetenzaCtrl.value.year;

        return year + "-" + month + "-" + date;
    }
    set fineCompetenza(val: string) {
        if (val) {
            const d = new Date(val);
            this.fineCompetenzaCtrl
                .setValue({
                    year: d.getFullYear(),
                    month: d.getMonth() + 1
                });
        }
    }
    get previewFineCompetenza() {
        if (!this.fineCompetenzaCtrl.value) {
            return "Inizio del mese selezionato";
        }
        const { year, month } = this.fineCompetenzaCtrl.value;
        return `${year}-${month}-1`;
    }
    get minFineCompetenza(): MonthpickerStruct {
        if (!this.inizioCompetenzaCtrl.value) {
            return { year: 2000, month: 1 };
        }
        return this.inizioCompetenzaCtrl.value;
    }

    noteCtrl = new FormControl();

    // Only costo
    classificazioneCostoCtrl = new FormControl<number>(1);
    get classificazioneCosto() {
        return this.classificazioneCostoCtrl.value;
    }
    classificazioniCosto: { text: string, value: any }[] = [];

    costoCtrl = new FormControl("0");
    get costo() {
        const masked = this.costoCtrl.value as string;
        return euroMask2numStr(masked);
    }
    set costo(unmasked: string) {
        const masked = numStr2euroMask(unmasked);
        this.costoCtrl.setValue(masked);
    }

    // Only ricavo
    ricavoCtrl = new FormControl("0");
    get ricavo() {
        const masked = this.ricavoCtrl.value as string;
        return euroMask2numStr(masked);
    }
    set ricavo(unmasked: string) {
        const masked = numStr2euroMask(unmasked);
        this.ricavoCtrl.setValue(masked);
    }

	constructor(
        public activeModal: NgbActiveModal,
        private toaster: ToastService,
        private commessaService: CommessaService,
        private forzaturaService: ForzaturaService,
        private sottocommessaService: SottocommessaService,
        private miscData: MiscDataService
    ) { }

    ngOnInit() {

        this.isLoading = true;

        this.dialogMode = this.idForzatura
            ? DIALOG_MODE.Update
            : DIALOG_MODE.Create;

        if (this.dialogMode === DIALOG_MODE.Update) {
            combineLatest([
                this.commessaService
                    .getCommessaById(this.idCommessa),
                this.forzaturaService
                    .getForzaturaById$(this.idForzatura as number, this.categoria)
            ])
            .subscribe(async ([ commessa, forzatura ]) => {
                this.commessa = commessa;
                this.forzatura = forzatura;
                await this.initArrays();
                this.initCtrlValidation();
                this.initCtrlValues();
                this.isLoading = false;
            })
        }
        else {
            this.commessaService
                .getCommessaById(this.idCommessa)
                .subscribe(async commessa => {
                    this.commessa = commessa;
                    await this.initArrays();
                    this.initCtrlValidation();
                    this.isLoading = false;
                });
        }

        this.form = new FormGroup({
            sottocommessa: this.sottocommessaCtrl,
            fornitore: this.fornitoreCtrl,
            categoriaForzatura: this.categoriaForzaturaCtrl,
            risconto: this.riscontoCtrl,
            inizioCompetenza: this.inizioCompetenzaCtrl,
            fineCompetenza: this.fineCompetenzaCtrl,
            note: this.noteCtrl,
            costo: this.costoCtrl,
            classificazioneCosto: this.classificazioneCostoCtrl,
            ricavo: this.ricavoCtrl,
        });
    }

    async initArrays() {

        this.fornitori = this.miscData.clienti;

        const requests = combineLatest([
            this.sottocommessaService.getSottocommesseByIdCommessa$(this.idCommessa),
            this.forzaturaService.getCategorieForzature$(),
            this.forzaturaService.getClassificazioneDiCosto$()
        ]);

        const [
            sottocommesse,
            categorieForzatura,
            classificazioniCosto
        ] = await lastValueFrom(requests);

        this.sottocommesse = sottocommesse;
        this.categorieForzatura = categorieForzatura
            .map(cf => ({ text: cf.descrizione, value: cf.id }));
        this.classificazioniCosto = classificazioniCosto
            .map(cf => ({ text: cf.text, value: cf.id }));;
    }

    initCtrlValidation() {

        if (this.categoria === "costo") {
            this.costoCtrl.setValidators([Validators.required]);
            this.costoCtrl.updateValueAndValidity();
            this.form.updateValueAndValidity();
        }
        else {
            this.ricavoCtrl.setValidators([Validators.required]);
            this.ricavoCtrl.updateValueAndValidity();
        }
    }

    initCtrlValues() {

        // esempio di response {
        //     "id": 52723,
        //     "idFornitore": 2252,
        //     "note": null,
        //     "commessa": {
        //         "id": 2192,
        //         "text": "UIT_DBA"
        //     },
        //     "categoriaForzatura": {
        //         "id": 2,
        //         "text": "Progetto"
        //     },
        //     "inizioPeriodo": "2021-02-01",
        //     "finePeriodo": "2021-02-28",
        //     "idAzienda": 9,
        //     "valido": true,
        //     "ricavoTotale": "13.510000228881836",
        //     "costoTotale": null,
        //     "idCliente": 740,
        //     "riscontoMensile": true,
        //     "riscontoGiornaliero": false,
        //     "classificazioneDiCosto": null
        // }

        if (this.dialogMode === DIALOG_MODE.Update) {

            if (!this.forzatura) return;

            const sottocommessa = this.sottocommesse
                .find(sc => sc.id === this.forzatura?.commessa.id);
            this.sottocommessaCtrl.setValue(sottocommessa as CommessaDto);

            const fornitore = this.fornitori
                .find(f => f.id === this.forzatura?.idFornitore);
            this.fornitoreCtrl.setValue(fornitore as Dettaglio);

            this.categoriaForzaturaCtrl.setValue(this.forzatura.categoriaForzatura.id);

            let risconto = 0;
            if (this.forzatura.riscontoMensile) {
                risconto = 1;
            }
            if (this.forzatura.riscontoGiornaliero) {
                risconto = 2;
            }
            this.riscontoCtrl.setValue(risconto);

            this.inizioCompetenza = this.forzatura.inizioPeriodo;
            this.fineCompetenza = this.forzatura.finePeriodo;

            this.noteCtrl.setValue(this.forzatura.note);

            if (this.categoria === "costo") {
                this.costo = this.forzatura.costoTotale as string;
                this.classificazioneCostoCtrl.setValue(this.forzatura.classificazioneDiCosto?.id as number);
            }
            else {
                this.ricavo = this.forzatura.ricavoTotale as string;
            }
        }
    }

    save() {
        if (this.dialogMode === DIALOG_MODE.Create)
            this.create();
        else
            this.update();
    }

    create() {

        if (this.form.invalid) return;

        let riscontoMensile = false;
        let riscontoGiornaliero = false;
        if (this.risconto === 1) {
            riscontoMensile = true;
            riscontoGiornaliero = false;
        }
        if (this.risconto === 2) {
            riscontoGiornaliero = true;
            riscontoMensile = false;
        }

        let createObj: ForzaturaDto;
        if (this.categoria === "costo") {

            // esempio di costo {
            //     "note": null,
            //     "costoTotale": "111",
            //     "inizioPeriodo": "2023-08-01",
            //     "finePeriodo": "2045-11-30",
            //     "commessa": {
            //         "id": 2192
            //     },
            //     "categoriaForzatura": {
            //         "id": 2
            //     },
            //     "classificazioneDiCosto": {
            //         "id": 2
            //     },
            //     "idAzienda": 9,
            //     "idCliente": 740,
            //     "idFornitore": 1074,
            //     "valido": 1,
            //     "riscontoMensile": true,
            //     "riscontoGiornaliero": false
            // }

            createObj = {
                note: this.noteCtrl.value,
                costoTotale: this.costo,
                inizioPeriodo: this.inizioCompetenza,
                finePeriodo: this.fineCompetenza,
                commessa: {
                    id: this.idSottocommessa as number
                },
                categoriaForzatura: {
                    id: this.categoriaForzatura as number
                },
                classificazioneDiCosto: {
                    id: this.classificazioneCosto as number
                },
                idCliente: this.commessa.idCliente,
                idFornitore: this.idFornitore as number,
                riscontoMensile: riscontoMensile as boolean,
                riscontoGiornaliero: riscontoGiornaliero as boolean
            };
        }
        else {

            // esempio di ricavo {
            //     "note": null,
            //     "ricavoTotale": 12,
            //     "inizioPeriodo": "2038-08-01",
            //     "finePeriodo": "2050-10-31",
            //     "commessa": {
            //         "id": 2192
            //     },
            //     "categoriaForzatura": {
            //         "id": 2
            //     },
            //     "idAzienda": 9,
            //     "idCliente": 740,
            //     "idFornitore": 1056,
            //     "valido": 1,
            //     "riscontoMensile": true,
            //     "riscontoGiornaliero": false
            // }

            createObj = {
                note: this.noteCtrl.value,
                ricavoTotale: this.ricavo,
                inizioPeriodo: this.inizioCompetenza,
                finePeriodo: this.fineCompetenza,
                commessa: {
                    id: this.idSottocommessa as number
                },
                categoriaForzatura: {
                    id: this.categoriaForzatura as number
                },
                idCliente: this.commessa.idCliente,
                idFornitore: this.idFornitore as number,
                riscontoMensile: riscontoMensile as boolean,
                riscontoGiornaliero: riscontoGiornaliero as boolean
            };
        }
        
        this.forzaturaService
            .createForzatura$(createObj as ForzaturaDto)
            .subscribe(
                (idForzatura) => {

                    const txt = `Forzatura di ${this.categoria} creata con successo!`;
                    this.toaster.show(txt, { classname: 'bg-success text-white' });

                    // Close the modal with the id from the result to open the tab automatically
                    this.activeModal
                        .close({
                            dialogMode: this.dialogMode,
                            idForzatura
                        });
                },
                () => {
                    const txt = `Non è stato possibile creare il ${this.categoria}. Contattare il supporto tecnico.`;
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }

    update() {

        if (!this.forzatura || this.form.invalid) return;

        const copyOfForzatura: ForzaturaDto = jsonCopy(this.forzatura);
        copyOfForzatura.note = this.noteCtrl.value;
        copyOfForzatura.commessa.id = this.idSottocommessa as number;
        copyOfForzatura.categoriaForzatura.id = this.categoriaForzatura as number;
        copyOfForzatura.idFornitore = this.idFornitore as number;

        if (this.categoria === "costo") {
            copyOfForzatura.costoTotale = this.costo;
            copyOfForzatura.classificazioneDiCosto!.id = this.classificazioneCosto as number;
        }
        else {
            copyOfForzatura.ricavoTotale = this.ricavo;
        }

        this.forzaturaService
            .updateForzatura$(
                this.idForzatura as number,
                copyOfForzatura
            )
            .subscribe(
                () => {
                    const txt = `Forzatura di ${this.categoria} modificata con successo!`;
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close({
                        dialogMode: this.dialogMode,
                        item: copyOfForzatura
                    });
                },
                () => {
                    const txt = `Non è stato possibile modificare il ${this.categoria}. Contattare il supporto tecnico.`;
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }
}