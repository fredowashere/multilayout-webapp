import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil, tap } from 'rxjs';
import { blur } from 'src/app/utils/dom';

export interface MonthpickerStruct {
  year: number;
  month: number;
}

@Component({
  selector: 'app-monthpicker',
  templateUrl: './monthpicker.component.html',
  styleUrls: ['./monthpicker.component.css']
})
export class MonthpickerComponent {

  @ViewChild("dd") dropdown!: NgbDropdown;
  @ViewChild("mp") monthpicker!: ElementRef<HTMLInputElement>;

  @Input("ngControl") ngControl!: FormControl<MonthpickerStruct | null>;
  @Input("size") size: 'sm' | 'md' | 'lg' = 'md';
  @Input("name") name!: string;
  @Input("label") label?: string;
  @Input("placeholder") placeholder = "yyyy-mm";
  @Input("helper") helper?: string;
  @Input("disabled") disabled = false;
  @Input("floatingLabel") floatingLabel = false;

  minDate?: MonthpickerStruct | null;
  @Input("minDate")
  set _minDate(v: MonthpickerStruct | null) {
    this.minDate = v;
    this.updateMonthpickerModel();
  }

  maxDate?: MonthpickerStruct | null;
  @Input("maxDate")
  set _maxDate(v: MonthpickerStruct | null) {
    this.maxDate = v;
    this.updateMonthpickerModel();
  }

  @Output("monthSelect") monthSelectEmitter = new EventEmitter<MonthpickerStruct | null>();

  years: { selected: boolean, year: number }[] = [];

  months: { disabled: boolean, current: boolean, number: number, name: string }[] = [];

  today = new Date();
  currYear = this.today.getFullYear();
  currMonth = this.today.getMonth();

  year = this.currYear;

  touched = false;
  destroy$ = new Subject<void>();

  blur = blur;

  ngOnInit() {
    this.handleErrors();
    this.updateMonthpickerModel();
  }

  ngAfterViewInit() {

    if (this.ngControl.value) {
      this.setMonthpickerInputValue(this.ngControl.value);
    }

    this.ngControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(this.setMonthpickerInputValue.bind(this))
      )
      .subscribe();
  }

  setMonthpickerInputValue(value: MonthpickerStruct | null) {

    if (!value) {
      this.monthpicker.nativeElement.value = "";
      return;
    }
    
    const { year, month } = value;
    this.monthpicker.nativeElement.value = year + "-" + month;
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  handleErrors() {

    if (!this.ngControl)
      throw Error('app-monthpicker needs a ngControl');

    if (!this.name)
      throw Error('app-monthpicker needs a name');
  }

  updateMonthpickerModel() {
    this.createYears();
    this.createMonths();
  }

  createYears() {

    this.years = [];

    const start = this.minDate?.year || this.currYear - 20;
    const end = this.maxDate?.year || this.currYear + 20;

    for (let year = start; year <= end; year++) {
      this.years.push({
        selected: year === this.currYear,
        year
      });
    }
  }

  createMonths() {

    this.months = [];

    for (let month = 0; month < 12; month++) {

      const date = new Date(this.year, month, 1);
      const monthName = date.toLocaleString('default', { month: 'short' });

      const aboveMax = this.maxDate && (this.maxDate.year < this.year || this.maxDate.year === this.year && this.maxDate.month < month + 1) || false;
      const belowMin = this.minDate && (this.minDate.year > this.year || this.minDate.year === this.year && this.minDate.month > month + 1) || false;

      this.months.push({
        disabled: aboveMax || belowMin,
        current: this.year === this.currYear && month === this.currMonth,
        number: month + 1,
        name: monthName
      });
    }
  }

  onYearSelected(evt: any) {
    this.year = +evt.target.value;
    this.months = [];
    this.createMonths();
  }

  onMonthSelected(monthNumber: number) {
    this.touched = true;
    const selection = { year: this.year, month: monthNumber };
    this.monthSelectEmitter.emit(selection);
    this.ngControl.setValue(selection);
    this.dropdown.close();
  }

  reset(evt: Event) {

    evt.stopPropagation();

    if (this.disabled)
      return;

    this.ngControl.setValue(null);
  }

  openDropdown(evt: Event) {

    evt.stopPropagation();

    if (this.disabled)
      return;
    
    this.dropdown.open();
  }
}
