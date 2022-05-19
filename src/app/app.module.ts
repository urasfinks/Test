import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecComponent } from './rec/rec.component';
import { HomePageComponent } from './home-page/home-page.component';
import { XsdCreatorComponent } from './xsd-creator/xsd-creator.component';
import {RouterModule, Routes} from "@angular/router";
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'xsd-creator', component: XsdCreatorComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RecComponent,
    HomePageComponent,
    XsdCreatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
