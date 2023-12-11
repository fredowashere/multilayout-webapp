import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NumberMask } from 'src/app/utils/mask';
import { emailMask } from 'src/app/shared/directives/dependencies/text2mask/textMaskAddons';

@Component({
    selector: 'appd-text-masking',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './text-masking.html',
})
export class AppdTextMasking {

    euroMask = new NumberMask({
        suffix: " €",
        allowDecimal: true,
        allowNegative: true,
        thousandsSeparatorSymbol: ".",
        decimalSymbol: ","
    });
    euro = new FormControl(this.euroMask.numberToMask(1234.56));

    emailMask = emailMask;
    email = new FormControl();

    phoneMask = [ "+", /\d/, /\d/, " ", /[1-9]/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, /\d/ ];
    phone = new FormControl();
}


