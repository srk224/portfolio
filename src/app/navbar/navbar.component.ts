import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";


export interface welcome {
  displayText: string;
  language: string;
}

export interface navStructure {
  heading: string;
  smHeading: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public smallNav: boolean = false;
  resizeSubscription$: Subscription;
  resizeObservable$: Observable<Event>;


  public navBar: navStructure[] = [
    {
      heading: "Home",
      smHeading: "Home",
      link: "#home",
    },
    {
      heading: "About me",
      smHeading: "About",
      link: "#about",
    },
    {
      heading: "Experience",
      smHeading: "Experience",
      link: "#experience",
    },
    {
      heading: "Projects",
      smHeading: "Projects",
      link: "#projects",
    },
    {
      heading: "Contact me",
      smHeading: "Contact",
      link: "#contact",
    }
  ]

  public welcomeBar: welcome[] = [
    {
      displayText: "Welcome",
      language: "Latin",
    },
    {
      displayText: "bienvenidas",
      language: "Spanish",
    },
    {
      language: "Arabic",
      displayText: "'ahlan bik",
    },
    {
      displayText: "добре дошли",
      language: "Bulgarian",
    },
    {
      displayText: "歡迎",
      language: "Chinese",
    },
    {
      displayText: "Dobrodošli",
      language: "Croatian",
    },
    {
      displayText: "Maligayang pagdating",
      language: "Filipino",
    },
    {
      displayText: "Bienvenue",
      language: "French",
    },
    {
      displayText: "Willkommen",
      language: "German",
    },
    {
      displayText: "Welina",
      language: "Hawaiian",
    },
    {
      displayText: "ようこそ",
      language: "Japanese",
    },
    {
      displayText: "환영하다",
      language: "Korean",
    },
    {
      displayText: "Velkommen",
      language: "Norwegian",
    },
    {
      displayText: "Witamy",
      language: "Polish",
    },
    {
      displayText: "Bine ati venit",
      language: "Romanian",
    },
    {
      displayText: "Добро пожаловать",
      language: "Russian",
    },
    {
      displayText: "Добродошли",
      language: "Serbian",
    },
    {
      displayText: "ยินดีต้อนรับ",
      language: "Thai",
    },
    {
      displayText: "Hoşgeldiniz",
      language: "Turkish",
    },
    {
      displayText: "ласкаво просимо",
      language: "Ukranian",
    },
    {
      displayText: "hoan nghênh",
      language: "Vietnamese",
    },
    {
      displayText: "Welcome",
      language: "Latin",
    },
    {
      displayText: "bienvenidas",
      language: "Spanish",
    },
    {
      language: "Arabic",
      displayText: "'ahlan bik",
    },
    {
      displayText: "добре дошли",
      language: "Bulgarian",
    },
    {
      displayText: "歡迎",
      language: "Chinese",
    },
    {
      displayText: "Dobrodošli",
      language: "Croatian",
    },
    {
      displayText: "Maligayang pagdating",
      language: "Filipino",
    },
    {
      displayText: "Bienvenue",
      language: "French",
    },
    {
      displayText: "Willkommen",
      language: "German",
    },
    {
      displayText: "Welina",
      language: "Hawaiian",
    },
    {
      displayText: "ようこそ",
      language: "Japanese",
    },
    {
      displayText: "환영하다",
      language: "Korean",
    },
    {
      displayText: "Velkommen",
      language: "Norwegian",
    },
    {
      displayText: "Witamy",
      language: "Polish",
    },
    {
      displayText: "Bine ati venit",
      language: "Romanian",
    },
    {
      displayText: "Добро пожаловать",
      language: "Russian",
    },
    {
      displayText: "Добродошли",
      language: "Serbian",
    },
    {
      displayText: "ยินดีต้อนรับ",
      language: "Thai",
    },
    {
      displayText: "Hoşgeldiniz",
      language: "Turkish",
    },
    {
      displayText: "ласкаво просимо",
      language: "Ukranian",
    },
    {
      displayText: "hoan nghênh",
      language: "Vietnamese",
    },
  ]

  constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      if (window.innerWidth <= 566) {
        this.smallNav = true;
      } else {
        this.smallNav = false;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

}
