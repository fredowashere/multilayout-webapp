import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-clicks`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_CLICKS</h4>
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
                    name="cust-id"
                    label="Cust Id"
                    data-column-name="CUST_ID"
                    [ngControl]="form.controls.custId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="app-username"
                    label="App Username"
                    data-column-name="APP_USERNAME"
                    [ngControl]="form.controls.appUsername"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="view-timestamp"
                    label="View Timestamp"
                    data-column-name="VIEW_TIMESTAMP"
                    [ngControl]="form.controls.viewTimestamp"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="app-session"
                    label="App Session"
                    data-column-name="APP_SESSION"
                    [ngControl]="form.controls.appSession"
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
export class GenFormEbaCustClicks {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        custId: new FormControl<string | null>(null),
        appUsername: new FormControl<string | null>(null),
        viewTimestamp: new FormControl<string | null>(null),
        appSession: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
