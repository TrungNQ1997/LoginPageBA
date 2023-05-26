import { Component } from '@angular/core';

 
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  isExpanded = false;

 collapse() {
   this.isExpanded = false;
   this.translateService.use('vi');
}

 toggle() {
   this.isExpanded = !this.isExpanded;
   this.translateService.use('en');
}


  constructor(private translateService: TranslateService) {
    
    this.translateService.setDefaultLang('en');

    // Nạp các bản dịch
    this.translateService.use('en');

     
  }
}
