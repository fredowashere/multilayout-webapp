import { Component, TemplateRef } from '@angular/core';

import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../services/toast.service';

@Component({
	selector: 'app-toasts',
	standalone: true,
	imports: [ NgbToastModule, NgIf, NgTemplateOutlet, NgFor ],
	template: `
		<ngb-toast
			*ngFor="let toast of toastService.toasts; let i = index"
			style="font-size: 1.15rem; width: 500px;"
			[class]="toast.classname"
			[autohide]="true"
			[delay]="toast.delay || 5000"
			(hidden)="toastService.remove(toast)"
		>
			<div class="d-flex align-items-start">

				<div style="flex: 1 0 0;">

					<ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
						<ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
					</ng-template>
		
					<ng-template #text>{{ toast.textOrTpl }}</ng-template>
				</div>

				<span style="cursor: pointer;" (click)="deleteToast(i)"><i class="bi bi-x-lg"></i></span>
			</div>
		</ngb-toast>
	`,
	host: {
		class: "toast-container position-fixed top-0 end-0 p-3",
		style: "z-index: 1200;"
	},
})
export class ToastsContainer {
	
	constructor(public toastService: ToastService) {}

	isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

	deleteToast(index: number) {
		this.toastService.toasts.splice(index, 1);
	}
}
