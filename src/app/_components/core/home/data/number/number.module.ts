import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [NumberComponent],
  exports: [NumberComponent]
})
export class NumberModule { }
