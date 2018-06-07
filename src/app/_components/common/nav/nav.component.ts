import { Component, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) { }

  go(_target: any) {
    const config: ScrollToConfigOptions = {
      target: _target,
      offset: -78
    };

    this.scrollToService.scrollTo(config);
  }

  ngOnInit() {
  }

}
