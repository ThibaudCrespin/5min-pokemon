import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StrategyComponent],
  exports: [StrategyComponent]
})
export class StrategyModule { }
