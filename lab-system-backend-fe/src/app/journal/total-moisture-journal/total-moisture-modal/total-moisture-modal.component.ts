import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

interface DialogData {
  id: number;
  oldTrayWeight: number;
  trayWeight: number;
  oldtrayAndSampleWeightBefore: number;
  trayAndSampleWeightBefore: number;
  oldtrayAndSampleWeightAfter: number;
  oldtrayAndSampleWeightAfterPlus: number;
  // oldDate: Date;
  trayAndSampleWeightAfter: number;
  trayAndSampleWeightAfterPlus: number;
  // date: Date;
}

@Component({
  selector: 'app-total-moisture-modal',
  templateUrl: './total-moisture-modal.component.html',
  styleUrls: ['./total-moisture-modal.component.css']
})
export class TotalMoistureModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TotalMoistureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.oldTrayWeight = data.trayWeight;
    data.oldtrayAndSampleWeightBefore = data.trayAndSampleWeightBefore;
    data.oldtrayAndSampleWeightAfter = data.trayAndSampleWeightAfter;
    data.oldtrayAndSampleWeightAfterPlus = data.trayAndSampleWeightAfterPlus;
    // data.oldDate = data.date;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

