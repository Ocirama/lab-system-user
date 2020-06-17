import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';

interface DialogData {
  id: number;
  oldName: string;
  name: string;
  oldUsername: string;
  username: string;
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
    data.oldName = data.name;
    data.oldUsername = data.username;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  swalOrderUpdate() {
    Swal.fire(
      'Užsakovo duomenys atnaujinti.',
      '',
      'success'
    );
  }
}
