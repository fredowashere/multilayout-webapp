import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-error-lookup`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_ERROR_LOOKUP</h4>
        </div>
        
        <div class="card-body">
            <div class="d-grid gap-3 mb-4">
                
                <app-input
                    name="constraint-name"
                    label="Constraint Name"
                    data-column-name="CONSTRAINT_NAME"
                    [ngControl]="form.controls.constraintName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="message"
                    label="Message"
                    data-column-name="MESSAGE"
                    [ngControl]="form.controls.message"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="language-code"
                    label="Language Code"
                    data-column-name="LANGUAGE_CODE"
                    [ngControl]="form.controls.languageCode"
                    [floatingLabel]="true"
                />
    
            </div>

            <div class="text-center">
                <button
                    class="btn btn-primary"
                    [disabled]="form.disabled ? true : form.invalid"
                    (click)="submit()"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>
`,
})
export class GenFormEbaCustErrorLookup {

    form = new FormGroup({
        constraintName: new FormControl<string | null>(null),
        message: new FormControl<string | null>(null),
        languageCode: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
