import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/app/services/toast.service";
import { AuthService } from "src/app/services/auth.service";
import { SegreteriaService } from "src/app/api/modulo-attivita/services";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
	selector: 'app-straordinari-creazione-dialog',
	templateUrl: './straordinari-creazione.component.html',
    styleUrls: ['./straordinari-creazione.component.css']
})
export class StraordinariCreazioneComponent {

    @Input("idSottocommessa") idSottocommessa!: number;

    dataInizioCtrl = new FormControl<string | null>(null, [Validators.required]);
    dataFineCtrl = new FormControl<string | null>(null, [Validators.required]);
    descrizioneCtrl = new FormControl<string | null>(null, [Validators.required]);
    autorizzazioneClienteCtrl = new FormControl<boolean>(false);

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
            autorizzazioneCliente: this.autorizzazioneClienteCtrl
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

    create() {

        if (this.form.invalid) return;

        this.segreteriaService
            .postStraordinariTerzeParti({
                idAzienda: this.authService.user.idAzienda!,
                idLegameStraordinari: 0,
                body: {
                    inizio: this.dataInizioCtrl.value!, // Why it does complain if it's undefined while for fine does not? Blame the BE!
                    fine: this.dataFineCtrl.value,
                    idSottoCommessa: this.idSottocommessa,
                    descrizione: this.descrizioneCtrl.value,
                    autorizzazioneCliente: this.autorizzazioneClienteCtrl.value ? 1 : 0,
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