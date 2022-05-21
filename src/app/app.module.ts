import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';
import { XsdCreatorComponent } from './xsd-creator/xsd-creator.component';

import { AppComponent } from './app.component';
import { RecModule } from './rec/rec.module';


const appRoutes: Routes = [
  {path: 'xsd-creator', component: XsdCreatorComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    XsdCreatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    RecModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
