import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-issues`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_ISSUES</h4>
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
                    name="customer-id"
                    label="Customer Id"
                    data-column-name="CUSTOMER_ID"
                    [ngControl]="form.controls.customerId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="name"
                    label="Name"
                    data-column-name="NAME"
                    [ngControl]="form.controls.name"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="issue-type"
                    label="Issue Type"
                    data-column-name="ISSUE_TYPE"
                    [ngControl]="form.controls.issueType"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="status-id"
                    label="Status Id"
                    data-column-name="STATUS_ID"
                    [ngControl]="form.controls.statusId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="product-id"
                    label="Product Id"
                    data-column-name="PRODUCT_ID"
                    [ngControl]="form.controls.productId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="details"
                    label="Details"
                    data-column-name="DETAILS"
                    [ngControl]="form.controls.details"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="resolution"
                    label="Resolution"
                    data-column-name="RESOLUTION"
                    [ngControl]="form.controls.resolution"
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
export class GenFormEbaCustIssues {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        customerId: new FormControl<string | null>(null),
        name: new FormControl<string | null>(null),
        issueType: new FormControl<string | null>(null),
        statusId: new FormControl<string | null>(null),
        productId: new FormControl<string | null>(null),
        details: new FormControl<string | null>(null),
        resolution: new FormControl<string | null>(null),
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
