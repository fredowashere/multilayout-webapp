import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-product-uses`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_PRODUCT_USES</h4>
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
                    name="customer-id"
                    label="Customer Id"
                    data-column-name="CUSTOMER_ID"
                    [ngControl]="form.controls.customerId"
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
                    name="reference-type-ids"
                    label="Reference Type Ids"
                    data-column-name="REFERENCE_TYPE_IDS"
                    [ngControl]="form.controls.referenceTypeIds"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="internal-contact"
                    label="Internal Contact"
                    data-column-name="INTERNAL_CONTACT"
                    [ngControl]="form.controls.internalContact"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="customer-contact-id"
                    label="Customer Contact Id"
                    data-column-name="CUSTOMER_CONTACT_ID"
                    [ngControl]="form.controls.customerContactId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="reference-status-id"
                    label="Reference Status Id"
                    data-column-name="REFERENCE_STATUS_ID"
                    [ngControl]="form.controls.referenceStatusId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="valid-from"
                    label="Valid From"
                    data-column-name="VALID_FROM"
                    [ngControl]="form.controls.validFrom"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="valid-to"
                    label="Valid To"
                    data-column-name="VALID_TO"
                    [ngControl]="form.controls.validTo"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="comments"
                    label="Comments"
                    data-column-name="COMMENTS"
                    [ngControl]="form.controls.comments"
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
export class GenFormEbaCustProductUses {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
        customerId: new FormControl<string | null>(null),
        productId: new FormControl<string | null>(null),
        referenceTypeIds: new FormControl<string | null>(null),
        internalContact: new FormControl<string | null>(null),
        customerContactId: new FormControl<string | null>(null),
        referenceStatusId: new FormControl<string | null>(null),
        validFrom: new FormControl<string | null>(null),
        validTo: new FormControl<string | null>(null),
        comments: new FormControl<string | null>(null),
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
