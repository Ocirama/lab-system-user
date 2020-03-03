import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../core/api.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ModalComponent} from '../../log/modal/modal.component';

interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;
  // date: Date;
}

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'protocolId', 'sampleId', 'weight', /*'date'*/ 'actions'];
  samples: Sample[] = [];
  dataSource: MatTableDataSource<Sample>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.api.get('/lei/samples').subscribe((data: Sample[]) => this.dataSource.data = data);
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: number) {
    this.api.delete(`/lei/samples/${id}`).subscribe(
      () => this.samples = this.samples.filter(item => item.id !== id)
    );
  }

  openDialog(sample?: Sample) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        id: sample ? sample.id : null,
        protocolId: sample ? sample.protocolId : null,
        sampleId: sample ? sample.sampleId : null,
        sampleWeight: sample ? sample.sampleWeight : null,
        // date: order ? order.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/samples', data).subscribe(
          (result: Sample) => {
            const row = this.samples.find(item => item.id === result.id);
            if (row) {
              row.protocolId = result.protocolId;
              row.sampleId = result.sampleId;
              row.sampleWeight = result.sampleWeight;
              // row.date = result.date;
            } else {
              this.samples = [...this.samples, result];
            }
          }
        );
      }
    });
  }
}
