import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {XsdCreatorComponent} from "./xsd-creator.component";

const appRoutes: Routes = [
  {path: '', component: XsdCreatorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class XsdCreatorRoutingModule { }
