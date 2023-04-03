import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay, Observable, of, OperatorFunction, switchMap, tap } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { flavorList, states, bestBooks } from './mock';

@Component({
	selector: 'appd-autocomplete',
	standalone: true,
    imports: [SharedModule, JsonPipe, NgIf],
	templateUrl: './autocomplete.html',
})
export class AppdAutocomplete {

    statesFormatter = (state: any) => state.name;
    statesFilter = (term: string, state: any) => state.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    onlyFewStatesTextFactory = (limit: number) => "I'm only showing " + limit + " results, type for more!";
    state = new FormControl();
    states = states; // imported from autocomplete/mock

    flavorsFormatter = (flavor: any) => flavor.name;
    flavorsFilter = (term: string, flavor: any) => flavor.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    flavors = new FormControl();
    flavorList = flavorList; // imported from autocomplete/mock

    searching = false;

    booksFormatter = (book: any) => book.title;
    customBookSearch: OperatorFunction<string, readonly any[]> = (debouncedText$: Observable<string>) => {
        return debouncedText$
            .pipe(
                tap(() => this.searching = true),
                switchMap(term => {

                    const filteredBooks = bestBooks.filter(b =>
                        b.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
                    );

                    return of(filteredBooks).pipe(delay(100 + Math.random() * 1000)); // Simulate HTTP request with delay
                }),
                tap(() => this.searching = false),
            );
    }
    book = new FormControl();
}


