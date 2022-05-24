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
    this.history.push(new XsdElement("root"));
  }

  openHistory(el: XsdElement) {
    this.service.removeHistory(el);
  }
}
