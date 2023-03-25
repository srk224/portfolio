import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private index: number = 0;
  public fontFamily: string = '';
  private fontFamilyList: string[] = ['Bungee Shade', 'Bungee Hairline', 'Bungee Outline', 'Bungee'];
  constructor() { }

  ngOnInit(): void {
    this.fontChange();
  }

  fontChange() {
    this.fontFamily = 'font-family: ' + this.fontFamilyList[this.index] + ';';
    this.index = (this.index + 1)%4;
  }
}
