import {Injectable} from '@angular/core';
import {XsdElement} from "./class/XsdElement";
import {ConfirmComponent} from "../confirm/confirm.component";
import {MatDialog} from "@angular/material/dialog";

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

  openDialog(data: any, fn: () => void) {
    let ref = this.dialog.open(ConfirmComponent, {data: data});
    ref.afterClosed().subscribe(r => {
      if(r === "true"){
        fn();
      }
    });
  }

  removeFromArray(array: Array<any>, el: any){
    const index = array.indexOf(el, 0);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  constructor(public dialog: MatDialog) {
  }
}

export class DialogConfirmContent{
  public content: string = "";
  public btnClose: string = "Отмена";
  public btnConfirm: string = "Ok";
  public title: string = "Подтвердите действие";

  constructor(content: string) {
    this.content = content;
  }
}
