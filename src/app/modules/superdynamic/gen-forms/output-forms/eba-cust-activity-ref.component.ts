import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-activity-ref`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_ACTIVITY_REF</h4>
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
                    name="activity-id"
                    label="Activity Id"
                    data-column-name="ACTIVITY_ID"
                    [ngControl]="form.controls.activityId"
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
                    name="contact-id"
                    label="Contact Id"
                    data-column-name="CONTACT_ID"
                    [ngControl]="form.controls.contactId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="activity-date"
                    label="Activity Date"
                    data-column-name="ACTIVITY_DATE"
                    [ngControl]="form.controls.activityDate"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="owner"
                    label="Owner"
                    data-column-name="OWNER"
                    [ngControl]="form.controls.owner"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="location"
                    label="Location"
                    data-column-name="LOCATION"
                    [ngControl]="form.controls.location"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="notes"
                    label="Notes"
                    data-column-name="NOTES"
                    [ngControl]="form.controls.notes"
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
export class GenFormEbaCustActivityRef {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        activityId: new FormControl<string | null>(null),
        customerId: new FormControl<string | null>(null),
        contactId: new FormControl<string | null>(null),
        activityDate: new FormControl<string | null>(null),
        owner: new FormControl<string | null>(null),
        location: new FormControl<string | null>(null),
        notes: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
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
