import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ApiService} from '../../core/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  error = '';
  form: FormGroup;

  constructor(private api: ApiService, private router: Router, private formBuilder: FormBuilder, private dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  submit() {
    this.loading = true;

    this.api.post('/login', {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value
    }).subscribe((authenticated: any) => {
        if (authenticated) {
          this.authService.setToken(authenticated.token);
          this.router.navigate(['/system']);
        }
      },
      (error) => {
        if (error.status === 401) {
          this.error = 'Invalid username or password';
        } else {
          this.error = 'A network error occured';
        }
        this.loading = false;
      });
  }

}
