import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'xsd-creator', loadChildren: () => import('./xsd-creator/xsd-creator.module').then(x => x.XsdCreatorModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
