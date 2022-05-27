import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";
import {HistoryService} from "../../history.service";

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

  constructor(public service: HistoryService) { }

  ngOnInit(): void {
  }

}
