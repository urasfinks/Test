import {XsdAttribute} from "./XsdAttribute";

export class XsdElement {

  public name: String = "";

  public listAttribute: Array<XsdAttribute> = [];

  public availableTypeElement = [
    {id: 1, name: 'Простой элемент'},
    {id: 2, name: 'Массив элементов'}
  ];

  public availableTypeArray = [
    {id: 1, name: 'Строгая последовательность'}, //seq minOccurs:[0,1] maxOccurs[unbounded]
    {id: 2, name: 'Произвольная последовательность'}, //all minOccurs:[0,1] maxOccurs[1]
    {id: 3, name: 'Один из'} //choice
  ];

  public typeElement: Number = 1;
  public typeArray: Number = 1;

  constructor() {
    this.listAttribute.push(new XsdAttribute());
  }

}
