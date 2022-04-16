import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
