import { Component, OnInit } from '@angular/core';

interface skillHighlight {
  displayText: string;
  imgSrc: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public skillHighlights: skillHighlight[] = [
    {
      displayText: "3 years experience",
      imgSrc: "clock",
    },
    {
      displayText: "3 years experience",
      imgSrc: "clock",
    },
    {
      displayText: "3 years experience",
      imgSrc: "clock",
    },
    {
      displayText: "3 years experience",
      imgSrc: "clock",
    }
  ];
  public languages: string[] = [
    'HTML', 'CSS/SCSS', 'Javascript/Typescript', 'C/C++', 'Java'
  ]
  public frameworks: string[] = [
    "Angular", 
  ]

  constructor() { }

  ngOnInit(): void {}

  public aboutMeLink() {
    window.location.href = "#about-me";
  }

}
