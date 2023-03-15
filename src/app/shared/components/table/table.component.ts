import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, startWith, Subject, takeUntil, tap } from 'rxjs';
import { guid } from 'src/app/utils/uuid';
import { AppSortableHeader, compare, SortColumn, SortDirection, SortEvent } from '../../directives/sortable-header';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  destroy$ = new Subject<void>();

  _guid = 'app-table-' + guid();

  @Input("thead") thead!: TemplateRef<any>;
	@Input("tbody") tbody!: TemplateRef<any>;
  @Input("rowExpand") rowExpand!: TemplateRef<any>;
  @Input("tfoot") tfoot!: TemplateRef<any>;
  @Input("items") items!: any[];
  @Input("trackByFn") trackByFn = (index: number, item: any): any => item;


  @Input("paginated") paginated = false;
  @Input("pageSize") pageSize!: number;

  paginatedItems$ = new BehaviorSubject<any[]>([]);
	collectionSize!: number;
  page = 1;

  @ContentChildren(AppSortableHeader)
  private headers!: QueryList<AppSortableHeader>;
  lastColumn: SortColumn = '';
  lastDirection: SortDirection = '';
  sortedItems: any[] = [];

  @Input("searchable") searchable = false;
  searchInput = new FormControl('', { nonNullable: true });
  lastTerm = '';
  filteredItems: any[] = [];

  @Output("rowSelected") rowSelected = new EventEmitter<any>();
  @Output("rowDeselected") rowDeselected = new EventEmitter<any>();

  @Input("selectable") selectable = false;
  get selectedRows() {
    return this.paginatedItems$.getValue()
      .filter(item => item._selected);
  }
  
  ngOnInit() {

    if (!this.thead)
      throw Error("AppTable needs a thead template");

    if (!this.tbody)
      throw Error("AppTable needs a tbody template");

    if (!this.items)
      throw Error("AppTable needs the items array");

    if (this.items && !Array.isArray(this.items))
      throw Error("AppTable items must to be an array");

    this.collectionSize = this.items.length;

    if (this.paginated && !this.pageSize)
      throw Error("AppTable needs pageSize when paginated");

    if (!this.paginated)
      this.pageSize = this.items.length;

    this.searchInput.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        startWith(this.lastTerm),
        tap(term => {
          this.lastTerm = term;
          this.search();
        }),
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items.currentValue !== changes.items.previousValue)
      this.search();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  search() {

    this.filter();

    this.sort({
      column: this.lastColumn,
      direction: this.lastDirection
    });
  }

  filter() {

    this.filteredItems = this.items.filter(item => {

      const a = JSON.stringify(item).toLocaleLowerCase();
      const b = this.lastTerm.toLocaleLowerCase();

      return a.includes(b);
    });

    this.collectionSize = this.filteredItems.length;
  }

  sort({ column, direction }: SortEvent) {

    if (!this.headers) {
      this.sortedItems = this.filteredItems;
      this.paginate();
      return;
    }
    
		this.headers.forEach(header => {
      if (header.sortable !== column)
        header.direction = '';
    });

		if (direction === '' || column === '')
			this.sortedItems = this.filteredItems;
    else
			this.sortedItems = [ ...this.filteredItems ]
        .sort((a, b) => {
          const res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        });

    this.lastColumn = column;
    this.lastDirection = direction;

    this.paginate();
	}

  paginate() {

    this.sortedItems.forEach(item => item._selected = false);

		const sliceOfItems = this.sortedItems.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );

    this.paginatedItems$.next(sliceOfItems);
	}

  onRowSelect(item: any) {
    this.rowSelected.emit(item);
  }

  onRowDeselect(item: any) {
    this.rowDeselected.emit(item);
  }

  onEveryRowSelect() {
    const items = this.paginatedItems$.getValue();
    items.forEach(item => item._selected = true);
  }

  onEveryRowDeselect() {
    const items = this.paginatedItems$.getValue();
    items.forEach(item => item._selected = false);
  }
}
