import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-preferences`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_PREFERENCES</h4>
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
                    name="preference-name"
                    label="Preference Name"
                    data-column-name="PREFERENCE_NAME"
                    [ngControl]="form.controls.preferenceName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="preference-value"
                    label="Preference Value"
                    data-column-name="PREFERENCE_VALUE"
                    [ngControl]="form.controls.preferenceValue"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="created-by"
                    label="Created By"
                    data-column-name="CREATED_BY"
                    [ngControl]="form.controls.createdBy"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="created-on"
                    label="Created On"
                    data-column-name="CREATED_ON"
                    [ngControl]="form.controls.createdOn"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="updated-by"
                    label="Updated By"
                    data-column-name="UPDATED_BY"
                    [ngControl]="form.controls.updatedBy"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="updated-on"
                    label="Updated On"
                    data-column-name="UPDATED_ON"
                    [ngControl]="form.controls.updatedOn"
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
export class GenFormEbaCustPreferences {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        preferenceName: new FormControl<string | null>(null),
        preferenceValue: new FormControl<string | null>(null),
        createdBy: new FormControl<string | null>(null),
        createdOn: new FormControl<string | null>(null),
        updatedBy: new FormControl<string | null>(null),
        updatedOn: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
