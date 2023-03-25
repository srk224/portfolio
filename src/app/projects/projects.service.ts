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
  public screensaverChips = ["HTML", "CSS", "Javascript", "Swift", "WKWebKit"];
  public spotifyChips = ["HTML", "CSS", "Javascript", "OAuth", "Spotify Web API"];
  public portfolioChips = ["Typescript", "HTML", "SCSS"]
  public saverImgInfo: imgInfo[] = [
    {
      img: "../../assets/screensaver/spreadsheet.png",
      imgText: "Spreadsheet planning of affirmations to use for screensaver.",
    },
    {
      img: "../../assets/screensaver/figma-mocks.png",
      imgText: "Figma board of design process planning colour schemes and creating different gradient effects.",
    },
    {
      img: "../../assets/screensaver/settings.png",
      imgText: "Final screensaver installed on MacOS.",
    },
    {
      img: "../../assets/screensaver/screensaver.png",
      imgText: "Final look at the screensaver in action during inactitvity.",
    }
  ];

  public spotifyImgInfo: imgInfo[] = [
    {
      img: "../../assets/spotify/login-page.png",
      imgText: "A look at the login page utilising OAuth for spotify authentication.",
    },
    {
      img: "../../assets/spotify/top-artists.png",
      imgText: "A view of my top artists and their generes, each entry links to the artists spotify page.  Time range is set to medium (aprox. last 6 months of data).",
    },
    {
      img: "../../assets/spotify/playlists.png",
      imgText: "In addition to the top artists and tracks there is a \"Profile\" page which displays a user's playlists and followed artist.  Each entry links to the coresponding Spotify playlist or artist.",
    },
    {
      img: "../../assets/spotify/figma.png",
      imgText: "A glimpse into the design process for the UI of the app.  The dark theme shown above was inspired by the Spotify desktop app.",
    }
  ];
  
  public projects: project[] = [
    {
      class: "saver",
      title: "Positive Affirmations Screensaver",
      video: "../../assets/screensaver/saver.mp4",
      imgInfo: this.saverImgInfo,
      chips: this.screensaverChips,
      blurb: "I'd been using clock screensavers for years, during a study term I had the idea to create a screensaver that not only displayed the time, but also provided positive words of affirmation to get extra motivation during the exam seasons.  Paired that idea with a relaxing gradient and this has been my screensaver ever since.",
      github: "https://github.com/KimberleyChong",
    },
    {
      class: "spotify",
      title: "Spotify Wrapped Recreation",
      video: "../../assets/spotify/spotify-video.mp4",
      imgInfo: this.spotifyImgInfo,
      chips: this.spotifyChips,
      blurb: "Motivated by my love for music, Spotify, and the excitment of discovering my top artists and songs each year, I recreated my own version of Spotify Wrapped.  The UI is inspired by the desktop app, where each artist/song entry appears as if it belongs to one of your playlists.",
      github: "https://github.com/KimberleyChong",
    },
    {
      class: "portfolio",
      title: "Personal Website",
      video: "../../assets/portfolio/homepage.png",
      imgInfo: this.spotifyImgInfo,
      chips: this.portfolioChips,
      blurb: "Motivated by my love for music, Spotify, and the excitment of discovering my top artists and songs each year, I recreated my own version of Spotify Wrapped.  The UI is inspired by the desktop app, where each artist/song entry appears as if it belongs to one of your playlists.",
      github: "https://github.com/KimberleyChong",
    }
  ];

  constructor() { }
}