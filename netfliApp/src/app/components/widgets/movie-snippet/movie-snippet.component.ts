import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-snippet',
  templateUrl: './movie-snippet.component.html',
  styleUrls: ['./movie-snippet.component.scss']
})
export class MovieSnippetComponent implements OnInit {

  @Input() movie:any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
