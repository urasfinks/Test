import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { RecComponent } from './rec.component';

import { ElementPropertyComponent } from './element-property/element-property.component';
import { ElementAttributeComponent } from './element-attribute/element-attribute.component';
import { ElementContentComponent } from './element-content/element-content.component';
import {ExtensionComponent} from "./extension/extension.component";

@NgModule({
  declarations: [
    RecComponent,
    ElementPropertyComponent,
    ElementAttributeComponent,
    ElementContentComponent,
    ExtensionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    TimepickerModule.forRoot(),
  ],
  exports:[
    RecComponent
  ]
})
export class RecModule { }
