import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  logopath = "assets/img/SPOONlogohorz.png";
  categories = [
    {
      "name" : "Space",
      "icon" : "fa-space-shuttle"
    },
    {
      "name" : "Rockets",
      "icon" : "fa-rocket"
    },
    {
      "name" : "Power",
      "icon" : "fa-plug"
    },
    {
      "name" : "Tools",
      "icon" : "fa-wrench"
    },
    {
      "name" : "Transportation",
      "icon" : "fa-train"
    },
    {
      "name" : "Communication",
      "icon" : "fa-globe"
    },
  ]
  categoryOptions: SelectItem[] = [
    {label: "Option 1", value : 1},
    {label: "Option 2", value : 2},
    {label: "Option 3", value : 3}
  ]

  constructor() { }

  ngOnInit() {
  }

}
