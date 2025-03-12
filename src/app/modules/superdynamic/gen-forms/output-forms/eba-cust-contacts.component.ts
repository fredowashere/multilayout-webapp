import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-contacts`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_CONTACTS</h4>
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
                    name="name"
                    label="Name"
                    data-column-name="NAME"
                    [ngControl]="form.controls.name"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="title"
                    label="Title"
                    data-column-name="TITLE"
                    [ngControl]="form.controls.title"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="company"
                    label="Company"
                    data-column-name="COMPANY"
                    [ngControl]="form.controls.company"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="address-line1"
                    label="Address Line1"
                    data-column-name="ADDRESS_LINE1"
                    [ngControl]="form.controls.addressLine1"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="address-line2"
                    label="Address Line2"
                    data-column-name="ADDRESS_LINE2"
                    [ngControl]="form.controls.addressLine2"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="city"
                    label="City"
                    data-column-name="CITY"
                    [ngControl]="form.controls.city"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="state"
                    label="State"
                    data-column-name="STATE"
                    [ngControl]="form.controls.state"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="country"
                    label="Country"
                    data-column-name="COUNTRY"
                    [ngControl]="form.controls.country"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="zip"
                    label="Zip"
                    data-column-name="ZIP"
                    [ngControl]="form.controls.zip"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="email"
                    label="Email"
                    data-column-name="EMAIL"
                    [ngControl]="form.controls.email"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="phone"
                    label="Phone"
                    data-column-name="PHONE"
                    [ngControl]="form.controls.phone"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="cell-phone"
                    label="Cell Phone"
                    data-column-name="CELL_PHONE"
                    [ngControl]="form.controls.cellPhone"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="fax"
                    label="Fax"
                    data-column-name="FAX"
                    [ngControl]="form.controls.fax"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="contact-type-id"
                    label="Contact Type Id"
                    data-column-name="CONTACT_TYPE_ID"
                    [ngControl]="form.controls.contactTypeId"
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
                    name="facebook"
                    label="Facebook"
                    data-column-name="FACEBOOK"
                    [ngControl]="form.controls.facebook"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="linkedin"
                    label="Linkedin"
                    data-column-name="LINKEDIN"
                    [ngControl]="form.controls.linkedin"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="twitter"
                    label="Twitter"
                    data-column-name="TWITTER"
                    [ngControl]="form.controls.twitter"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="tags"
                    label="Tags"
                    data-column-name="TAGS"
                    [ngControl]="form.controls.tags"
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
export class GenFormEbaCustContacts {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
        customerId: new FormControl<string | null>(null),
        name: new FormControl<string | null>(null),
        title: new FormControl<string | null>(null),
        company: new FormControl<string | null>(null),
        addressLine1: new FormControl<string | null>(null),
        addressLine2: new FormControl<string | null>(null),
        city: new FormControl<string | null>(null),
        state: new FormControl<string | null>(null),
        country: new FormControl<string | null>(null),
        zip: new FormControl<string | null>(null),
        email: new FormControl<string | null>(null),
        phone: new FormControl<string | null>(null),
        cellPhone: new FormControl<string | null>(null),
        fax: new FormControl<string | null>(null),
        contactTypeId: new FormControl<string | null>(null),
        notes: new FormControl<string | null>(null),
        facebook: new FormControl<string | null>(null),
        linkedin: new FormControl<string | null>(null),
        twitter: new FormControl<string | null>(null),
        tags: new FormControl<string | null>(null),
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
