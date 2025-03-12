import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-errors`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_ERRORS</h4>
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
                    name="err-time"
                    label="Err Time"
                    data-column-name="ERR_TIME"
                    [ngControl]="form.controls.errTime"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="app-id"
                    label="App Id"
                    data-column-name="APP_ID"
                    [ngControl]="form.controls.appId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="app-page-id"
                    label="App Page Id"
                    data-column-name="APP_PAGE_ID"
                    [ngControl]="form.controls.appPageId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="app-user"
                    label="App User"
                    data-column-name="APP_USER"
                    [ngControl]="form.controls.appUser"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="user-agent"
                    label="User Agent"
                    data-column-name="USER_AGENT"
                    [ngControl]="form.controls.userAgent"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="ip-address"
                    label="Ip Address"
                    data-column-name="IP_ADDRESS"
                    [ngControl]="form.controls.ipAddress"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="ip-address2"
                    label="Ip Address2"
                    data-column-name="IP_ADDRESS2"
                    [ngControl]="form.controls.ipAddress2"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="message"
                    label="Message"
                    data-column-name="MESSAGE"
                    [ngControl]="form.controls.message"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="page-item-name"
                    label="Page Item Name"
                    data-column-name="PAGE_ITEM_NAME"
                    [ngControl]="form.controls.pageItemName"
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
                    name="column-alias"
                    label="Column Alias"
                    data-column-name="COLUMN_ALIAS"
                    [ngControl]="form.controls.columnAlias"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="row-num"
                    label="Row Num"
                    data-column-name="ROW_NUM"
                    [ngControl]="form.controls.rowNum"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="apex-error-code"
                    label="Apex Error Code"
                    data-column-name="APEX_ERROR_CODE"
                    [ngControl]="form.controls.apexErrorCode"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="ora-sqlcode"
                    label="Ora Sqlcode"
                    data-column-name="ORA_SQLCODE"
                    [ngControl]="form.controls.oraSqlcode"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="ora-sqlerrm"
                    label="Ora Sqlerrm"
                    data-column-name="ORA_SQLERRM"
                    [ngControl]="form.controls.oraSqlerrm"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="error-backtrace"
                    label="Error Backtrace"
                    data-column-name="ERROR_BACKTRACE"
                    [ngControl]="form.controls.errorBacktrace"
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
export class GenFormEbaCustErrors {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        errTime: new FormControl<string | null>(null),
        appId: new FormControl<string | null>(null),
        appPageId: new FormControl<string | null>(null),
        appUser: new FormControl<string | null>(null),
        userAgent: new FormControl<string | null>(null),
        ipAddress: new FormControl<string | null>(null),
        ipAddress2: new FormControl<string | null>(null),
        message: new FormControl<string | null>(null),
        pageItemName: new FormControl<string | null>(null),
        regionId: new FormControl<string | null>(null),
        columnAlias: new FormControl<string | null>(null),
        rowNum: new FormControl<string | null>(null),
        apexErrorCode: new FormControl<string | null>(null),
        oraSqlcode: new FormControl<string | null>(null),
        oraSqlerrm: new FormControl<string | null>(null),
        errorBacktrace: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
