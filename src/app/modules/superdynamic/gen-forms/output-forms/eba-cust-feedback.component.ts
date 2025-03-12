import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-feedback`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_FEEDBACK</h4>
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
                    name="application-id"
                    label="Application Id"
                    data-column-name="APPLICATION_ID"
                    [ngControl]="form.controls.applicationId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="page-id"
                    label="Page Id"
                    data-column-name="PAGE_ID"
                    [ngControl]="form.controls.pageId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="feedback"
                    label="Feedback"
                    data-column-name="FEEDBACK"
                    [ngControl]="form.controls.feedback"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="response"
                    label="Response"
                    data-column-name="RESPONSE"
                    [ngControl]="form.controls.response"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="type-id"
                    label="Type Id"
                    data-column-name="TYPE_ID"
                    [ngControl]="form.controls.typeId"
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
export class GenFormEbaCustFeedback {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        applicationId: new FormControl<string | null>(null),
        pageId: new FormControl<string | null>(null),
        feedback: new FormControl<string | null>(null),
        response: new FormControl<string | null>(null),
        typeId: new FormControl<string | null>(null),
        status: new FormControl<string | null>(null),
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
