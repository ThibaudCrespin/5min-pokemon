import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) { }

  go() {
    const config: ScrollToConfigOptions = {
      target: 'about',
      duration: 1500,
    };

    this.scrollToService.scrollTo(config);
  }

  ngOnInit() {
  }

}
