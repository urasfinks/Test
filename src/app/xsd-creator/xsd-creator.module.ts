import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {XsdCreatorComponent} from "./xsd-creator.component";
import {XsdCreatorRoutingModule} from "./xsd-creator-routing.module";
import {RecModule} from "./rec/rec.module";
import {HistoryService} from "./history.service";
import {HighlightModule} from "ngx-highlightjs";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    XsdCreatorComponent
  ],
  imports: [
    CommonModule,
    XsdCreatorRoutingModule,
    RecModule,
    FormsModule,
    HighlightModule
  ],
  exports:[

  ],
  providers: [HistoryService]
})
export class XsdCreatorModule { }
