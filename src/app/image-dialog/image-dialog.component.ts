import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  public imgPath: string;
  public imgText: string;

  constructor(
    private dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
  ){
    this.imgPath = data.imgPath;
    this.imgText = data.imgText;
  }

  ngOnInit(): void {
  }

}
