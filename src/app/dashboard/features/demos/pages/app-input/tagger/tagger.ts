import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay, Observable, of, OperatorFunction, switchMap, tap } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { flavorList } from './mock';

@Component({
	selector: 'appd-tagger',
	standalone: true,
    imports: [SharedModule, JsonPipe, NgIf],
	templateUrl: './tagger.html',
})
export class AppdTagger {

    flavorList = flavorList;
    flavorsFormatter = (flavor: any) => flavor.name;
    flavorsFilter = (term: string, flavor: any) => flavor.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    flavors = new FormControl();
    flavorsWithDuplicates = new FormControl();

    layerNodes = [ "25", "50", "100" ];
    layerNodesFormatter = (layerNodes: any, index: number) =>
        `${ (index !== undefined) ? "Layer " + (index + 1) + " has " : "" }${layerNodes} nodes`;
    layerNodesFilter = (term: string, layerNodes: any) => layerNodes.toLowerCase().indexOf(term.toLowerCase()) > -1;
    layerNodesCtrl = new FormControl();

    freeTagger = new FormControl();
}

