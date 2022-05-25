import { Component, OnInit } from '@angular/core';
import {XsdElement} from "./class/XsdElement";
import {HistoryService} from "./history.service";

@Component({
  selector: 'app-xsd-creator',
  templateUrl: './xsd-creator.component.html',
  styleUrls: ['./xsd-creator.component.css']
})
export class XsdCreatorComponent implements OnInit {

  history: Array<XsdElement> = [];

  constructor(private service: HistoryService) { }

  ngOnInit(): void {
    this.history = this.service.history;
    let el: XsdElement = new XsdElement("root");
    el.root = true;
    this.history.push(el);
  }

  openHistory(el: XsdElement) {
    this.service.removeHistory(el);
  }
}
