import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Portfolio';

  ngOnInit(): void {
    window.onscroll = (event) => this.scrollProgress();
  }

  scrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar")!.style.width = scrolled + "%";
  }   
  
}
