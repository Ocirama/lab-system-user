import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

interface DialogData {
  id: number;
  oldProtocolId: string;
  protocolId: string;
  oldCustomer: string;
  oldTest: string;
  oldSampleType: string;
  oldOrderAmount: number;
  //oldDate: Date;
  customer: string;
  test: string;
  sampleType: string;
  orderAmount: number;
  // date: Date;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.oldProtocolId = data.protocolId;
    data.oldCustomer = data.customer;
    data.oldTest = data.test;
    data.oldSampleType = data.sampleType;
    data.oldOrderAmount = data.orderAmount;
    // data.oldDate = data.date;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
