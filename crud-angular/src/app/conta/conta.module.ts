import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogOperationComponent } from './dialog-operation/dialog-operation.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DialogOperationComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class ContaModule { }
