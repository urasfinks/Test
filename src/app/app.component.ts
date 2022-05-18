import {Component, OnInit} from '@angular/core';
import {XsdElement} from "./XsdElement";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'XsdCreator';

  public x: XsdElement = new XsdElement();

  ngOnInit(): void {
    //this.x = ;
  }
}
