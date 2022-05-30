import {Component, OnInit} from '@angular/core';
import {XsdElement} from "./class/XsdElement";
import {DialogConfirmContent, HistoryService} from "./history.service";
import {XsdAttribute} from "./class/XsdAttribute";


declare var xmllint: any;

@Component({
  selector: 'app-xsd-creator',
  templateUrl: './xsd-creator.component.html',
  styleUrls: ['./xsd-creator.component.css']
})

export class XsdCreatorComponent implements OnInit {

  history: Array<XsdElement> = [];
  last: string = "";
  xsd: string = "";
  autoCheck: boolean = true;
  listData: Array<any> = [{data: "<root></root>", validate: ""}];
  selectedData: number = 0;
  info: any | undefined;

  constructor(private service: HistoryService) {
  }

  ngOnInit(): void {
    this.history = this.service.history;
    let el: XsdElement = new XsdElement("root");
    el.root = true;
    this.history.push(el);
  }

  openHistory(el: XsdElement) {
    this.service.removeHistory(el);
  }

  prepare() {
    let now = JSON.stringify(this.history[0]);
    if (this.last != now) {
      this.onChange(now);
      this.last = now;
    }
    return true;
  }

  onChange(data: string) {
    let json: XsdElement = JSON.parse(data);
    let arExtra: Array<string> = [];
    this.xsd = this.prettifyXml2("<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\"><xs:element name=\"" + json.name + "\">" + this.rec(json, arExtra) + "</xs:element>" + arExtra.join("") + "</xs:schema>", "  ");
    this.checkAllXsd();
  }

  getAttr(listAttribute: Array<XsdAttribute>) {
    let ret = "";
    for (let i = 0; i < listAttribute.length; i++) {
      ret += this.getExtensionAttr(listAttribute[i]);
    }
    return ret;
  }

  createExtraSimpleType(el: XsdElement) {
    let ret = "<xs:simpleType name=\"t" + el.guid + "\">" + this.getExtensionXml(el) + "</xs:simpleType>";
    return ret;
  }

  createExtraComplexType(el: XsdElement, extra: Array<string>, withName: boolean) {
    let ar: string = "";
    for (let i = 0; i < el.listElement.length; i++) {
      let minOccurs = "";
      let maxOccurs = "";
      switch (el.selectedTypeArray) {
        case 1:
          if (el.listElement[i].min > 1) {
            el.listElement[i].min = 1;
          }
          if (el.listElement[i].min < 0) {
            el.listElement[i].min = 0;
          }
          break;
        case 2:
          if (el.listElement[i].min > 1) {
            el.listElement[i].min = 1;
          }
          if (el.listElement[i].min < 0) {
            el.listElement[i].min = 0;
          }
          if (el.listElement[i].max > 1) {
            el.listElement[i].max = 1;
          }
          break;
        case 3:
          el.listElement[i].min = 1;
          el.listElement[i].max = 1;
          break;
      }

      minOccurs = " minOccurs=\"" + el.listElement[i].min + "\"";
      maxOccurs = " maxOccurs=\"" + el.listElement[i].max + "\"";
      ar += "<xs:element name=\"" + el.listElement[i].name + "\"" + minOccurs + maxOccurs + ">" + this.rec(el.listElement[i], extra) + "</xs:element>";
    }
    let aliasType = this.service.findExtensionType(el.selectedTypeArray, this.service.availableTypeArray, "alias");
    return withName == true ? ("<xs:complexType name=\"t" + el.guid + "\"><xs:" + aliasType + ">" + ar + "</xs:" + aliasType + "></xs:complexType>") : ("<xs:complexType><xs:" + aliasType + ">" + ar + "</xs:" + aliasType + "></xs:complexType>");
  }

