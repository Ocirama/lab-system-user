import {Component, OnInit, ViewChild} from '@angular/core';


import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../core/api.service';
import {ModalComponent} from '../modal/modal.component';
import Swal from 'sweetalert2';

interface Order {
  id: number;
  protocolId: string;
  customer: string;
  test: string;
  sampleType: string;
  orderAmount: number;
  date: Date;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'protocolId', 'customer', 'test', 'sampleType', 'orderAmount', 'date', 'actions'];
  orders: Order[] = [];
  dataSource: MatTableDataSource<Order>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.api.get('/lei/orders').subscribe((data: Order[]) => this.dataSource.data = data);
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
    this.api.delete(`/lei/orders/${id}`).subscribe(
      () => this.orders = this.orders.filter(item => item.id !== id)
    );
  }

  openDialog(order?: Order) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        id: order ? order.id : null,
        protocolId: order ? order.protocolId : null,
        customer: order ? order.customer : null,
        test: order ? order.test : null,
        sampleType: order ? order.sampleType : null,
        orderAmount: order ? order.orderAmount : null,
        date: order ? order.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/orders', data).subscribe(
          (result: Order) => {
            const row = this.orders.find(item => item.id === result.id);
            if (row) {
              row.protocolId = result.protocolId;
              row.customer = result.customer;
              row.test = result.test;
              row.sampleType = result.sampleType;
              row.orderAmount = result.orderAmount;
              row.date = result.date;
            } else {
              this.orders = [...this.orders, result];
            }
          }
        );
      }
    });
    this.swalOrderUpdate();
  }

  swalOrderUpdate() {
    Swal.fire(
      'Užsakymas papildytas.',
      '',
      'success'
    );
  }

  swalOrderDelete() {
    Swal.fire(
      'Užsakymas ištrintas.',
      '',
      'success'
    );
  }
}

