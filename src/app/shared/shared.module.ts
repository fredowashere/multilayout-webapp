import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackCasePipe } from './pipes/hack-case.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { BreadcrumbRouterComponent } from './components/breadcrumb-router/breadcrumb-router.component';
import { CopyPasterComponent } from './components/copy-paster/copy-paster.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { SearchRouterComponent } from './components/search-router/search-router.component';
import { TextMaskModule } from './directives/text2mask';
import { TableComponent } from './components/table/table.component';
import { AppSortableHeader } from './directives/sortable-header';
import { RbacAllowDirective } from './directives/role-based-access-allow';
import { LetDirective } from './directives/ng-let';
import { MonthpickerComponent } from './components/monthpicker/monthpicker.component';



@NgModule({
  declarations: [
    HackCasePipe,
    BackButtonComponent,
    BreadcrumbRouterComponent,
    CopyPasterComponent,
    HighlightPipe,
    InputComponent,
    SearchRouterComponent,
    TableComponent,
    LetDirective,
    MonthpickerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TextMaskModule,
    AppSortableHeader,
    RbacAllowDirective
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HackCasePipe,
    BackButtonComponent,
    BreadcrumbRouterComponent,
    CopyPasterComponent,
    HighlightPipe,
    InputComponent,
    SearchRouterComponent,
    TextMaskModule,
    TableComponent,
    AppSortableHeader,
    RbacAllowDirective,
    LetDirective,
    MonthpickerComponent
  ]
})
export class SharedModule { }
