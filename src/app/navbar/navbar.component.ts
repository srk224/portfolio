import { Component, OnInit } from '@angular/core';

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
  public isLightMode: boolean = true;
  public currentTheme: string | null = 'light';
  public targetTheme: string = 'dark';
  public navMenu: boolean = false;

  public navBar: navStructure[] = [
    {
      heading: "Home",
      smHeading: "Home",
      link: "#home",
    },
    {
      heading: "About me",
      smHeading: "About",
      link: "#about-me",
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
      link: "#contact-me",
    }
  ]

  public welcomeBar: welcome[] = [
    {
      displayText: "Welcome",
      language: "English",
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
      language: "English",
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

  constructor() {}

  ngOnInit(): void {
    // Consider puttig this line back in to match browser preferences, thinking I prefer to ignore and default to light
    // var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    var storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      // Set theme from stored or preferences
      document.documentElement.setAttribute('data-theme', storedTheme);
      this.isLightMode = storedTheme === "light" ? true : false;
    } else {
      // If no stored theme or preference, default to light theme
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  public toggleTheme() {
    this.currentTheme = document.documentElement.getAttribute("data-theme");

    this.targetTheme = this.currentTheme === "light" ? "dark" : 'light';
    
    document.documentElement.setAttribute('data-theme', this.targetTheme);
    this.isLightMode = this.currentTheme === "light" ? false : true;
    localStorage.setItem('theme', this.targetTheme);
  }

  public openNavMenu() {
    this.navMenu = !this.navMenu;
  }

  public closeNavMenu() {
    this.navMenu = false;
  }

}
