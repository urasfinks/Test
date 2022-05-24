import {Injectable} from '@angular/core';
import {XsdElement} from "./class/XsdElement";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: Array<XsdElement> = [];

  addHistory(el: XsdElement): void {
    this.history.push(el);
  }

  removeHistory(el: XsdElement) {
    for (let i = this.history.length - 1; i >= 0; i--) {
      if (this.history[i] === el) {
        break;
      } else {
        this.history.pop();
      }
    }
  }

  constructor() {
  }
}
