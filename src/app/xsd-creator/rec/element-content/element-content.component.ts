import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";
import {HistoryService} from "../../history.service";

@Component({
  selector: 'app-element-content',
  templateUrl: './element-content.component.html',
  styleUrls: ['./element-content.component.css']
})
export class ElementContentComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement("");

  constructor(private service: HistoryService) { }

  ngOnInit(): void {
  }

  addElement() {
    this.item.listElement.push(new XsdElement(""));
  }

  openElement(el: XsdElement): void {
    this.service.addHistory(el);
  }
}
