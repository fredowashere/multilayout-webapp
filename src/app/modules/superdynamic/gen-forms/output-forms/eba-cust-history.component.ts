import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-history`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_HISTORY</h4>
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
                    name="table-name"
                    label="Table Name"
                    data-column-name="TABLE_NAME"
                    [ngControl]="form.controls.tableName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="component-id"
                    label="Component Id"
                    data-column-name="COMPONENT_ID"
                    [ngControl]="form.controls.componentId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="component-rowkey"
                    label="Component Rowkey"
                    data-column-name="COMPONENT_ROWKEY"
                    [ngControl]="form.controls.componentRowkey"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="column-name"
                    label="Column Name"
                    data-column-name="COLUMN_NAME"
                    [ngControl]="form.controls.columnName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="old-value"
                    label="Old Value"
                    data-column-name="OLD_VALUE"
                    [ngControl]="form.controls.oldValue"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="new-value"
                    label="New Value"
                    data-column-name="NEW_VALUE"
                    [ngControl]="form.controls.newValue"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="change-date"
                    label="Change Date"
                    data-column-name="CHANGE_DATE"
                    [ngControl]="form.controls.changeDate"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="changed-by"
                    label="Changed By"
                    data-column-name="CHANGED_BY"
                    [ngControl]="form.controls.changedBy"
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
export class GenFormEbaCustHistory {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
        tableName: new FormControl<string | null>(null),
        componentId: new FormControl<string | null>(null),
        componentRowkey: new FormControl<string | null>(null),
        columnName: new FormControl<string | null>(null),
        oldValue: new FormControl<string | null>(null),
        newValue: new FormControl<string | null>(null),
        changeDate: new FormControl<string | null>(null),
        changedBy: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
