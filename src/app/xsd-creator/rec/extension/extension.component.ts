import {Component, Input, OnInit} from '@angular/core';
import {XsdExtensions} from "../../class/XsdExtensions";
import {DialogConfirmContent, HistoryService} from "../../history.service";
import {XsdExtension} from "../../class/XsdExtension";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})

export class ExtensionComponent implements OnInit {

  @Input() item: XsdExtensions = new XsdExtensions();
  @Input() show: Boolean = false;

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

  public availableExtraSimpleType: Array<any> = [
    {id: 1, name: 'Усечение данных'}
  ];


  constructor(private service: HistoryService) { }

  ngOnInit(): void {
  }

  removeExtension(ex: XsdExtension) {
    this.service.openDialog(new DialogConfirmContent("Вы действительно хотите удалить условие "+this.findExtensionType(ex)+" = '" + ex.value + "' ?"), () => {
      this.service.removeFromArray(this.item.listExtension, ex);
    });
  }

  findExtensionType(ex: XsdExtension): string {
    for(let i=0;i<this.availableExtensionType.length;i++){
      if(this.availableExtensionType[i].id === ex.id){
        return this.availableExtensionType[i].name;
      }
    }
    return "?";
  }

  addExtension(listExtension: Array<XsdExtension>) {
    listExtension.push(new XsdExtension());
  }
}
