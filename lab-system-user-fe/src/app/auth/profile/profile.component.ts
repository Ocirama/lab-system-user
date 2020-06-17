import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../../core/api.service';
import {MatDialog} from '@angular/material';
import {CreateComponent} from '../../system/create/create.component';
import {AuthGuard} from '../../core/auth.guard';


@Component({
  selector: 'app-edit',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  error = '';
  form: FormGroup;

  constructor(private api: ApiService, public dialog: MatDialog, public auth: AuthGuard) {
  }

  ngOnInit() {
    this.updateProfileData();
  }

  updateProfileData(data ?: any) {
    this.api.get('/lei/users').subscribe(
      (response: any) => {
        this.user = response;
      }
    );
  }

  showCreateDialog() {
    this.dialog.open(CreateComponent, {
      maxWidth: '750px',
      data: {
        onConfirm: this.updateProfileData.bind(this)
      }
    });
  }
}
