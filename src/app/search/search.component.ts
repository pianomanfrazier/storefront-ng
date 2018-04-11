import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults = [
    {
      "name": "rocket",
      "details": "I fly high in the sky"
    },
    {
      "name": "space shuttle",
      "details": "Let's go to the moon"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
