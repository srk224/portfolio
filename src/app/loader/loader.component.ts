import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {
  public isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Hide loader after 1.25 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 1250);
  }
}
