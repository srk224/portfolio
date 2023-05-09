import { Injectable } from "@angular/core";

export interface project {
  class: string,
  title: string,
  video: string,
  imgInfo: imgInfo[],
  chips: string[],
  blurb: string,
  github: string,
}

export interface imgInfo {
  img: string,
  imgText: string,
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  public screensaverChips = ["HTML", "CSS", "JavaScript", "Swift", "WKWebKit"];
  public spotifyChips = ["HTML", "CSS", "JavaScript", "OAuth", "Spotify Web API"];
  public portfolioChips = ["TypeScript", "HTML", "SCSS"]
  public saverImgInfo: imgInfo[] = [
    {
      img: "../../assets/screensaver/spreadsheet.png",
      imgText: "Spreadsheet planning of affirmations to use for screensaver.",
    },
    {
      img: "../../assets/screensaver/figma-mocks.png",
      imgText: "Figma board of design process planning colour schemes and creating various gradient effects.",
    },
    {
      img: "../../assets/screensaver/settings.png",
      imgText: "Final screensaver installed on macOS Ventura 13.0.1.",
    },
    {
      img: "../../assets/screensaver/screensaver.png",
      imgText: "Final look at the screensaver in action during inactivity.",
    }
  ];

  public spotifyImgInfo: imgInfo[] = [
    {
      img: "../../assets/spotify/login-page.png",
      imgText: "A look at the login page using OAuth for Spotify authentication.",
    },
    {
      img: "../../assets/spotify/top-artists.png",
      imgText: "A view of my top artists and their generes, each entry links to the artist's Spotify page.  Time range is set to medium (aprox. last 6 months of data).",
    },
    {
      img: "../../assets/spotify/playlists.png",
      imgText: "In addition to the top artists and tracks, there is a \"Profile\" page which displays the current user's playlists and followed artist.  Each entry links to the corresponding Spotify playlist or artist.",
    },
    {
      img: "../../assets/spotify/figma.png",
      imgText: "A glimpse into the design process for the UI of the app.  The dark theme shown above was inspired by the Spotify desktop app.",
    }
  ];
  public portfilioImgInfo: imgInfo[] = [
    {
      img: "../../assets/screensaver/spreadsheet.png",
      imgText: "Spreadsheet planning of affirmations to use for screensaver.",
    },
    {
      img: "../../assets/portfolio/figma.png",
      imgText: "A glimpse of the Figma board used in the design process for the website. It was definetly an iterative process that I continued to improve upon deep into implementation.",
    },
    {
      img: "../../assets//portfolio/mobile.png",
      imgText: "Mobile view was certainly a great consideration when implementing my website. A responsive layout is always something I keep in mind during implementation of any work.",
    },
    {
      img: "../../assets/screensaver/screensaver.png",
      imgText: "Final look at the screensaver in action during inactitvity.",
    }
  ];
  
  public projects: project[] = [
    {
      class: "saver",
      title: "Positive Affirmations Screensaver",
      video: "../../assets/screensaver/saver.mp4",
      imgInfo: this.saverImgInfo,
      chips: this.screensaverChips,
      blurb: "With a stressful exam season approaching, I was motivated to create something to deliver a dose of positivity each day.  I've been using clock screensavers for years and decided to create a screensaver that not only displayed the time, but also provided positive words of affirmation, paired with a relaxing gradient to get me through those rough times.",
      github: "https://github.com/KimberleyChong",
    },
    {
      class: "spotify",
      title: "Spotify Wrapped Recreation",
      video: "../../assets/spotify/spotify-video.mp4",
      imgInfo: this.spotifyImgInfo,
      chips: this.spotifyChips,
      blurb: "Motivated by my love for music, Spotify, and the excitement of discovering my top artists and songs each year, I recreated my own version of Spotify Wrapped.  The UI is inspired by the desktop app, where each artist/song entry appears as if it belongs to one of your playlists.",
      github: "https://github.com/KimberleyChong",
    },
    {
      class: "portfolio",
      title: "Personal Website",
      video: "../../assets/portfolio/homepage.png",
      imgInfo: this.portfilioImgInfo,
      chips: this.portfolioChips,
      blurb: "I wanted to create a website of my own to showcase more of my personality and experience beyond a resume.  Truthfully, figuring out the UI was the most difficult part, I ventured back to my roots as an art student to really understand design principles for a balanced site.  I wanted the UI to be an accurate reflection of myself, minimal, and with some bright elements to it.",
      github: "https://github.com/KimberleyChong",
    }
  ];

  constructor() { }
}