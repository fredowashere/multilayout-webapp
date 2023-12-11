import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'appd-wizard-basic',
    standalone: true,
    imports: [SharedModule, DecimalPipe, NgFor],
    templateUrl: './wizard-basic.html',
})
export class AppdWizardBasic {
    
    disabled = true;
    
}