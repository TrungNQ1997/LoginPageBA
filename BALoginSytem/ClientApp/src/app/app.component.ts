import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  faCoffee = faCoffee;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('vi');
    translate.use('vi');
  }
}
