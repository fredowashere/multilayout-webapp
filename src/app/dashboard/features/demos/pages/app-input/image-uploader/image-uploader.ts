import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay, Observable, of, OperatorFunction, switchMap, tap } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'appd-image-uploader',
    standalone: true,
    imports: [SharedModule, JsonPipe, NgIf],
    templateUrl: './image-uploader.html',
})
export class AppdImageUploader {

    base64: string | null = null;

}
