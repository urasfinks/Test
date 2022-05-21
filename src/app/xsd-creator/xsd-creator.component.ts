import { Component, OnInit } from '@angular/core';
import {XsdElement} from "../XsdElement";

@Component({
  selector: 'app-xsd-creator',
  templateUrl: './xsd-creator.component.html',
  styleUrls: ['./xsd-creator.component.css']
})
export class XsdCreatorComponent implements OnInit {

  constructor() { }

  first: XsdElement = new XsdElement();

  ngOnInit(): void {

  }

}
