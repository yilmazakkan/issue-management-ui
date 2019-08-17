import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['tr', 'en', 'de', 'fr']);
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|tr|fr| de/) ? browserLang : 'en');

  }

  ngOnInit() {
  }

}
