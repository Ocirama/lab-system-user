import {Component, OnInit, ViewChild} from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ApiService} from '../../../core/api.service';
import {ModalComponent} from '../modal/modal.component';
import Swal from 'sweetalert2';
import {DateModalComponent} from '../date-modal/date-modal.component';
import {DecoderService} from '../../shared/decoder.service';
import {FileUploader} from 'ng2-file-upload';
import {AuthService} from '../../../core/auth.service';
import {DatePipe} from '@angular/common';

import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';


interface Result {
  id: number;
  customerId: string;
  protocolId: string;
  sampleId: string;
  ashValue: number;
  totalMoistureValue: number;
  calorificValue: number;
  date: string;
}

const URL = 'http://localhost:8080/lei/results/import';

interface Headers {
  [fieldName: string]: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[];
  results: Result[] = [];
  dataSource: MatTableDataSource<Result>;
  excelDate = new Date();
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  headers: Headers = {};
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  year: number = new Date().getFullYear();

  fileInfos: Observable<any>;

  response: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // @ts-ignore


  constructor(
    public datePipe: DatePipe,
    private api: ApiService,
    public dialog: MatDialog,
    public decoder: DecoderService,
    private authService: AuthService
  ) {
    this.headers['Content-Type'] = 'application/json';
    this.uploader = new FileUploader({
      url: URL
    });
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);
  }

  ngOnInit() {

    if (this.decoder.isAdmin() === true) {
      this.displayedColumns = ['no', 'protocolId', 'sampleId', 'ashValue', 'totalMoistureValue', 'calorificValue', 'date', 'actions'];
    } else {
      this.displayedColumns = ['no', 'protocolId', 'sampleId', 'ashValue', 'totalMoistureValue', 'calorificValue', 'date'];
    }

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.getResults();
    console.log(this.decoder.getUser());
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getResults() {
    if (this.decoder.getUser() !== 'admin') {
      this.api.get('/lei/results').subscribe(
        (data: Result[]) => this.dataSource.data = data.filter(
          x => x.customerId = this.decoder.getUser()).filter(x => x.date = new Date(x.date).toLocaleString()));
    } else {
      this.api.get('/lei/results').subscribe((data: Result[]) =>
        this.dataSource.data = data.filter(x => x.date = new Date(x.date).toLocaleString()));
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.api.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          this.message = 'Rezultatai įkelti.';
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      err => {
        this.progress = 0;
        // this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
    this.dataSource.data = [];
    setTimeout(() => this.getResults(), 1000);
    Swal.fire(
      'Rezultatai įkelti.',
      '',
      'success'
    );
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: number) {
    this.api.delete(`/lei/results/${id}`).subscribe(
      () => this.results = this.results.filter(item => item.id !== id)
    );
    this.dataSource.data = [];
    setTimeout(() => this.getResults(), 1000);
  }

  openDialog(result?: Result) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        id: result ? result.id : null,
        protocolId: result ? result.protocolId : null,
        sampleId: result ? result.sampleId : null,
        ashValue: result ? result.ashValue : null,
        totalMoistureValue: result ? result.totalMoistureValue : null,
        calorificValue: result ? result.calorificValue : null,
        date: result ? result.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/results', data).subscribe(
          (resultt: Result) => {
            const row = this.results.find(item => item.id === result.id);
            if (row) {
              row.protocolId = resultt.protocolId;
              row.sampleId = resultt.sampleId;
              row.ashValue = resultt.ashValue;
              row.totalMoistureValue = resultt.totalMoistureValue;
              row.calorificValue = resultt.calorificValue;
              row.date = resultt.date;
            } else {
              this.results = [...this.results, result];
            }
          }
        );
      }
    });
  }

  swalOrderDelete() {
    Swal.fire(
      'Rezultatas ištrintas.',
      '',
      'success'
    );
  }

  displayFilter(value: any) {
    if (value === 'pilnas') {
      this.api.get('/lei/results');
      this.api.get('/lei/results')
        .subscribe((data: Result[]) => this.dataSource.data = data
          .filter(x => ((x.date = new Date(x.date)
            .toLocaleString()))));
      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));
    }
  }


  openDialog2(excelDate?: string) {
    const dialogRef = this.dialog.open(DateModalComponent, {
      width: '250px',
      data: {
        date: excelDate ? excelDate : null,
      }
    });
    dialogRef.afterClosed().subscribe(dataa => {
      if (dataa) {

        this.api.get('/lei/results')
          // tslint:disable-next-line:no-shadowed-variable
          .subscribe((data: Result[]) => this.dataSource.data = data
            .filter(x => ((x.date = new Date(x.date).toLocaleString()
              .substring(0, 9).replace(',', '').replace('\\s+', '')) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }
}

