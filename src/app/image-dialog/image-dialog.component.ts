import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { imgInfo, project, ProjectsService } from '../projects/projects.service'

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  public images: imgInfo[] = [];
  public index: number;
  public isVideo: boolean;
  public video: string = '';
  public path: string = '';

  constructor(
    @Inject( MAT_DIALOG_DATA ) data: any,
    private projectsService: ProjectsService,
    private dialogRef: MatDialogRef<ImageDialogComponent>,
  ){
    this.initializeImages(data.project);
    this.index = data.index;
    this.isVideo = data.isVideo;
    this.updateDisplay();
  }

  ngOnInit(): void {
  }

  next() {
    this.index = (this.index + 1) % 4;
    this.updateDisplay();
  }

  back() {
    console.log("meep")
    this.index = this.index === 0 ? 3 : ((this.index - 1) % 4);
    this.updateDisplay();
  }

  updateDisplay() {
    this.path = this.images[this.index].img;
  }

  initializeImages(project: string) {
    if (project === 'saver') {
      this.video = this.projectsService.projects[0].video;
      this.images = this.projectsService.saverImgInfo;
    } else if (project === 'spotify') {
      this.video = this.projectsService.projects[1].video;
      this.images = this.projectsService.spotifyImgInfo;
    } else {
      this.video = this.projectsService.projects[2].video;
      this.images = this.projectsService.portfilioImgInfo;
    }
  }

}
