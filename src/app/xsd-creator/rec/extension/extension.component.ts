import {Component, Input, OnInit} from '@angular/core';
import {XsdExtensions} from "../../class/XsdExtensions";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})

export class ExtensionComponent implements OnInit {

  @Input() item: XsdExtensions = new XsdExtensions();
  @Input() show: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
