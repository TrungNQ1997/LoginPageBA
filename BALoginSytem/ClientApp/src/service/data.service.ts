// Service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private curLang: string = 'vi';
  
  getCurLang(): string {
    return this.curLang;
  }

  setCurLang(value: string) {
    this.curLang = value;
  }
}
