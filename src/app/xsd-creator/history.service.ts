import {Injectable} from '@angular/core';
import {XsdElement} from "./class/XsdElement";
import {ConfirmComponent} from "../confirm/confirm.component";
import {MatDialog} from "@angular/material/dialog";
import {XsdExtension} from "./class/XsdExtension";

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

  public availableSimpleType: Array<any> = [
    {id: 1, name: 'Строка', alias: 'xs:string'},
    {id: 2, name: 'Целочисленное значение', alias: 'xs:integer'},
    {id: 3, name: 'Десятичное значение', alias: 'xs:decimal'},
    {id: 4, name: 'Дата', alias: 'xs:date'},
    {id: 5, name: 'Время', alias: 'xs:time'},
    {id: 6, name: 'Истина', alias: 'xs:boolean'},

    {id: 7, name: 'Целочисленное, содержащее только отрицательные значения (..,-2,-1)', alias: 'xs:negativeInteger'},
    {id: 8, name: 'Целочисленное, содержащее только не-отрицательные значения (0,1,2,..)', alias: 'xs:nonNegativeInteger'},
    {id: 9, name: 'Целочисленное, содержащее только не-положительные значения (..,-2,-1,0)', alias: 'xs:nonPositiveInteger'},
    {id: 10, name: 'Целочисленное, содержащее только положительные значения (1,2,..)', alias: 'xs:positiveInteger'},

    {id: 11, name: '8-битное целочисленное значение со знаком', alias: 'xs:byte'},
    {id: 12, name: '16-битное целочисленное значение со знаком', alias: 'xs:short'},
    {id: 13, name: '32-битное целочисленное значение без знака', alias: 'xs:unsignedInt'},
    {id: 14, name: '16-битное целочисленное значение без знака', alias: 'xs:unsignedShort'},
    {id: 15, name: '8-битное целочисленное значение без знака', alias: 'xs:unsignedByte'},
    {id: 16, name: '32-битное целочисленное значение со знаком', alias: 'xs:int'},
    {id: 17, name: '64-битное целочисленное значение со знаком', alias: 'xs:long'},
    {id: 18, name: '64-битное целочисленное значение без знака', alias: 'xs:unsignedLong'}
  ];

  public availableExtensionType: Array<any> = [
    {id: 1, name: 'Возможное значение', alias: 'enumeration'},
    {id: 2, name: 'Шаблон', alias: 'pattern'},
    {id: 3, name: 'Длина строки >= 0', alias: 'length'},
    {id: 4, name: 'Знаков после запятой >= 0', alias: 'fractionDigits'},
    {id: 5, name: 'Число меньше чем', alias: 'maxExclusive'},
    {id: 6, name: 'Число меньше или равно', alias: 'maxInclusive'},
    {id: 7, name: 'Число больше чем', alias: 'minExclusive'},
    {id: 8, name: 'Число больше или равно', alias: 'minInclusive'},
    {id: 9, name: 'Максимальная длина символов >= 0 ', alias: 'maxLength'},
    {id: 10, name: 'Минимальное длина символом >= 0', alias: 'minLength'},
    {id: 11, name: 'Точное количество допустимых цифр > 0', alias: 'totalDigits'}
  ];

  public availableTypeArray: Array<any> = [
    {id: 1, name: 'Строгая последовательность', alias: 'sequence'}, //seq minOccurs:[0,1] maxOccurs[unbounded]
    {id: 2, name: 'Произвольная последовательность', alias: 'all'}, //all minOccurs:[0,1] maxOccurs[1]
    {id: 3, name: 'Один из', alias: 'choice'} //choice
  ];

  findExtensionType(id: number, ar: Array<any>, field: string): string {
    for(let i=0;i<ar.length;i++){
      if(ar[i].id === id){
        return ar[i][field];
      }
    }
    return "?";
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
