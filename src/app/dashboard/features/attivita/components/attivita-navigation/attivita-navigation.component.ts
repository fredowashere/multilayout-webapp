import { Component, Input } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { CommessaSearchDto } from '../../models/commessa.models';

@Component({
  selector: 'app-attivita-navigation',
  templateUrl: './attivita-navigation.component.html',
  styleUrls: ['./attivita-navigation.component.css']
})
export class AttivitaNavigationComponent {

  @Input("commessa") commessa!: CommessaSearchDto;

  active: number = 3;
	disabled = true;

	onNavChange(changeEvent: NgbNavChangeEvent) {
		// if (changeEvent.nextId === 3) {
		// 	changeEvent.preventDefault();
		// }
	}

	toggleDisabled() {
		this.disabled = !this.disabled;
		if (this.disabled) {
			this.active = 1;
		}
	}

}
