import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  faCoffee = faCoffee;
  private curLang: string = 'vi';

  getCurLang(): string {
    return this.curLang;
  }

  setCurLang(value: string) {
    this.curLang = value;
  }
  ngOnInit() {
    this.translate
      .get('title_page')
      .subscribe((successMessage: string) => {

        this.titleService.setTitle(successMessage);
      });

    
  }
  constructor(private translate: TranslateService, private titleService: Title) {
    translate.setDefaultLang('vi');
    translate.use('vi');

  }
}
