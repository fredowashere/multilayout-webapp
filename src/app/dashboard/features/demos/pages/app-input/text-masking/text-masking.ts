import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { createNumberMask, emailMask } from 'src/app/shared/directives/dependencies/text2mask/textMaskAddons';

@Component({
	selector: 'appd-text-masking',
	standalone: true,
    imports: [SharedModule],
	templateUrl: './text-masking.html',
})
export class AppdTextMasking {

	phoneMask = [ '+', /\d/, /\d/, ' ', /[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/ ];
	phone = new FormControl();

	euroMask = createNumberMask({
		prefix: '€ ',
		allowDecimal: true,
		thousandsSeparatorSymbol: '.',
		decimalSymbol: ','
	});
	euro = new FormControl();

	emailMask = emailMask;
	email = new FormControl();
}


