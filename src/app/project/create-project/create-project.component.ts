import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project.model";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styles: [
  ]
})
export class CreateProjectComponent implements OnInit {

  project: Project = {
    name: '',
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
