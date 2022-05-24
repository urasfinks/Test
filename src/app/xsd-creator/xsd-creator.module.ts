import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {XsdCreatorComponent} from "./xsd-creator.component";
import {XsdCreatorRoutingModule} from "./xsd-creator-routing.module";
import {RecModule} from "./rec/rec.module";
import {HistoryService} from "./history.service";

@NgModule({
  declarations: [
    XsdCreatorComponent
  ],
  imports: [
    CommonModule,
    XsdCreatorRoutingModule,
    RecModule
  ],
  exports:[

  ],
  providers: [HistoryService]
})
export class XsdCreatorModule { }
