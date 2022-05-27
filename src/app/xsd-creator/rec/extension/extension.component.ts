import {Component, Input, OnInit} from '@angular/core';
import {XsdExtensions} from "../../class/XsdExtensions";
import {DialogConfirmContent, HistoryService} from "../../history.service";
import {XsdExtension} from "../../class/XsdExtension";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})

export class ExtensionComponent implements OnInit {

  @Input() item: XsdExtensions = new XsdExtensions();
  @Input() show: Boolean = false;

  public availableExtraSimpleType: Array<any> = [
    {id: 1, name: 'Усечение данных'}
  ];

  constructor(public service: HistoryService) { }

  ngOnInit(): void {
  }

  removeExtension(ex: XsdExtension) {
    this.service.openDialog(new DialogConfirmContent("Вы действительно хотите удалить условие "+this.service.findExtensionType(ex.id, this.service.availableExtensionType, "name")+" = '" + ex.value + "' ?"), () => {
      this.service.removeFromArray(this.item.listExtension, ex);
    });
  }

  addExtension(listExtension: Array<XsdExtension>) {
    listExtension.push(new XsdExtension());
  }
}
