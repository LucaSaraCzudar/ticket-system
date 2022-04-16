import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styles: [
  ]
})
export class NavigationBarComponent implements OnInit {

  links = [
    { title: 'Home', fragment: '/main' },
    { title: 'Projects', fragment: 'projects/create' }
  ];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
