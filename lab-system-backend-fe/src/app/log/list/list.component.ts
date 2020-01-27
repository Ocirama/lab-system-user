import {Component, OnInit} from '@angular/core';


import {MatDialog} from '@angular/material';
import {ApiService} from '../../core/api.service';
import {ModalComponent} from '../modal/modal.component';

interface Order {
  id: number;
  protocolId: string;
  /*customer: string;
  test: string;
  sampleType: string;
  orderAmount: number;*/
  // date: Date;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'protocolId' /*'customer', 'test', 'sampleType', 'orderAmount' 'date'*/, 'actions'];
  orders: Order[] = [];

  constructor(
    private api: ApiService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.api.get('/lei/orders').subscribe((data: Order[]) => this.orders = data);
  }

  delete(id: number) {
    this.api.delete(`/orders/${id}`).subscribe(
      () => this.orders = this.orders.filter(item => item.id !== id)
    );
  }

  openDialog(order?: Order) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        id: order ? order.id : null,
        protocolId: order ? order.protocolId : null,
        /*customer: order ? order.customer : null,
        test: order ? order.test : null,
        sampleType: order ? order.sampleType : null,
        orderAmount: order ? order.orderAmount : null,*/
        // date: order ? order.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/orders', data).subscribe(
          (result: Order) => {
            const row = this.orders.find(item => item.id === result.id);
            if (row) {
              row.protocolId = result.protocolId;
             /* row.customer = result.customer;
              row.test = result.test;
              row.sampleType = result.sampleType;
              row.orderAmount = result.orderAmount;*/
              // row.date = result.date;
            } else {
              this.orders = [...this.orders, result];
            }
          }
        );
      }
    });
  }
}

