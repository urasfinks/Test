import { Component, OnInit } from '@angular/core';
import {XsdElement} from "./class/XsdElement";

@Component({
  selector: 'app-xsd-creator',
  templateUrl: './xsd-creator.component.html',
  styleUrls: ['./xsd-creator.component.css']
})
export class XsdCreatorComponent implements OnInit {

  first: XsdElement = new XsdElement();

  constructor() { }

  ngOnInit(): void {
  }

}
