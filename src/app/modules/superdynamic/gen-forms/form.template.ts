import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-{{tableNameHyphenated}}`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table {{tableName}}</h4>
        </div>
        
        <div class="card-body">
            <div class="d-grid gap-3 mb-4">
                {{formHtmlContent}}
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
export class GenForm{{tableNamePascalized}} {

    form = new FormGroup({
{{formTsContent}}
    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
