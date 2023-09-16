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
import { LetDirective } from './directives/ng-let';
import { MonthpickerComponent } from './components/monthpicker/monthpicker.component';
import { LinearLoadingIndicator } from './components/linear-loading-indicator.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppChartComponent } from './components/chart.component';
import { RbacAllowDirective } from './directives/role-based-access-allow';
import { ImageUploaderPreviewComponent } from './components/image-uploader-preview/image-uploader-preview.component';



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
    MonthpickerComponent,
    AppChartComponent,
    ImageUploaderPreviewComponent
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
    RbacAllowDirective,
    LinearLoadingIndicator,
    CdkDropList,
    CdkDrag,
    ScrollingModule
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
    MonthpickerComponent,
    LinearLoadingIndicator,
    CdkDropList,
    CdkDrag,
    ScrollingModule,
    AppChartComponent,
    ImageUploaderPreviewComponent
  ]
})
export class SharedModule { }
