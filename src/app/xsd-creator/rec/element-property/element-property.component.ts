import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";

@Component({
  selector: 'app-element-property',
  templateUrl: './element-property.component.html',
  styleUrls: ['./element-property.component.css']
})
export class ElementPropertyComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement("");

  public availableTypeElement: Array<any> = [
    {id: 1, name: 'Простой элемент'},
    {id: 2, name: 'Массив элементов'}
  ];

  public availableTypeArray: Array<any> = [
    {id: 1, name: 'Строгая последовательность', alias: 'sequence'}, //seq minOccurs:[0,1] maxOccurs[unbounded]
    {id: 2, name: 'Произвольная последовательность', alias: 'all'}, //all minOccurs:[0,1] maxOccurs[1]
    {id: 3, name: 'Один из', alias: 'choice'} //choice
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
