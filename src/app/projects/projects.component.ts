import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public screensaverChips = [
    "HTML", "CSS", "Javascript", "WKWebKit", "MacOS Compatible"
  ]

  public spotifyChips = [
    "HTML", "CSS", "Javascript", "OAuth", "Spotify APIs"
  ]


}
