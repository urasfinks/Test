import {XsdAttribute} from "./XsdAttribute";
import {XsdExtensions} from "./XsdExtensions";

export class XsdElement extends XsdExtensions{

  public root: boolean = false;
  public name: String = "";
  public listAttribute: Array<XsdAttribute> = [];
  public listElement: Array<XsdElement> = [];
  public min: number = 1;
  public max: number = 1;


  public typeElement: number = 1;
  public selectedTypeArray: number = 1;

  constructor(name: String) {
    super();
    this.name = name;
    //this.listAttribute.push(new XsdAttribute());
  }

}
