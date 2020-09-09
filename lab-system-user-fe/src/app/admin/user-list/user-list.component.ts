import {Component, OnInit, ViewChild} from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import {ApiService} from '../../core/api.service';
import {ModalComponent} from './modal/modal.component';
import {RegisterComponent} from './register/register.component';


interface User {
  id: number;
  name: string;
  username: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'username', 'actions'];
  users: User[] = [];
  dataSource: MatTableDataSource<User>;
  excelDate: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getUsers();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this.api.get('/lei/users').subscribe((data: User[]) => this.dataSource.data = data.filter(x => x.name !== 'admin'));

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: number) {
    this.api.delete(`/lei/users/${id}`).subscribe(
      () => this.users = this.users.filter(item => item.id !== id)
    );
    this.dataSource.data = [];
    setTimeout(() => this.getUsers(), 1000);
    Swal.fire(
      'Užsakovas ištrintas.',
      '',
      'success'
    );
  }

  openDialog(user?: User) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        id: user ? user.id : null,
        name: user ? user.name : null,
        username: user ? user.username : null,
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/users', data).subscribe(
          (userr: User) => {
            const row = this.users.find(item => item.id === user.id);
            if (row) {
              row.name = userr.name;
              row.username = userr.username;
            } else {
              this.users = [...this.users, user];
            }
          }
        );
      }
      this.dataSource.data = [];
      setTimeout(() => this.getUsers(), 1000);
    });
  }

  showRegisterDialog() {
    this.dialog.open(RegisterComponent);
  }

}

