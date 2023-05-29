import { Component } from '@angular/core';

 
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  isExpanded = false;
  dropDownData = [
    { seo_val: "vi", text_val: "Tiếng Việt", png:"http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg" },
    { seo_val: "en", text_val: "English", png:"http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg" }
  ]
 collapse() {
   this.isExpanded = false;
   this.translateService.use('vi');
  }

  onOptionsSelected(value: string) {
    this.translateService.use(value);
  }

 toggle() {
   this.isExpanded = !this.isExpanded;
   this.translateService.use('en');
}

  setLanguage(lang: any) {
    this.translateService.use(lang);
  }


  constructor(private translateService: TranslateService) {
    
    this.translateService.setDefaultLang('en');

    // Nạp các bản dịch
    this.translateService.use('en');

     
  }
}
