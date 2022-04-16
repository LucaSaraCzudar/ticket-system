import {NgModule} from '@angular/core';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  exports: [
    NavigationBarComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule {
}
