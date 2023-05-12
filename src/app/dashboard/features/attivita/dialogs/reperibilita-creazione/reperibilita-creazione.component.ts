import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/services/toast.service";
import { SegreteriaService } from "src/app/api/modulo-attivita/services";
import { AuthService } from "src/app/services/auth.service";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
	selector: 'app-reperibilita-creazione-dialog',
	templateUrl: './reperibilita-creazione.component.html',
    styleUrls: ['./reperibilita-creazione.component.css']
})
export class ReperibilitaCreazioneComponent implements OnInit, OnDestroy {

    @Input("idSottocommessa") idSottocommessa!: number;

    dataInizioCtrl = new FormControl<string | null>(null, [Validators.required]);
    dataFineCtrl = new FormControl<string | null>(null, [Validators.required]);
    descrizioneCtrl = new FormControl<string | null>(null, [Validators.required]);
    reperibilitaSenzaAvvisoCtrl = new FormControl<boolean>(false);

    datesValidator = () => {

        const isoInizio = this.dataInizioCtrl.value || "";
        const isoFine = this.dataFineCtrl.value || "";

        if (isoInizio > isoFine)
            return { dates: "Invalid range." };
        
        return null;
    };

    form = new FormGroup(
        {
            dataInizio: this.dataInizioCtrl,
            dataFine: this.dataFineCtrl,
            descrizione: this.descrizioneCtrl,
            reperibilitaSenzaAvviso: this.reperibilitaSenzaAvvisoCtrl
        },
        [ this.datesValidator ]
    );

    destroy$ = new Subject<void>();

	constructor(
        public activeModal: NgbActiveModal,
        private authService: AuthService,
        private segreteriaService: SegreteriaService,
        private toaster: ToastService
    ) { }

    ngOnInit() { }

    ngOnDestroy() {
        this.destroy$.next();
    }

    create() {

        if (this.form.invalid) return;

        this.segreteriaService
            .postReperibilitaCommesse({
                idAzienda: this.authService.user.idAzienda!,
                idLegameReperibilita: 0,
                body: {
                    inizio: this.dataInizioCtrl.value,
                    fine: this.dataFineCtrl.value,
                    idSottoCommessa: this.idSottocommessa,
                    descrizione: this.descrizioneCtrl.value,
                    reperibilitaSenzaAvviso: this.reperibilitaSenzaAvvisoCtrl.value ? 1 : 0,
                    attivo: true
                }
            })
            .subscribe(
                () => {
                    const txt = "Reperibilità creata con successo!";
                    this.toaster.show(txt, { classname: 'bg-success text-white' });
                    this.activeModal.close();
                },
                () => {
                    const txt = "Non è stato possibile creare la reperibilità. Contattare il supporto tecnico.";
                    this.toaster.show(txt, { classname: 'bg-danger text-white' });
                }
            );
    }
}