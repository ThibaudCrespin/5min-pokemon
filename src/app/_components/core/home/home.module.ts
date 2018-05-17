import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StartModule } from './start/start.module';

@NgModule({
  imports: [
    CommonModule,
    StartModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
