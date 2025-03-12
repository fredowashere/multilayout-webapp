import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-countries`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_COUNTRIES</h4>
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
                    name="country-code"
                    label="Country Code"
                    data-column-name="COUNTRY_CODE"
                    [ngControl]="form.controls.countryCode"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="country-name"
                    label="Country Name"
                    data-column-name="COUNTRY_NAME"
                    [ngControl]="form.controls.countryName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="region-id"
                    label="Region Id"
                    data-column-name="REGION_ID"
                    [ngControl]="form.controls.regionId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="display-yn"
                    label="Display Yn"
                    data-column-name="DISPLAY_YN"
                    [ngControl]="form.controls.displayYn"
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
export class GenFormEbaCustCountries {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        countryCode: new FormControl<string | null>(null),
        countryName: new FormControl<string | null>(null),
        regionId: new FormControl<string | null>(null),
        displayYn: new FormControl<string | null>(null),
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
