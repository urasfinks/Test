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
  last: string = "";
  xsd: string = "";

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

  prepare() {
    let now = JSON.stringify(this.history[0]);
    if(this.last != now){
      this.onChange(now);
      this.last = now;
    }
    return true;
  }

  onChange(data: string){
    let json: XsdElement = JSON.parse(data);

    this.xsd = this.prettifyXml2(this.rec(json),"    ");
    console.log(this.xsd);
  }

  rec(el: XsdElement){

    let ret = "";
    if(el.listAttribute.length > 0){
      if(el.typeElement == 1){//[attribute + content simple] Element -> complexType -> simpleContent -> extension -> attribute
        ret += "1";
      } else if(el.typeElement == 2){//[attribute + content array] -> Element -> complexContent -> extension [complexType seq] -> attribute
        ret += "2";
      }
    }else{
      if(el.typeElement == 1){// [content] Element -> simpleType -> restriction
        ret += "<xs:element name=\""+el.name+"\"><r>1</r></xs:element>";
        //  ret += "<root><p>1</p></root>";
      } else if(el.typeElement == 2){// ...
        ret += "4";
      }
    }
    return ret;
  }

  prettifyXml2(xml: string, tab: string) { // tab = optional indent value, default is tab (\t)
    var formatted = '', indent= '';
    tab = tab || '\t';
    xml.split(/>\s*</).forEach(function(node) {
      if (node.match( /^\/\w/ )) indent = indent.substring(tab.length); // decrease indent by one 'tab'
      formatted += indent + '<' + node + '>\r\n';
      if (node.match( /^<?\w[^>]*[^\/]$/ )) indent += tab;              // increase indent
    });
    return formatted.substring(1, formatted.length-3);
  }

}


