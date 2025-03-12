import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-access-levels`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_ACCESS_LEVELS</h4>
        </div>
        
        <div class="card-body">
            <div class="d-grid gap-3 mb-4">
                
                <app-input
                    name="id"
                    label="Id"
                    data-column-name="ID"
                    [ngControl]="form.controls.id"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="access-level"
                    label="Access Level"
                    data-column-name="ACCESS_LEVEL"
                    [ngControl]="form.controls.accessLevel"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="row-version"
                    label="Row Version"
                    data-column-name="ROW_VERSION"
                    [ngControl]="form.controls.rowVersion"
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
export class GenFormEbaCustAccessLevels {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        accessLevel: new FormControl<string | null>(null),
        rowVersion: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
