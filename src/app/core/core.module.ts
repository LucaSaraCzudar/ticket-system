import {NgModule} from '@angular/core';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {SharedModule} from "../shared/shared.module";
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavigationBarComponent,
    FooterComponent
  ],
  exports: [
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CoreModule {
}
