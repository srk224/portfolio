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
    this.index = (this.index + 1) % this.images.length;
    this.updateDisplay();
  }

  back() {
    this.index = this.index === 0 ? this.images.length - 1 : ((this.index - 1) % this.images.length);
    this.updateDisplay();
  }

  updateDisplay() {
    this.path = this.images[this.index].img;
  }

  initializeImages(project: string) {
    if (project === 'groqcessible') {
      this.video = this.projectsService.projects[0].video;
      this.images = this.projectsService.groqcessibleImgInfo;
    } else if (project === 'codecure') {
      this.video = this.projectsService.projects[1].video;
      this.images = this.projectsService.codeCureImgInfo;
    } else if (project === 'voicenews') {
      this.video = this.projectsService.projects[2].video;
      this.images = this.projectsService.voiceNewsImgInfo;
    } else if (project === 'uwaterlooai') {
      this.video = this.projectsService.projects[3].video;
      this.images = this.projectsService.uwaterlooAIImgInfo;
    }
  }

}
