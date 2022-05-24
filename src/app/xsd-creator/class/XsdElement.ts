import {XsdAttribute} from "./XsdAttribute";
import {XsdExtensions} from "./XsdExtensions";

export class XsdElement extends XsdExtensions{

  public name: String = "";
  public listAttribute: Array<XsdAttribute> = [];
  public listElement: Array<XsdElement> = [];
  public min: number = 1;
  public max: number = 1;


  public typeElement: Number = 1;
  public typeArray: Number = 1;

  public availableTypeElement = [
    {id: 1, name: 'Простой элемент'},
    {id: 2, name: 'Массив элементов'}
  ];

  public availableTypeArray = [
    {id: 1, name: 'Строгая последовательность', alias: 'sequence'}, //seq minOccurs:[0,1] maxOccurs[unbounded]
    {id: 2, name: 'Произвольная последовательность', alias: 'all'}, //all minOccurs:[0,1] maxOccurs[1]
    {id: 3, name: 'Один из', alias: 'choice'} //choice
  ];

  constructor(name: String) {
    super();
    this.name = name;
  }

}
