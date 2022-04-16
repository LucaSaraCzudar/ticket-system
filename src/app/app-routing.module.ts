import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from "./home/home.module";
import {ProjectModule} from "./project/project.module";

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => HomeModule
  },
  {
    path: 'projects',
    loadChildren: () => ProjectModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
