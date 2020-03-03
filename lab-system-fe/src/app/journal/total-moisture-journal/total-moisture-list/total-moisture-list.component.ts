import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../../core/api.service';
import {ModalComponent} from '../../../log/modal/modal.component';
import {filter} from 'rxjs/operators';
import {TotalMoistureModalComponent} from '../total-moisture-modal/total-moisture-modal.component';
import { AuthService } from '../../../auth/auth.service';

interface TotalMoistureJournal {
  id: number;
  protocolId: string;
  sampleId: string;
  trayId: string;
  trayWeight: number;
  trayAndSampleWeightBefore: number;
  trayAndSampleWeightAfter: number;
  trayAndSampleWeightAfterPlus: number;
  // date: Date;
}
@Component({
  selector: 'app-total-moisture-list',
  templateUrl: './total-moisture-list.component.html',
  styleUrls: ['./total-moisture-list.component.css']
})
export class TotalMoistureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'protocolId', 'sampleId', 'trayId', 'trayWeight', 'trayAndSampleWeightBefore', 'trayAndSampleWeightAfter', 'trayAndSampleWeightAfterPlus', /*'date'*/ 'actions'];
  totalMoistureJournals: TotalMoistureJournal[] = [];
  dataSource: MatTableDataSource<TotalMoistureJournal>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,

  ) {}

  ngOnInit() {
    this.api.get('/lei/journals').subscribe((data: TotalMoistureJournal[]) => this.dataSource.data = data);
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
    this.dataSource.filterPredicate = function(data: TotalMoistureJournal, filter: string): boolean {
      return data.protocolId.includes(filter);
    };
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(id: number) {
    this.api.delete(`/lei/journals/${id}`).subscribe(
      () => this.totalMoistureJournals = this.totalMoistureJournals.filter(item => item.id !== id)
    );
  }
  openDialog(totalMoistureJournal?: TotalMoistureJournal) {
    const dialogRef = this.dialog.open(TotalMoistureModalComponent, {
      width: '250px',
      data: {
        id: totalMoistureJournal ? totalMoistureJournal.id : null,
        trayWeight: totalMoistureJournal ? totalMoistureJournal.trayWeight : null,
        trayAndSampleWeightBefore: totalMoistureJournal ? totalMoistureJournal. trayAndSampleWeightBefore : null,
        trayAndSampleWeightAfter: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightAfter : null,
        trayAndSampleWeightBeforePlus: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightAfterPlus : null,
        // date: order ? order.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/journals', data).subscribe(
          (result: TotalMoistureJournal) => {
            const row = this.totalMoistureJournals.find(item => item.id === result.id);
            if (row) {
              row.trayWeight = result.trayWeight;
              row.trayAndSampleWeightBefore = result.trayAndSampleWeightBefore;
              row.trayAndSampleWeightAfter = result.trayAndSampleWeightAfter;
              row.trayAndSampleWeightAfterPlus = result.trayAndSampleWeightAfterPlus;
              // row.date = result.date;
            } else {
              this.totalMoistureJournals = [...this.totalMoistureJournals, result];
            }
          }
        );
      }
    });
  }
}
