import {XsdExtension} from "./XsdExtension";
import { Guid } from 'guid-typescript';


export class XsdExtensions{

  public listExtension: Array<XsdExtension> = [];
  public selectedSimpleType: Number = 1;
  public selectedExtraSimpleType: Number = 1; //Усечение
  public guid = Guid.create().toString().split("-").join("");

  addExtension() {

  }

  constructor(){

  }
}
