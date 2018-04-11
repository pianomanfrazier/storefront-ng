import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  title = 'Title';
  routes = [
    {
      "name": "Home",
      "url": "/landing",
      "icon": "fa-home"
    },
    {
      "name": "Search",
      "url": "/search",
      "icon": "fa-search"
    }
  ]

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
