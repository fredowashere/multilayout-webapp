import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-notifications`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_NOTIFICATIONS</h4>
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
                    name="notification-name"
                    label="Notification Name"
                    data-column-name="NOTIFICATION_NAME"
                    [ngControl]="form.controls.notificationName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="notification-description"
                    label="Notification Description"
                    data-column-name="NOTIFICATION_DESCRIPTION"
                    [ngControl]="form.controls.notificationDescription"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="notification-type"
                    label="Notification Type"
                    data-column-name="NOTIFICATION_TYPE"
                    [ngControl]="form.controls.notificationType"
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
                    name="display-from"
                    label="Display From"
                    data-column-name="DISPLAY_FROM"
                    [ngControl]="form.controls.displayFrom"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="display-until"
                    label="Display Until"
                    data-column-name="DISPLAY_UNTIL"
                    [ngControl]="form.controls.displayUntil"
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
                    name="created"
                    label="Created"
                    data-column-name="CREATED"
                    [ngControl]="form.controls.created"
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
                    name="updated"
                    label="Updated"
                    data-column-name="UPDATED"
                    [ngControl]="form.controls.updated"
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
export class GenFormEbaCustNotifications {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
        notificationName: new FormControl<string | null>(null),
        notificationDescription: new FormControl<string | null>(null),
        notificationType: new FormControl<string | null>(null),
        displaySequence: new FormControl<string | null>(null),
        displayFrom: new FormControl<string | null>(null),
        displayUntil: new FormControl<string | null>(null),
        createdBy: new FormControl<string | null>(null),
        created: new FormControl<string | null>(null),
        updatedBy: new FormControl<string | null>(null),
        updated: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
