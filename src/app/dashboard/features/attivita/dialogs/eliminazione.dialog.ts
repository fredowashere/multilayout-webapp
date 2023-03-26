import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'eliminazione-dialog',
	template: `
		<div class="modal-header">

            <h4 class="modal-title" id="modal-title">
                Eliminazione {{ rows?.length ? ' multipla' : ' singola' }}
            </h4>

            <button
                type="button"
                class="btn-close" 
                (click)="activeModal.dismiss('Cross click')"
            ></button>
        </div>

        <div class="modal-body">

            <p *ngIf="name"><strong>Sei sicuro di voler eliminare {{ name }}?</strong></p>

            <p *ngIf="!name"><strong>Sei sicuro di voler eliminare i record selezionati?</strong></p>

            <ul *ngIf="rows">
                <li *ngFor="let row of rows">{{ row.name }}</li>
            </ul>

            <p>
                Tutte le informazioni saranno eliminate definitivamente.<br>
                <span *ngIf="reversible" class="text-danger">Questa operazione non è reversibile.</span>
            </p>
        </div>
        
        <div class="modal-footer">

            <button
                type="button"
                class="btn btn-outline-secondary"
                (click)="activeModal.dismiss('Canceled')"
            >Cancella</button>

            <button
                type="button"
                class="btn btn-danger"
                (click)="activeModal.close('Deleted')"
            >Elimina</button>
        </div>
	`,
})
export class EliminazioneDialog {

    @Input("reversible") reversible: boolean = true;
    @Input("name") name!: string;
    @Input("rows") rows?: any[];

	constructor(
        public activeModal: NgbActiveModal
    ) {}
}