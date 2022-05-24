import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";
import {XsdAttribute} from "../../class/XsdAttribute";
import {DialogConfirmContent, HistoryService} from "../../history.service";

@Component({
  selector: 'app-element-attribute',
  templateUrl: './element-attribute.component.html',
  styleUrls: ['./element-attribute.component.css']
})
export class ElementAttributeComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement("");

  constructor(public service: HistoryService) {
  }

  ngOnInit(): void {
  }

  addAttribute() {
    this.item.listAttribute.push(new XsdAttribute());
  }

  removeAttribute(ex: XsdAttribute) {
    this.service.openDialog(new DialogConfirmContent("Вы действительно хотите удалить атрибут '" + ex.name + "' ?"), () => {
      this.service.removeFromArray(this.item.listAttribute, ex);
    });
  }

}

