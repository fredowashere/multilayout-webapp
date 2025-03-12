import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-tags-type-sum`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_TAGS_TYPE_SUM</h4>
        </div>
        
        <div class="card-body">
            <div class="d-grid gap-3 mb-4">
                
                <app-input
                    name="tag"
                    label="Tag"
                    data-column-name="TAG"
                    [ngControl]="form.controls.tag"
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
                    name="tag-count"
                    label="Tag Count"
                    data-column-name="TAG_COUNT"
                    [ngControl]="form.controls.tagCount"
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
export class GenFormEbaCustTagsTypeSum {

    form = new FormGroup({
        tag: new FormControl<string | null>(null),
        contentType: new FormControl<string | null>(null),
        tagCount: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
