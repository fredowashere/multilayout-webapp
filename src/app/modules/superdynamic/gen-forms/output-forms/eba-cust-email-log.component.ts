import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-email-log`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_EMAIL_LOG</h4>
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
                    name="row-version-number"
                    label="Row Version Number"
                    data-column-name="ROW_VERSION_NUMBER"
                    [ngControl]="form.controls.rowVersionNumber"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="email-first-to"
                    label="Email First To"
                    data-column-name="EMAIL_FIRST_TO"
                    [ngControl]="form.controls.emailFirstTo"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="email-to"
                    label="Email To"
                    data-column-name="EMAIL_TO"
                    [ngControl]="form.controls.emailTo"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="email-from"
                    label="Email From"
                    data-column-name="EMAIL_FROM"
                    [ngControl]="form.controls.emailFrom"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="body-size"
                    label="Body Size"
                    data-column-name="BODY_SIZE"
                    [ngControl]="form.controls.bodySize"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="customer-id"
                    label="Customer Id"
                    data-column-name="CUSTOMER_ID"
                    [ngControl]="form.controls.customerId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="email-type"
                    label="Email Type"
                    data-column-name="EMAIL_TYPE"
                    [ngControl]="form.controls.emailType"
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
export class GenFormEbaCustEmailLog {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
        emailFirstTo: new FormControl<string | null>(null),
        emailTo: new FormControl<string | null>(null),
        emailFrom: new FormControl<string | null>(null),
        bodySize: new FormControl<string | null>(null),
        customerId: new FormControl<string | null>(null),
        emailType: new FormControl<string | null>(null),
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
