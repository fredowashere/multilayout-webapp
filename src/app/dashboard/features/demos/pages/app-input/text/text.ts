import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'appd-text',
	standalone: true,
    imports: [SharedModule, NgIf],
	templateUrl: './text.html',
})
export class AppdText {

    text = new FormControl();
    number = new FormControl();
    password = new FormControl();
    textarea = new FormControl();
}


