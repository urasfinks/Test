import {Component, Input, OnInit} from '@angular/core';
import {XsdExtensions} from "../../class/XsdExtensions";
import {DialogConfirmContent, HistoryService} from "../../history.service";
import {XsdExtension} from "../../class/XsdExtension";
import {find} from "rxjs/operators";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})

export class ExtensionComponent implements OnInit {

  @Input() item: XsdExtensions = new XsdExtensions();
  @Input() show: Boolean = false;

  constructor(private service: HistoryService) { }

  ngOnInit(): void {
  }

  removeExtension(ex: XsdExtension) {
    this.service.openDialog(new DialogConfirmContent("Вы действительно хотите удалить условие "+this.findExtensionType(ex)+" = '" + ex.value + "' ?"), () => {
      this.service.removeFromArray(this.item.listExtension, ex);
    });
  }

  findExtensionType(ex: XsdExtension): string {
    for(let i=0;i<this.item.availableExtensionType.length;i++){
      if(this.item.availableExtensionType[i].id === ex.id){
        return this.item.availableExtensionType[i].name;
      }
    }
    return "?";
  }

}
