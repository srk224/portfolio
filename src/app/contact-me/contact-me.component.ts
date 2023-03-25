import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  public faGithub = faGithub;
  public faEnvelope = faEnvelope;
  public faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {}

  public contactLink() {
    window.location.href = "#contact-me";
  }

}
