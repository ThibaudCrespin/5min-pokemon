import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { StartModule } from './start/start.module';
import { AboutModule } from './about/about.module';

import { NavModule } from '../../common/nav/nav.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    StartModule,
    AboutModule,
    ScrollToModule.forRoot(),
    NavModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
