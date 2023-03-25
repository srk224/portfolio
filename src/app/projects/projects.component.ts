import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { project, ProjectsService } from './projects.service'
import { faGithub, faFigma, faSpotify, faAngular, faApple } from '@fortawesome/free-brands-svg-icons';

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
    //NOTE: figure this out...
    // dialogConfig.position = {top: '5%'};

    this.dialog.open(ImageDialogComponent, dialogConfig);
}

  public projectsLink() {
    window.location.href = "#projects";
  }
}
