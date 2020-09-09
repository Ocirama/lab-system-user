import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


interface DialogData {
  title: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class ModalComponent2 implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.title = data.title;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
