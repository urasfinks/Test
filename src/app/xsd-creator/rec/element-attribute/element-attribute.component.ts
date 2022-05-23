import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";
import {XsdAttribute} from "../../class/XsdAttribute";

@Component({
  selector: 'app-element-attribute',
  templateUrl: './element-attribute.component.html',
  styleUrls: ['./element-attribute.component.css']
})
export class ElementAttributeComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement();

  constructor() { }

  ngOnInit(): void {
  }

  addAttribute() {
    this.item.listAttribute.push(new XsdAttribute());
  }
}
