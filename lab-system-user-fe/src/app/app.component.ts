import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core/auth.service';
import {AuthGuard} from './core/auth.guard';
import {DecoderService} from './system/shared/decoder.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-system-backend-fe';
  token = '';

  constructor(private router: Router, private authService: AuthService, private authGuard: AuthGuard, public decoder: DecoderService) {
  }

  ngOnInit(): void {
    this.authService.tokenSubject.subscribe((token) => this.token = token);
  }

  logOut() {
    this.authService.clearToken();
    this.router.navigate(['/user/login']);
  }
}

