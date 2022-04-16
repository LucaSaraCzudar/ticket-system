import { NgModule } from '@angular/core';
import { CreateProjectComponent } from './create-project/create-project.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  { path: 'create', component: CreateProjectComponent }
]

@NgModule({
  declarations: [
    CreateProjectComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectModule { }
