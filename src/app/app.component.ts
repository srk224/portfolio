import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Portfolio';
  private cursor: HTMLElement | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    window.onscroll = (event) => this.scrollProgress();
    this.initCustomCursor();
  }

  scrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar")!.style.width = scrolled + "%";
  }

  initCustomCursor() {
    this.cursor = this.renderer.createElement('div');
    this.renderer.addClass(this.cursor, 'custom-cursor');
    this.renderer.appendChild(document.body, this.cursor);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.cursor) {
      this.renderer.setStyle(this.cursor, 'left', `${event.clientX}px`);
      this.renderer.setStyle(this.cursor, 'top', `${event.clientY}px`);
    }
  }

  @HostListener('document:mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('pointer')) {
      if (this.cursor) {
        this.renderer.addClass(this.cursor, 'hover');
      }
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('pointer') || target.closest('a') || target.closest('button')) {
      if (this.cursor) {
        this.renderer.addClass(this.cursor, 'hover');
      }
    } else {
      if (this.cursor) {
        this.renderer.removeClass(this.cursor, 'hover');
      }
    }
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    if (this.cursor) {
      this.renderer.addClass(this.cursor, 'click');
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.cursor) {
      this.renderer.removeClass(this.cursor, 'click');
    }
  }
}
