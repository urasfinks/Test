import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";

@Component({
  selector: 'app-element-property',
  templateUrl: './element-property.component.html',
  styleUrls: ['./element-property.component.css']
})
export class ElementPropertyComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement();

  constructor() { }

  ngOnInit(): void {
  }

}
