import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';

import { ChartModule } from 'angular-highcharts';
import { NumberModule } from './number/number.module';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    NumberModule
  ],
  declarations: [DataComponent],
  exports: [DataComponent]
})
export class DataModule { }
