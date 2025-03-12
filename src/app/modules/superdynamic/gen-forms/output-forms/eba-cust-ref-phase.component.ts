import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-ref-phase`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_REF_PHASE</h4>
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
                    name="status"
                    label="Status"
                    data-column-name="STATUS"
                    [ngControl]="form.controls.status"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="description"
                    label="Description"
                    data-column-name="DESCRIPTION"
                    [ngControl]="form.controls.description"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="is-an-active-reference"
                    label="Is An Active Reference"
                    data-column-name="IS_AN_ACTIVE_REFERENCE"
                    [ngControl]="form.controls.isAnActiveReference"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="display-sequence"
                    label="Display Sequence"
                    data-column-name="DISPLAY_SEQUENCE"
                    [ngControl]="form.controls.displaySequence"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="created"
                    label="Created"
                    data-column-name="CREATED"
                    [ngControl]="form.controls.created"
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
                    name="updated"
                    label="Updated"
                    data-column-name="UPDATED"
                    [ngControl]="form.controls.updated"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="updated-by"
                    label="Updated By"
                    data-column-name="UPDATED_BY"
                    [ngControl]="form.controls.updatedBy"
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
export class GenFormEbaCustRefPhase {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        status: new FormControl<string | null>(null),
        description: new FormControl<string | null>(null),
        isAnActiveReference: new FormControl<string | null>(null),
        displaySequence: new FormControl<string | null>(null),
        created: new FormControl<string | null>(null),
        createdBy: new FormControl<string | null>(null),
        updated: new FormControl<string | null>(null),
        updatedBy: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
