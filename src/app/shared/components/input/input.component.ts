import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map, merge, Observable, OperatorFunction, Subject, takeUntil, tap } from 'rxjs';
import { guid } from 'src/app/utils/uuid';

const supportedTypes = [
  "text",
  "textarea",
  "password",
  "number",
  "date",
  "time",
  "datetime",
  "select",
  "checkbox",
  "radio",
  "autocomplete",
  "tagger"
];

const defaultLimitTextFactory = (limit: number) => {
  return "Limited to " + limit + " items, type for more results.";
}

const defaultFormatter = (item: any): any => {
  if (typeof item === "object") {
    return Object.values(item).join(" ");
  }
  else if (typeof item === "string") {
    return item;
  }
  return "";
};

const defaultFilter = (term: string, item: any) => {
  if (typeof item === "object") {
    const stringifiedValues = JSON.stringify(Object.values(item)).toLowerCase();
    return stringifiedValues.includes(term.toLowerCase());
  }
  else if (typeof item === "string") {
    return item.toLowerCase().includes(term.toLowerCase());
  }
  else {
    return true;
  }
};

export interface SelectOption {
  value: any,
  text: string
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();

  guid!: string;
  _name!: string;

  @Input("floatingLabel") floatingLabel = false;
  @Input("feedback") feedback = true;
  @Input("disabled") disabled = false;
  @Input("type") type = "text";
  @Input("placeholder") placeholder = ' ';

  @Input("min") min?: any;
  @Input("max") max?: any;
  @Input("minlength") minLength?: any;
  @Input("maxlength") maxLength?: any;

  @Input("name") name!: string;
  @Input("label") label?: string;
  @Input("helper") helper!: string;
  @Input("mask") mask?: Array<string | RegExp>;
  @Input("ngControl") ngControl!: FormControl;
  
  // Autocomplete and tagger properties
  @Input("limit") limit: false | number = false;
  @Input("limitTextFactory") limitTextMaker = defaultLimitTextFactory;
  @Input("formatter") formatter = defaultFormatter;
  @Input("filter") filter = defaultFilter;
  @Input("template") template!: any;
  @Output("selectItem") selectItemEmitter = new EventEmitter<NgbTypeaheadSelectItemEvent>();

  @Input("customSearch") customSearch!: OperatorFunction<string, readonly any[]>;
  search!: OperatorFunction<string, readonly any[]>;
  instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  _autocompleteChoice!: any;
  set autocompleteChoice(value: any) {
    this._autocompleteChoice = value;
    this.autocompleteOnChange(value);
  }
  get autocompleteChoice() {
    return this._autocompleteChoice;
  }
  
  options$ = new BehaviorSubject<any[] | null>(null);
  @Input("options")
  set options(options: any[] | null) {
    this.options$.next(options);
  };
  get options() {
    return this.options$.getValue();
  };

  tags: any[] = [];

  ngOnInit() {

    this.handleErrors();

    this.guid = guid();
    this._name = this.name + "-" + this.guid;

    this.addOptionIds();

    if (this.type === "autocomplete") {
      this.setAutocompleteDefaultValue();
      this.setAutocompleteSearch();
      this.setupAutocompleteReactivity();
    }

    if (this.type === "tagger") {
      this.setTaggerDefault();
      this.setAutocompleteSearch();
      this.setupAutocompleteReactivity();
    }

    if (["autocomplete", "tagger"].includes(this.type) && this.limit)
      this.appendLimitExplainerStylesheet();
  }

  ngOnDestroy() {
    this.destroy$.next();

    if (["autocomplete", "tagger"].includes(this.type) && this.limit)
      this.removeLimitExplainerStylesheet();
  }

  appendLimitExplainerStylesheet() {

    const css = `
      input[role="combobox"].autocomplete-${this.guid} + ngb-typeahead-window::before {
        content: "${this.limitTextMaker(this.limit as number)}";
        white-space: pre;
        color: #888;
        display: block;
        font-size: 0.9rem;
        padding: 0 10px 5px;
        text-align: center;
      }
    `;

    const style = document.createElement("style");
    style.id = "autocomplete-" + this.guid;
    style.appendChild(document.createTextNode(css));

    const head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
  }

  removeLimitExplainerStylesheet() {
    const el = document.getElementById("autocomplete-" + this.guid)!;
    el.remove();
  }

  handleErrors() {

    if (!supportedTypes.includes(this.type)) {
      throw Error("Type " + this.type + " is not supported.");
    }

    if (!this.ngControl) {
      throw Error("app-input needs a ngControl");
    }

    if (!this.name) {
      throw Error("app-input needs a name");
    }

    if (this.type === "select" || this.type === "radio") {
      if (!this.options || this.options && !Array.isArray(this.options)) {
        throw Error("Select and radio need the options array");
      }
    }

    if (this.type === "autocomplete" && !this.customSearch) {
      if (!this.options || this.options && !Array.isArray(this.options)) {
        throw Error("Autocomplete without a custom search needs the options array");
      }
    }
  }

  addOptionIds() {

    // Add an id to differentiate radios
    this.options$
      .pipe(
        takeUntil(this.destroy$),
        tap(options => {
          if (this.type === "radio" && options && Array.isArray(options)) {
            options.forEach(opt => opt._id = this.name + "-" + guid());
          }
        })
      )
      .subscribe();
  }

  setAutocompleteSearch() {

    this.search = (text$: Observable<string>) => {

      const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
      const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
      const inputFocus$ = this.focus$;
      
      const combined$ = merge(debouncedText$, inputFocus$, clicksWithClosedPopup$);

      let searchObs$;
      if (this.customSearch) {
        searchObs$ = this.customSearch(combined$);
      }
      else {
        searchObs$ = combined$
          .pipe(
            map((term: string) => {

              if (this.options) {
                return this.options.filter(value => this.filter(term, value));
              }

              return [];
            })
          );
      }

      if (this.limit) {
        return searchObs$
          .pipe(
            map(array => array.slice(0, this.limit as number))
          );
      }

      return searchObs$;
    };
  };

  setAutocompleteDefaultValue() {
    if (this.ngControl.value) {
      this.autocompleteChoice = this.ngControl.value;
    }
  }

  setupAutocompleteReactivity() {
    this.ngControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(value => this._autocompleteChoice = value)
      )
      .subscribe();
  }

  autocompleteOnChange(value: any) {

    const autocompleteInput = document.getElementById(this._name);

    // Add/remove Bootstrap is-invalid class
    if (this.isInvalid()) {
      autocompleteInput?.classList.add("is-invalid");
    }
    else {
      autocompleteInput?.classList.remove("is-invalid");
    }

    if (this.type !== "tagger" && this.ngControl.value !== value) {
      this.ngControl.setValue(value);
    }
  }

  selectItem(selectEvent: NgbTypeaheadSelectItemEvent) {
    this.selectItemEmitter.emit(selectEvent);
  }

  setTaggerDefault() {
    if (this.ngControl.value) {
      this.tags = this.ngControl.value;
    }
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

    this.ngControl.setValue(this.tags);
    
    setTimeout(() => this._autocompleteChoice = null, 0);
  }

  removeTag(item: any) {

    const itemIndex = this.tags.lastIndexOf(item);

    if (itemIndex > -1) {

      this.tags = [
        ...this.tags.slice(0, itemIndex),
        ...this.tags.slice(itemIndex + 1)
      ];

      this.ngControl.setValue(this.tags);

      setTimeout(() => this._autocompleteChoice = null, 0);
    }
  }

  markAsTouched() {
    this.ngControl.markAsTouched();
  }
}
