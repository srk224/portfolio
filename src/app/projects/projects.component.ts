import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { project, ProjectsService } from './projects.service'
import { faGithub, faFigma, faSpotify, faAngular, faApple, faAws, faGoogle, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public faGithub = faGithub;
  public faFigma = faFigma;
  public faSpotify = faSpotify;
  public faAngular = faAngular;
  public faApple = faApple;
  public faAws = faAws;
  public faGoogle = faGoogle;
  public faHtml5 = faHtml5
  public faCss3Alt = faCss3Alt;
  public faJsSquare = faJsSquare;
  public projects: project[];

  constructor(
    private projectsService: ProjectsService,
    private dialog: MatDialog,
  ) { 
    this.projects = this.projectsService.projects;
  }

  ngOnInit(): void {}

  openDialog(project: string, index: number, isVideo: boolean) {
    const dialogConfig = new MatDialogConfig();

    // Pass data to the dialog
    dialogConfig.data = {project: project, index: index, isVideo: isVideo,};
    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.autoFocus = false;
    //TODO: get back to this...
    // dialogConfig.position = {top: '5%'};

    this.dialog.open(ImageDialogComponent, dialogConfig);
}

  public projectsLink() {
    window.location.href = "#projects";
  }
}
