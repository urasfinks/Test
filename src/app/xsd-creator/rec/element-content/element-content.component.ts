import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";
import {XsdExtension} from "../../class/XsdExtension";

@Component({
  selector: 'app-element-content',
  templateUrl: './element-content.component.html',
  styleUrls: ['./element-content.component.css']
})
export class ElementContentComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement();

  constructor() { }

  ngOnInit(): void {
  }

  addElement() {
    this.item.listElement.push(new XsdElement());
  }
}
