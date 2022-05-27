import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {XsdCreatorComponent} from "./xsd-creator.component";
import {XsdCreatorRoutingModule} from "./xsd-creator-routing.module";
import {RecModule} from "./rec/rec.module";
import {HistoryService} from "./history.service";
import {HighlightModule} from "ngx-highlightjs";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    XsdCreatorComponent
  ],
  imports: [
    CommonModule,
    XsdCreatorRoutingModule,
    RecModule,
    FormsModule,
    HighlightModule,
    MatCardModule,
    ClipboardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports:[

  ],
  providers: [HistoryService]
})
export class XsdCreatorModule { }
