import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, interval, map, merge, Observable, OperatorFunction, Subject, takeUntil, tap } from 'rxjs';
import { guid } from 'src/app/utils/uuid';

const defaultFormatter = (item: any) => item; 
const defaultFilter = (value: any, index?: number, array?: any[]) => true;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {

  destroy$ = new Subject<void>();

  @Input("floatingLabel") floatingLabel = false;
  @Input("feedback") feedback = true;
  @Input("disabled") disabled = false;
  @Input("type") type = "text";
  @Input("placeholder") placeholder = ' ';
  @Input("size") size: 'sm' | 'md' | 'lg' = 'md';

  @Input("min") min?: any;
  @Input("max") max?: any;
  @Input("maxlength") maxLength?: any;
  
  // Autocomplete and tagger properties
  instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  autocompleteSearch!: OperatorFunction<string, readonly any[]>;
  autocompleteChoice!: any;

  @Input("formatter") formatter = defaultFormatter;
  @Input("filter") filter = defaultFilter;
  @Input("template") template!: any;
  
  options$ = new BehaviorSubject<any[]>([]);
  @Input("options")
  set options(options: any[]) {
    this.options$.next(options);
  };
  get options() {
    return this.options$.getValue();
  };

  tags: any[] = [];

  // General properties
  _name!: string;
  @Input("ngControl") ngControl!: FormControl;
  @Input("helper") helper!: string;
  @Input("name") name!: string;
  @Input("mask") mask?: Array<string | RegExp>;
  @Input("label") label?: string;
  
  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.handleErrors();

    this._name = this.name + '-' + guid();

    this.addOptionIds();

    if (this.type === 'autocomplete') {
      this.setAutocompleteDefault();
      this.setupAutocompleteSearch();
      this.setupAutocompleteWatch();
    }

    if (this.type === 'tagger') {
      this.setTaggerDefault();
      this.setupAutocompleteSearch();
      this.setupTaggerWatch();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  handleErrors() {

    if (!this.ngControl)
      throw Error('app-input needs a ngControl');

    if (!this.name)
      throw Error('app-input needs a name');

    if (this.type === 'select' || this.type === 'radio' || this.type === 'autocomplete')
      if (!this.options || this.options && !Array.isArray(this.options))
        throw Error('Select, radio and autocomplete need the options array');

    if (this.type === 'autocomplete' && this.formatter == defaultFormatter)
      throw Error('Autocomplete needs a formatter function');

    if (this.type === 'autocomplete' && this.filter === defaultFilter)
      throw Error('Autocomplete needs a filter function');
  }

  addOptionIds() {

    // Add an id to differentiate radios
    this.options$
      .pipe(
        takeUntil(this.destroy$),
        tap(options => {

          if (options && Array.isArray(options))
            options.forEach(opt =>
              opt.id = this.name + '-' + guid()
            );
        })
      )
      .subscribe();
  }

  setAutocompleteDefault() {
    if (this.ngControl.value)
      this.autocompleteChoice = this.ngControl.value;
  }

  setupAutocompleteSearch() {

    this.autocompleteSearch = (text$: Observable<string>) => {

      const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
      const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
      const inputFocus$ = this.focus$;

      return merge(
        debouncedText$,
        inputFocus$,
        clicksWithClosedPopup$
      )
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(200),
        distinctUntilChanged(),
        map((term) => {
          return this.options.filter(value =>
            this.filter(term, value)
          );
        }),
      );
    };
  }

  setupAutocompleteWatch() {

    // Watch autocompleteChoice for changes
    interval(100)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => {

          const autocompleteInput = document.getElementById(this._name);

          // Add/remove Bootstrap is-invalid class
          if (this.isInvalid())
            autocompleteInput?.classList.add('is-invalid');
          else
            autocompleteInput?.classList.remove('is-invalid');
        }),
        map(() => this.autocompleteChoice),
        distinctUntilChanged(),
        tap(choice =>
          this.ngControl.setValue(choice) // Set control value
        )
      )
      .subscribe();
  }

  setTaggerDefault() {
    if (this.ngControl.value) {
      this.tags = this.ngControl.value;
    }
  }

  setupTaggerWatch() {

    // Watch tags for changes
    interval(100)
    .pipe(
      takeUntil(this.destroy$),
      map(() => this.tags),
      distinctUntilChanged(),
      tap(tags =>
        this.ngControl.setValue(tags) // Set control value
      )
    )
    .subscribe();
  }

  isInvalid() {
    return this.ngControl.touched && this.ngControl.errors;
  }

  onAutocompleteClick(instance: NgbTypeahead, event: any) {
    this.instance = instance;
    this.click$.next(event.target.value);
  }

  taggerChoiceSelected(value: any) {

    this.tags = [ ...this.tags, value.item ];
    
    this.autocompleteChoice = '';
    this.cdr.detectChanges();
  }

  removeTag(item: any) {

    const itemIndex = this.tags.lastIndexOf(item);

    if (itemIndex > -1)
      this.tags = [
        ...this.tags.slice(0, itemIndex),
        ...this.tags.slice(itemIndex + 1)
      ];
  }

  markAsTouched() {
    this.ngControl.markAsTouched();
  }
}
