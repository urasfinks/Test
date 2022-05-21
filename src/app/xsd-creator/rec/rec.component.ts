import {Component, Input, OnInit, Output} from '@angular/core';
import {XsdElement} from "../../XsdElement";

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent implements OnInit {

  @Input() item: XsdElement = new XsdElement();

  constructor() { }

  ngOnInit(): void {

  }

}
