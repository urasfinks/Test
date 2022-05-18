import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecComponent } from './rec/rec.component';
import { HomePageComponent } from './home-page/home-page.component';
import { XsdCreatorComponent } from './xsd-creator/xsd-creator.component';
import {RouterModule, Routes} from "@angular/router";

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
