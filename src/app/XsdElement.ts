export class XsdElement {
  public name: String = "root";

}

export enum XsdElementType{
  ELEMENT,
  ARRAY_SEQ, //seq
  ARRAY_NOT_SEQ, //all
  ARRAY_ONE_OF, //choice
}