  rec(el: XsdElement, extra: Array<string>) {
    let ret = "";
    if (el.listAttribute.length > 0) {
      if (el.typeElement == 1) {//[attribute + content simple] Element -> complexType -> simpleContent -> extension -> attribute
        ret += "<xs:complexType><xs:simpleContent><xs:extension base=\"t" + el.guid + "\">" + this.getAttr(el.listAttribute) + "</xs:extension></xs:simpleContent></xs:complexType>";
        extra.push(this.createExtraSimpleType(el));
      } else if (el.typeElement == 2) {//[attribute + content array] -> Element -> complexType -> complexContent -> extension [complexType seq] -> attribute
        ret += "<xs:complexType><xs:complexContent><xs:extension base=\"t" + el.guid + "\">" + this.getAttr(el.listAttribute) + "</xs:extension></xs:complexContent></xs:complexType>";
        extra.push(this.createExtraComplexType(el, extra, true));
      }
    } else {
      if (el.typeElement == 1) {// [content] Element -> simpleType -> restriction
        ret += "<xs:simpleType>" + this.getExtensionXml(el) + "</xs:simpleType>";
        //  ret += "<root><p>1</p></root>";
      } else if (el.typeElement == 2) {// ...
        ret += this.createExtraComplexType(el, extra, false);
      }
    }
    return ret;
  }

  getExtensionAttr(el: XsdAttribute) {
    if (el.selectedExtraSimpleType == 1) {
      let ar = "";
      for (let i = 0; i < el.listExtension.length; i++) {
        ar += "<xs:" + this.service.findExtensionType(el.listExtension[i].id, this.service.availableExtensionType, "alias") + " value=\"" + el.listExtension[i].value + "\"/>";
      }
      if (ar.length > 0) {
        ar = "<xs:simpleType><xs:restriction base=\"" + this.service.findExtensionType(el.selectedSimpleType, this.service.availableSimpleType, "alias") + "\">" + ar + "</xs:restriction></xs:simpleType>";
      }
      let req = el.required == true ? " use=\"required\"" : "";
      return "<xs:attribute name=\"" + el.name + "\"" + req + ">" + ar + "</xs:attribute>";
    } else {
      return "<xs:notRealization></xs:notRealization>";
    }
  }

  getExtensionXml(el: XsdElement) {
    if (el.selectedExtraSimpleType == 1) {
      let ar = "";
      for (let i = 0; i < el.listExtension.length; i++) {
        ar += "<xs:" + this.service.findExtensionType(el.listExtension[i].id, this.service.availableExtensionType, "alias") + " value=\"" + el.listExtension[i].value + "\"/>";
      }
      return "<xs:restriction base=\"" + this.service.findExtensionType(el.selectedSimpleType, this.service.availableSimpleType, "alias") + "\">" + ar + "</xs:restriction>";
    } else {
      return "<xs:notRealization></xs:notRealization>";
    }
  }

  prettifyXml2(xml: string, tab: string) { // tab = optional indent value, default is tab (\t)
    var formatted = '', indent = '';
    tab = tab || '\t';
    xml.split(/>\s*</).forEach(function (node) {
      if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
      formatted += indent + '<' + node + '>\r\n';
      if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab;              // increase indent
    });
    return formatted.substring(1, formatted.length - 3);
  }

  checkAllXsd() {
    for (let i = 0; i < this.listData.length; i++) {
      this.checkXsd(i);
    }
  }

  checkXsd(index: number) {
    this.listData[index].validate = xmllint.validateXML({
      xml: this.listData[index].data,
      schema: this.xsd
    });
  }

  addData() {
    this.listData.push({data: "<root></root>", validate: ""});
    this.selectedData = this.listData.length - 1;
    this.checkXsd(this.selectedData);
  }

  removeData(data: any) {
    this.service.openDialog(new DialogConfirmContent("Вы действительно хотите удалить данные '" + data.data + "' ?"), () => {
      this.service.removeFromArray(this.listData, data);
      this.selectedData = this.listData.length - 1;
    });
  }

}


