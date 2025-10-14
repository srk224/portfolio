import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private index: number = 0;
  public fontFamily: string = '';
  private fontFamilyList: string[] = ['Bungee Shade', 'Bungee Hairline', 'Bungee Outline', 'Bungee'];
  public faGithub = faGithub;
  public faEnvelope = faEnvelope;
  public faLinkedin = faLinkedin;
  public faFileAlt = faFileAlt;

  constructor() { }

  ngOnInit(): void {
    this.fontChange();
  }

  fontChange() {
    this.fontFamily = 'font-family: ' + this.fontFamilyList[this.index] + ';';
    this.index = (this.index + 1)%4;
  }
}
