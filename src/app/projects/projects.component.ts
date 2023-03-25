import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';


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

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public screensaverChips = ["HTML", "CSS", "Javascript", "Swift", "WKWebKit", "MacOS Compatible"];
  public spotifyChips = ["HTML", "CSS", "Javascript", "OAuth", "Spotify Web API"];
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
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      github: "https://github.com/KimberleyChong",
    },
    {
      class: "spotify",
      title: "Spotify Wrapped Recreation",
      video: "../../assets/spotify/spotify-video.mp4",
      imgInfo: this.spotifyImgInfo,
      chips: this.spotifyChips,
      blurb: "Motivated by my love for music, Spotify, and the excitment of descovering my top artists and songs each year, I recreated my own version of Spotify Wrapped.  The UI is inspired by the desktop app, where each artist/song entry appears as if it belongs to one of your playlists.",
      github: "https://github.com/KimberleyChong",
    }
  ];

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // (document.getElementById('video') as HTMLVideoElement)?.play();
  }

  openDialog(imgPath : string, imgText : string) {
    const dialogConfig = new MatDialogConfig();

    // Pass data to the dialog
    dialogConfig.data = {imgPath: imgPath, imgText: imgText};

    this.dialog.open(ImageDialogComponent, dialogConfig);
}


}
