import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';

interface DialogData {
  id: number;

  protocolId: string;
  sampleId: string;
  ashValue: number;
  totalMoistureValue: number;
  calorificValue: number;
  date: Date;

  oldProtocolId: string;
  oldSampleId: string;
  oldAshValue: number;
  oldTotalMoistureValue: number;
  oldCalorificValue: number;
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
    data.oldSampleId = data.sampleId;
    data.oldAshValue = data.ashValue;
    data.oldTotalMoistureValue = data.totalMoistureValue;
    data.oldCalorificValue = data.calorificValue;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  swalOrderUpdate() {
    Swal.fire(
      'Rezultatas papildytas.',
      '',
      'success'
    );
  }
}
