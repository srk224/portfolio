import { Component, OnInit } from '@angular/core';
import { faHtml5, faJava, faCss3Alt, faJsSquare, faBootstrap, faAngular, faDocker, faFigma, faLinux, faNpm, faGoogle } from '@fortawesome/free-brands-svg-icons';

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
  public faHtml5 = faHtml5
  public faJava = faJava;
  public faCss3Alt = faCss3Alt;
  public faJsSquare = faJsSquare;
  public faBootstrap = faBootstrap;
  public faAngular = faAngular;
  public faDocker = faDocker;
  public faFigma = faFigma;
  public faLinux = faLinux;
  public faNpm = faNpm;
  public faGoogle = faGoogle;

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

  constructor() { }

  ngOnInit(): void {}

  public aboutMeLink() {
    window.location.href = "#about-me";
  }

}
