import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import {XsdCreatorModule} from "./xsd-creator/xsd-creator.module";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    XsdCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
