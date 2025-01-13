import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

const isPrimitive = (value: any) => {
    return (value === null || (typeof value !== 'object' && typeof value !== 'function'));
}

const example = `[
    {
        "id": 1,
        "name": "Alice Johnson",
        "age": 25,
        "email": "alice.johnson@example.com",
        "isActive": true
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "age": 30,
        "email": "bob.smith@example.com",
        "isActive": false
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "age": 28,
        "email": "charlie.brown@example.com",
        "isActive": true
    },
    {
        "id": 4,
        "name": "Diana Prince",
        "age": 32,
        "email": "diana.prince@example.com",
        "isActive": true
    }
]`;  

@Component({
    selector: 'appd-table-dynamic',
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    templateUrl: './table-dynamic.html',
    styles: [`
    :host ::ng-deep textarea {
        height: 300px;        
    }
`]
})
export class AppdTableDynamic {
    jsonInput = new FormControl(example);
    sub: Subscription;
    json: any[] = [];
    schema: string[] = [];

    constructor(
        private toaster: ToastService
    ) {
        this.sub = this.jsonInput.valueChanges
            .pipe(
                startWith(example),
                distinctUntilChanged(),
                debounceTime(400)
            )
            .subscribe(v => {
                this.schema = [];
                try {
                    const json = JSON.parse(v || "") as any[];
                    if (!Array.isArray(json)) {
                        return this.toaster.show("JSON does not contain an array.", { classname: "bg-danger text-white" });
                    }
                    for (const row of json) {
                        const rowKeys = Object.keys(row);
                        for (const key of rowKeys) {
                            if (!isPrimitive(row[key])) {
                                return this.toaster.show("Complex objects are not accepted within the JSON rows.", { classname: "bg-danger text-white" });
                            }
                            if (!this.schema.includes(key)) {
                                this.schema.push(key);
                            }
                        }
                    }
                    this.json = json;

                    console.log("Schema", this.schema);
                    console.log("JSON", this.json);
                } catch(ex) {
                    this.toaster.show("JSON cannot be parsed.", { classname: "bg-danger text-white" });
                }
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}