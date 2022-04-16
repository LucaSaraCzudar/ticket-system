import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  { path: '', component: MainPageComponent }
]

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
