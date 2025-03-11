import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './guards/data-resolver.guard';
import { NavComponent } from './components/nav/nav.component';
import { CustomShellComponent } from './components/custom-shell/custom-shell.component';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent
    },
    {
        path: 'form/form1',
        component: CustomShellComponent,
        resolve: {
            formConf: DataResolver
        }
    },
    {
        path: 'form/:id',
        component: ShellComponent,
        resolve: {
            formConf: DataResolver
        }
    }
];

@NgModule({
    declarations: [
        ShellComponent,
        NavComponent,
        CustomShellComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ]
})
export class SuperdynamicModule { }
