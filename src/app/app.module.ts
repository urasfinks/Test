import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecComponent } from './rec/rec.component';
import { HomePageComponent } from './home-page/home-page.component';
import { XsdCreatorComponent } from './xsd-creator/xsd-creator.component';
import {RouterModule, Routes} from "@angular/router";
import { AlertModule } from 'ngx-bootstrap/alert';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ModalModule } from 'ngx-bootstrap/modal';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
//import { NgSelectModule } from '@ng-select/ng-select'; //https://github.com/ng-select/ng-select
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ElementPropertyComponent } from './rec/element-property/element-property.component';
import { ElementAttributeComponent } from './rec/element-attribute/element-attribute.component';
import { ElementContentComponent } from './rec/element-content/element-content.component';
import {MatIconModule} from '@angular/material/icon';


const appRoutes: Routes = [
  {path: 'xsd-creator', component: XsdCreatorComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RecComponent,
    HomePageComponent,
    XsdCreatorComponent,
    ElementPropertyComponent,
    ElementAttributeComponent,
    ElementContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    //BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    //ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    //NgSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
