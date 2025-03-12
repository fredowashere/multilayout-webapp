import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-tags`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_TAGS</h4>
        </div>
        
        <div class="card-body">
            <div class="d-grid gap-3 mb-4">
                
                <app-input
                    name="tag-id"
                    label="Tag Id"
                    data-column-name="TAG_ID"
                    [ngControl]="form.controls.tagId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="tag"
                    label="Tag"
                    data-column-name="TAG"
                    [ngControl]="form.controls.tag"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="content-id"
                    label="Content Id"
                    data-column-name="CONTENT_ID"
                    [ngControl]="form.controls.contentId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="content-type"
                    label="Content Type"
                    data-column-name="CONTENT_TYPE"
                    [ngControl]="form.controls.contentType"
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
export class GenFormEbaCustTags {

    form = new FormGroup({
        tagId: new FormControl<string | null>(null),
        tag: new FormControl<string | null>(null),
        contentId: new FormControl<string | null>(null),
        contentType: new FormControl<string | null>(null),
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
