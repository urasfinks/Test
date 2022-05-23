import {Component, Input, OnInit} from '@angular/core';
import {XsdElement} from "../../class/XsdElement";
import {XsdExtension} from "../../class/XsdExtension";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement();

  constructor() { }

  ngOnInit(): void {
  }

  addExtension() {
    this.item.listExtension.push(new XsdExtension());
  }

  removeExtension(ex: XsdExtension) {
    const index = this.item.listExtension.indexOf(ex, 0);
    if (index > -1) {
      this.item.listExtension.splice(index, 1);
    }
  }

}
