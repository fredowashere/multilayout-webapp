import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-activity-files`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_ACTIVITY_FILES</h4>
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
                    name="activity-id"
                    label="Activity Id"
                    data-column-name="ACTIVITY_ID"
                    [ngControl]="form.controls.activityId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="file-name"
                    label="File Name"
                    data-column-name="FILE_NAME"
                    [ngControl]="form.controls.fileName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="file-mimetype"
                    label="File Mimetype"
                    data-column-name="FILE_MIMETYPE"
                    [ngControl]="form.controls.fileMimetype"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="file-charset"
                    label="File Charset"
                    data-column-name="FILE_CHARSET"
                    [ngControl]="form.controls.fileCharset"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="file-last-update"
                    label="File Last Update"
                    data-column-name="FILE_LAST_UPDATE"
                    [ngControl]="form.controls.fileLastUpdate"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="file-blob"
                    label="File Blob"
                    data-column-name="FILE_BLOB"
                    [ngControl]="form.controls.fileBlob"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="file-comments"
                    label="File Comments"
                    data-column-name="FILE_COMMENTS"
                    [ngControl]="form.controls.fileComments"
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
export class GenFormEbaCustActivityFiles {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
        activityId: new FormControl<string | null>(null),
        fileName: new FormControl<string | null>(null),
        fileMimetype: new FormControl<string | null>(null),
        fileCharset: new FormControl<string | null>(null),
        fileLastUpdate: new FormControl<string | null>(null),
        fileBlob: new FormControl<string | null>(null),
        fileComments: new FormControl<string | null>(null),
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
