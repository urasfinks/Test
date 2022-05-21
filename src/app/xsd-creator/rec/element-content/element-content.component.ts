import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../../XsdElement";

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

}
